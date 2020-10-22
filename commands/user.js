module.exports = async (client,msg) =>{
    msg.channel.send(`Nome de Usuário: ${msg.author.username}\nID: ${msg.author.id}`);
}