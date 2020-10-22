module.exports = (client,msg) =>{
    var facts = ["A derrota de hoje não será maior do que a de amanhã.", "Nenhum obstáculo é grande para quem desiste.", "Acreditar que você pode ja é meio caminho errado.", "Nunca se esqueça que você é limitado.","O recomeço é a oportunidade de um novo fracasso.","Eu sou tudo que como? não lembro de ter comido solidão e desgraça.", "Ninguém precisa te humilhar...Um espelho ja faz isso.","Está tudo dando certo.....Ai você acorda","Nunca diga que é impossível. Diga: “Eu sou incapaz!", 
    "Só dará errado se você tentar, Portanto nem tente.","Se quiser fazer algo mal feito, faça você mesmo."];
    var fact = facts[Math.floor(Math.random() * facts.length)];
    msg.reply(`Frase do dia: ${fact}\n`);
}