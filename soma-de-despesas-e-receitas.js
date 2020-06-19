//                              Soma de despesas e receitas

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];


// Serve pra calcular o saldo e expelir esse dado na sua execução
function calculaSaldo(receitas, despesas) {
  const somaReceitas = somaNumeros(receitas)
  const somaDespesas = somaNumeros(despesas)


  return somaReceitas - somaDespesas
}



function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
  // armazeando na variável soma pra poder o dado e posteriormente tirar ele da função
  let soma = 0

  for (let numero of numeros) {
    soma += numero
  }

  // Enviar o dado da soma pra fora da função quando for executada
  return soma
}




// Percorrendo o array de cada usuario com o for loop e usando a função calculaSaldo com os parametros de receitas e despesas
for (let usuario of usuarios) {
  // Para que a função somaNumeros possa somar o array dos parametros receitas e despesas de cada usuários individualmente
  const saldo = calculaSaldo(usuario.receitas, usuario.despesas)


  // Se o saldo for positivo, exibir com a mensagem positiva
  // Caso contrário, exibir o saldo negativo
  // .toFixed é um método para restringir a quantidade de casas após as casas decimais.
  if (saldo > 0) {
    console.log(`${usuario.nome} possui um saldo POSITIVO de ${saldo.toFixed(2)}`)
  } else {
    console.log(`${usuario.nome} possui um saldo NEGATIVO de ${saldo.toFixed(2)}`)
  }
}
