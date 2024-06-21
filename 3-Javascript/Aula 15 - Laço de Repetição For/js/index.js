/* Laço de Repetição For
Laços oferecem um jeito facil e rápido de executar uma ação
repetidas vezes. 
*/

/*for (let i=0; i<10001; i++){//dentro do for temos q passar 3 paramêtros, ponto inicial, condição, e o que vai acontecer dps dessa condição
   document.getElementById("teste").innerHTML+= i + ", "//eu nao posso atribuir o (=) pq se nao ele vai pegar so o ultimo valor do laço, entao eu tenho usar o (+=) que e pra acrescentar sem perder oque tinha antes na variavel
}*/


/*for (let i=1900; i<2025; i++){
   document.getElementById("ano").innerHTML+="<option value='"+i+"'>"+i+"</option>";
}*/


/*for (let i=2024; i>=1900; i--){
   document.getElementById("ano").innerHTML+="<option value='"+i+"'>"+i+"</option>";
}*/


/*var ano = new Date().getFullYear();
for (let i=ano; i>=1900; i--){//ter o valor do ano corrente, o valor vai continuar o mesmo, mas se virar o ano para 2025 eu não preciso ir no código e mudar manualmente, usando o getFullUYear muda automaticamente
   document.getElementById("ano").innerHTML+="<option value='"+i+"'>"+i+"</option>";
}*/

const carros = ["Gol","Fusca","Brasília","Del Rey","Chevette"];
var tamanho = carros.length;

for (let i=0; i<tamanho; i++){//com o laço de repetição(for) ele realmente esta percorrendo cada um deses itens da minha matriz, e mostrando o resultado pra mim 
   document.getElementById("teste").innerHTML+=carros[i] + " - ";
}