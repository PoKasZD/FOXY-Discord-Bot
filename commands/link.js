
const link = "https://discord.gg/df7f5Hh"

module.exports = (client,msg) =>{
    msg.channel.send(`Link: ${link}\n`);
    if (msg.content.startsWith("avatar")) {
        msg.channel.send(msg.author.avatarURL);
        };
}