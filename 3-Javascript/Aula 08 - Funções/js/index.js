/* FUNÇÕES
Uma função Javascript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada de uma informação e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contruibuir para todo código.

Uma função Javascript é executada quando "algo" a invoca (chama-a)*/


//FUNÇÃO DE SOMA
/*function soma(valor1,valor2){ //a gente tem tipo uma fabrica que fica fazendo as somas independente do valor
    return valor1 + valor2;
}
//document.getElementById("texto").innerHTML=soma(90,10); //aqui eu estou invocando essa função(function)
var total = soma(90,20);//aqui eu estou invocando essa função(function)
alert(total);*/


//FUNÇÃO DE MULTIPLICAÇÃO
/*function realParaDolar(real,cotacaoDolar){//(real) é o primeor parametro, e o segundo parametro e o (cotacaoDolar)
    return real*cotacaoDolar;
}
var total = realParaDolar(10,5.08);
alert(total)*/


//////CONVERTER U$ EM R$////// - //FUNÇÃO DE COTAÇÃO DO DOLÁR
/*function realParaDolar(cotacaoDolar,real){ //(real) é o primeor parametro, e o segundo parametro e o (cotacaoDolar)
    return cotacaoDolar*real;
}
var valorDolar = 40;
var cotacao = 5.40;
var total = realParaDolar(cotacao,valorDolar);
//alert(total)
alert("O valor em Dolar é U$: " + valorDolar + " O valor convertido para Real R$ é: "+ total)*/

//////CONVERTER R$ EM U$//////
/*function realParaDolar(cotacaoReal,dolar){ //(real) é o primeor parametro, e o segundo parametro e o (cotacaoDolar)
    return cotacaoReal*dolar;
}
var valorReal = 100;
var cotacao = 0.19;
var total = realParaDolar(cotacao,valorReal);
//alert(total)
alert("O valor em Real é R$: " + valorReal + " O Valor convertido para Dolár é U$: "+ total)*/


///INVOCANDO UMA FUNÇÃO
/*function alertaHello(){
    alert("Olá pessoal do JS");
}

alertaHello();*/
//------------------------
//OUTRO EXEMPLO
/*function paraCelsius(valorFahrenheit){
    return (5/9)*(valorFahrenheit-32);
}

var x = paraCelsius(77); //fahrenheit
alert("A temperatura é de "+x+" graus celsius")*/
//------------------------
function minhaFuncao(){
    var x = 2; //essa variavel vai funcionar só dentro do bloco da função(function), fora dele não - (variavel local) ao menos que essa função esteja dentro de outra função ou que se fora ela ja tenha sido declarada
}