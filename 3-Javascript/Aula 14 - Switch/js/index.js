/* Switch
É usado para realizar diferentes ações com base em diferentes condições
no mesmo bloco de verificação. Caso a condição não seja compatível
não será executada e o valor padrão será acionado.
*/

/*///DECLARAÇÃO SWITCH: switch (expressao){
   case a:
      //o que acontece
      break;
   case b:
      //o que acontece
      break;
   case c:
      //o que acontece
      break;
   default:
   //o que acontece   
}*///

/*function verificaCor(){
   let cor = document.getElementById("cor").value;

   switch (cor){
      case "azul":
         //o que acontece
         document.body.style.backgroundColor="blue";
         break;
      case "vermelho":
         //o que acontece
         document.body.style.backgroundColor="red";
         break;
      case "amarelo":
         //o que acontece
         document.body.style.backgroundColor="yellow";
         break;
      default://caso a gente não coloque o default ele vai continuar lendo a continuação do código
      //o que acontece
      document.getElementById("teste").innerHTML="Nenhuma cor disponível para:"+cor; 
   }

}*/

/*function verificaCor(){//===
   let cor = document.getElementById("cor").value;

   let x = 0

   switch (x){
      case 0:
         //o que acontece
         document.getElementById("teste").innerHTML="A variavel é 0"
         break;

      default:
      document.getElementById("teste").innerHTML="Não foi econtrado"+x;
   }

}*/

/*function verificaCor(){
   let cor = document.getElementById("cor").value;
   cor = cor.toLowerCase();//deixa tudo minusculo

   switch (cor){
      case "azul":
         //o que acontece
         document.body.style.backgroundColor="blue";
         break;
      case "vermelho":
         //o que acontece
         document.body.style.backgroundColor="red";
         break;
      case "amarelo":
         //o que acontece
         document.body.style.backgroundColor="yellow";
         break;
      default://caso a gente não coloque o default ele vai continuar lendo a continuação do código
      //o que acontece
      document.getElementById("teste").innerHTML="Nenhuma cor disponível para:"+cor; 
   }
}*/

function diaDaSemana(){

   var dia = new Date().getDay();

   console.log(dia)

   switch (dia){
      case 0:
         document.getElementById("teste").innerHTML = "Hoje é Domingo"
         break;

      case 1:
         document.getElementById("teste").innerHTML = "Hoje é Segunda"
         break;

      case 2:
         document.getElementById("teste").innerHTML = "Hoje é Terça"
      break;

      case 3:
         document.getElementById("teste").innerHTML = "Hoje é Quarta"
      break;

      case 4:
         document.getElementById("teste").innerHTML = "Hoje é Quinta"
      break;

      case 5:
         document.getElementById("teste").innerHTML = "Hoje é Sexta"
      break;

      case 6:
         document.getElementById("teste").innerHTML = "Hoje é Sabádo"
      break; 

      default:
      document.getElementById("teste").innerHTML="Não sei que dia é..."
   }
}


