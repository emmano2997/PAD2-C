// resolvam
// criem um fork deste repositorio e resolvam esta atividade

// Função recebe como parâmetro um valor numérico x
// e retorna o seu quadrado.
function retornaQuadrado(base){
  return base ** 2; //5^2 = 25
}

function retornaResto(dividendo, divisor){
  return dividendo % divisor;
   // 5/2 = 2,5 
   // 5%2 = 4(1)
}

// 24 = retornaQuadrado(x) - retornaResto(x,y)
// 24 =         25         - 
// 24 - 25 = retornaResto(5,2)

// Função recebe como parâmetro as funções retornaQuadrado e retornaResto
// e retorna o resultado da subtração entre os valores retornados por estas funções, respectivamente.
let valor1 = 5, valor2 = 2;

function retornaValor(a,b){
  console.log(a(valor1)-b(valor1,valor2));
}

retornaValor(retornaQuadrado, retornaResto);