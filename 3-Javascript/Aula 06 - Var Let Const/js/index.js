/* Vamos entender Variaveis
Variaveis são "recipientes" onde podemos armazenar informações que
podem variar, ou seja, podem ter qualquer tipo de valor.

No Javascript temos 3 palavras-chaves para declarar variáveis:
-> var - Coringa (Ele pode ser redeclarado, vai funcionar fora ou dentro do bloco de códigos, em qualquer lugar ele vai funcionar, e ele vai receber sempre valores conforme o que foi por último.)
-> let - (Ele vai pegar só o valor 1 vez, não pode reatribuir, mas ele pode ter mudanças em bloco de códigos, ele respeita a hierarquia da onde ele está, o escopo.)
-> const - (Ele é o mais estrito, uma vez que você coloca um valor, já era, ele sempre vai ser o valor definido.)
*/


/* Usanndo a variável VAR
var pote = "Bombom";
//lert(pote);


//Declaração de variáveis
var a,b,c;

//Atribuição dos valores
a = 2;
b = 3;
c = a + b;
//alert(c)
//--------------------
var a,b,c;
var a = 2;
b = 3;
c = a + b;
var a = 9;
//alert(a)
//--------------------
var nome, sobrenome, nomeCompleto, idade, soma;
nome="Dimitri"
sobrenome="Teixeira"
idade = 30;
nomeCompleto= nome +" "+ sobrenome;

soma = idade + 10

//pessoa = nome + idade + 10;
pessoa = nome + " " + soma; 

//document.getElementById("texto").innerHTML = nomeCompleto;
document.getElementById("texto").innerHTML = pessoa;*/


/* Usanndo a variável LET
//let pessoas = "Dimitri";//<-Não permite uma redeclaração de uma variável
//let pessoas = "João";//<-Não permite uma redeclaração de uma variável
//alert(pessoas);

//var x = 10; //aqui é 10

{
    var x = 2; //aqui é 2
}

//aqui também vai ser 2
document.getElementById("texto").innerHTML= x;

let x = 10; //aqui é 10

{
    let x = 2; //aqui é 2
    
}
//aqui também vai ser 10
document.getElementById("texto").innerHTML= x;*/

const x = 10; //aqui é 10

{
    const x = 2; //aqui é 2
}
//aqui também vai ser 10
document.getElementById("texto").innerHTML= x;