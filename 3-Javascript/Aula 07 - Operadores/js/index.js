/* vamos enteder Operador:
-> Os operadores Javascript são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += -= && || etc...

São separados em 6 "categorias:

1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operador Condicional (Ternário)
6) Operadores Lógicos

*/
//----------------------------------------
//1) Operadores Aritméticos (matemáticos) - Operadores de Atribuição
/*var valor1, valor2, total;
valor1 = 5; //(=) Operadores de Atribuição, vc atribuiu ao total o valor 1, valor2
valor2 = 2;
total = valor1 + valor2; //<--Soma
alert(total);*/

/*var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total = valor1 - valor2; //<--Subtração
alert(total);*/

/*var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total = valor1 * valor2; //<--Multiplicação
alert(total);*/

/*var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total = valor1 / valor2; //<--Divisão
alert(total);*/

//os incrementos são bons para itens de carrinhos, onde o cliente aperta em (-) e o (de-in)cremento funciona, ou viseversa
/*var valor1, valor2, total;//
valor1 = 5;
valor2 = 2;
total = ++valor1 //<--(++)incremento na variavel a mais, exemplo:var valor1 = 5;, com a incrementação do (++) agr vale 6
alert(total);
alert("O valor 1 ficou: " + valor1)*/ //<-- (+z)Operadores de Sequência


/*var valor1, valor2, total;
valor1 = 5;
valor2 = 2;
total = --valor1 //<--(--)decremento na variavel a menos, exemplo:var valor1 = 5;, com o decremento do (--) agr vale 4
alert(total);
alert("O valor 1 ficou: " + valor1)*/

//----------------------------------------
//2) Operadores de Atribuição

/*var valor1, valor2, valor3;
valor1 = 5; //<--(=)operador de atribuição
valor2 = 2;

valor1 = valor1 + valor2; //<--isso aqui é cringe
valor1 +=  valor2; //<-- isso aqui seria um atalho

valor1 = valor1 - valor2; //<--isso aqui é cringe
valor1 -=  valor2; //<-- isso aqui seria um atalho

valor1 = valor1 * valor2; //<--isso aqui é cringe
valor1 *=  valor2; //<-- isso aqui seria um atalho

valor1 = valor1 / valor2; //<--isso aqui é cringe
valor1 /=  valor2; //<-- isso aqui seria um atalho*/

//----------------------------------------
//3) Operadores de Sequência

/*var valor1, valor2, total;
valor1 = "Dimitri ";
valor2 = "Teixeira";
total = valor1 + valor2; //<--Quando a gente usa o sinal de (+) com palavras, a gente da usando o operador de sequência(concatenando) uma variavel que vai juntar duas letras
alert(total)*/

//----------------------------------------
//4) Operadores de Comparação

/*var valor1, valor2, total;
valor1 = 8;
valor2 = 8;
total = (valor1 == valor2);//true(verdadeiro) ou false(falso) //<--(==)operador de comparação, se uma coisa e igual a outra, vai verificar se o valor é o mesmo
alert(total)

var valor1, valor2, total;
valor1 = 8;
valor2 = "8";
total = (valor1 === valor2);//true(verdadeiro) ou false(falso) //<--(===)operador de comparação, vai verificar se o valor e o tipo é o mesmo
alert(total)

var valor1, valor2, total;
valor1 = 8;
valor2 = 12;
total = (valor1 != valor2);//<--(!=)diferente, não igual
alert(total)

var valor1, valor2, total;
valor1 = 8;
valor2 = 12;
total = (valor1 !== "8");//<--(!==)vai verificar se é diferente, não igual ao valor e o tipo
alert(total)

var valor1, valor2, total;
valor1 = 8;
valor2 = 12;
total = (valor1 < 4);//valor1 e menor que o valor de 4?
alert(total)

var valor1, valor2, total;
valor1 = 8;
valor2 = 12;
total = (valor1 > 4);//valor1 e maior que o valor de 4?
alert(total)

var valor1, valor2, total;
valor1 = 8;
valor2 = 12;
total = (valor1 >= 9);//valor1 e maior ou igual que o valor de 8?
alert(total)

var valor1, valor2, total;
valor1 = 8;
valor2 = 12;
total = (valor1 <= 9);//valor1 e maior ou igual que o valor de 8?
alert(total)*/

//----------------------------------------
//5) Operador Condicional (Ternário)
/*var idade, eleitor;
idade=18;*/
//eleitor=(idade<18) ? "Não eleitor"/*(<--true)*/:"Sim, eleitor"/*(<--false)*///<--eu to falando pra variavel eleitor, ela ter uma condição(ternaria) um operador condicional
//alert("A resposta é: "+ eleitor);

//var idade, eleitor;
//idade=17;
//eleitor=(idade<18) ? "Não eleitor"/*(<--true)*/:"Sim, eleitor"/*(<--false)*///<--eu to falando pra variavel eleitor, ela ter uma condição(ternaria) um operador condicional
//alert("A resposta é: "+ eleitor + " A idade dele é de " + idade);//entre () a gente coloca a condição dai a gente coloca um ? e o valor verdadeiro e(:) falso

//----------------------------------------
//6) Operadores Lógicos - são quanto a gente precisa de fazer mais de 1 condição
//var idade, eleitor, resultado;
//idade=70;
//eleitor=(idade<18) ? "Não eleitor":"Sim, eleitor";
//resultado=(idade>60 && idade <70);//se for verdadede(true), se não(false) - (&&)é
//alert(resultado)

/*var idade, eleitor, resultado;
idade=72;
eleitor=(idade<18) ? "Não eleitor":"Sim, eleitor";
resultado=(idade===70 || idade===72);//verdade(true), se não(false) (||) essas barras sao o OU, OU uma condição, OU outra
alert(resultado)*/

var idade, eleitor, resultado;
idade=72;
eleitor=(idade<18) ? "Não eleitor":"Sim, eleitor";
resultado= !(idade===72);//(!)negação,não - significa o contrario do que esta ai dentro
alert(resultado) //(&& - É) (|| - OU) (! - Negação)
