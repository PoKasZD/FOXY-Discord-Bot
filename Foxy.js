const {
    Client,
    Attachment
} = require('discord.js');
const { prototype } = require('opusscript');

const client  = new Client();
const prefix   = "!";
const commands = require("./scripts/commandsReader.js")(prefix);
const ytdl = require("ytdl-core");
var version = '1.2';
var servers = {};

client.on("ready",()=>{
    console.log(`Logando com o bot ${client.user.tag}`);
});

client.on("message",(msg)=>{
    if(!msg.author.bot){
        console.log(`${msg.author.username}: ${msg.content}`);
        if(msg.content == "Bom dia") msg.reply("Bom dia FOXY" + msg.author.username );
        const args = msg.content.split(" ");
        if(commands[args[0]]) commands[args[0]](client,msg);
    }
});

client.on('message', message =>{

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'exec':

            function exec(connection, message){
                var server = servers[message.guild.id];

                server.dispatcher = connection.playStream(ytdl(server.queue[0],{filter: "audioonly"}));
                server.queue.shift();
                server.dispatcher.on("Fim", function(){
                    if(server.queue[0]){
                        exec(connection,message);
                    }else {
                        connection.disconnect();
                    }

                });
                
            }

            if (!args[1]){
                message.channel.send("impossivel reproduzir sem o link!")
                return;
            }

            if(!message.member.voiceChannel){
                message.channel.send("Entre em algum canal de voz!");
                return;
            }
            
            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []

            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
                exec(connection, message);
            })



        break;

        case 'jump':
            var server = servers[message.guild.id];
            
            if(server.dispatcher) server.dispatcher.end();
             message.channel.send("Pulando Musica...")
         break;

        case 'shutup':
            var server = servers[message.guild.id];
             if(message.guild.voiceConnection){
                 for(var i = server.queue.length -1; i >=0; i--){
                     server.queue.splice(i,1);
                 }
                 
                 server.dispatcher.end();
                 message.channel.send("Valeu, Falou")
                 console.log("Removido ")
                 message.guild.voiceConnection.disconnect();


             }
             if(message.guild.connection) message.guild.voiceConnection.disconnect();
        break;

        
    } 
});



client.login("key do bot");