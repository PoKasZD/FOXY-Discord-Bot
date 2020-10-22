const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = async (client,msg) =>{
    let estados = {
        "online": "Conectado",
        "offline": "Desconectado",
        "idle": "Ocupado",
        "dnd": "Não Pertube"
    }
    const usuario = msg.mentions.members.first() || msg.member;
    const embed = new Discord.RichEmbed()

        .setColor("RANDOM")
        .setDescription(`Informação do Usuário ${usuario.user.username}`)
        .setThumbnail(usuario.user.displayAvatarURL)
        .addField(`Nome Completo`,`${usuario.user.tag}`)
        .addField(`ID`,`${usuario.id}`)
        .addField(`Status`,`${estados[usuario.presence.status]}` )
        .addField(`Cargos`,`${usuario.roles.map(m => m).join( " ** | **")}`)
        
    return msg.channel.send(embed)
    }
