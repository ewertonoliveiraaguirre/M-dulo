//importando as funções dos módulos
import { divisao } from "./divisao.mjs";
import { multiplicar } from "./multiplicar.mjs";
import { potencia } from "./potencia.mjs";
import { somar } from "./somar.mjs";
import { subtracao } from "./subtracao.mjs";


//utilizando as funçoes importadas
const numero1 = 5
const numero2 = 3

const resultadoSoma = somar(numero1,numero2)
const resultadoMultiplicacao  = multiplicar(numero1,numero2)
const resultadoDivisao = divisao(numero1,numero2)
const resultadopotencia = potencia(numero1,numero2)
const resultadosubtracao = subtracao(numero1,numero2)

console.log(numero1 +' + '+numero2+" = "+resultadoSoma);
console.log(numero1 +' x '+numero2+" = "+resultadoMultiplicacao);
console.log(numero1 +' / '+numero2+" = "+resultadoDivisao);
console.log(numero1 +' ^ '+numero2+" = "+resultadopotencia);
console.log(numero1 +' - '+numero2+" = "+resultadosubtracao);

