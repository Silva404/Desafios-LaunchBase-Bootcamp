//                             Usuários e tecnologias

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];


for (let a = 0; a < usuarios.length; a++) {

    let tecnologias = ''
    for(let i = 0; i < usuarios[a].tecnologias.length; i++) {
        if (i == 0) {
            tecnologias += `${usuarios[a].nome} trabalha com ${usuarios[a].tecnologias[i]}`
        } else {
            tecnologias = `${tecnologias}, ${usuarios[a].tecnologias[i]}`
        }        
    }
    console.log(tecnologias)
}