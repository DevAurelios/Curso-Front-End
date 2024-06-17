///Método Join
//const pessoa =["Dimitri", "Texeira", 30, "Professor"];//array
//pessoa.pop();//2-Método Pop - Remover último item

//pessoa.push("Qualquer Coisa")//3-Método Push - Adicionar um item no fim

//pessoa.shift();//4-Método Shift - Remover primeiro item ! Os indices são alterador quando a gente usa ele

//pessoa.unshift("Bonitão");//5-Método Unshift - Adicionar um item no começo

//delete pessoa[0];//6-Método Delete - ele vai deletar o item soq ele não vai mudar as posiçõe, não e recomendado, a não ser que seja proposital e vc queira deixar aquele campo (undefined)

//pessoa.splice(1,0,"Item adicionado 1", "Item adicionado 2");//7-Método Splice - vc indica qual e a posição onde vc quer colocar, se vai ser deletado ou não, quantos itens vão ser deletados e dps os valores que vc quer q sejam acrescentados naquele ponto da nossa matriz

//const lista1 = ["Arroz", "Feijão", "Leite", "Macarrão"];//8-Método Concat
//const lista2 = ["Suco", "Refrigerante", "Carne"];//8-Método Concat
//const lista3 = ["Salgadinho"];//8-Método Concat
//const superLista = lista1.concat(lista2, lista3)//8-Método Concat - vc pode colocar quantas listas vc quiser sendo concatenando (concat), só lembrando de atribuir a uma nova variável, pq foi criado uma nova matriz a partir dessas, as matrizes continuam existindo individualmente

//const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Neymar","CR7", "Vampeta", "Dimitri"]
//const craques = jogadores.slice(2,6)//9-Método Slice - ele fatia a matriz de x posição ou pode ser de x ate y, soq a ultima casa não é mostrada, diferente da primeira casa que e a posição inicial, essa é mostrada

//const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Neymar","CR7", "Vampeta", "Dimitri"]
//const jogOrdem = jogadores.sort();//10-Método Sort - ele deixa em ordem alfabetica
//jogadores.sort();//10 - Método Sort - se vc quiser fazer o invertido, primeira deixa em ordem alfabetica e dps use o reverse
//jogadores.reverse();//10 - Método Sort


//document.getElementById("teste").innerHTML=superLista.join(" * ")//1-Método Join - ele trocou o separador entre os nossos itens do nosso array

//const numeros=[40,100,1,5,25,10];//11- Deixar Array em Ordem Númerica
//numeros.sort(function(a,b){return a-b});//11-Deixar Array em Ordem Númerica - fazer ter que fazer hackzinho aqui, que é passar uma função comparativa, , function a b, que é dois termos de comparação, e eu vou colocar a menos b. Então, para cada item dessa nossa lista, ele vai fazer uma comparação para ver se é menor ou maior numericamente falando, e aí ele vai me dar o retorno certo do número. Se eu fizer dessa forma, passando sort e dentro passando function a b e pedir para ele retornar a menos b, olha só o que ele vai me fazer. Ele vai colocar os números na ordem correta numérica
//numeros.sort(function(a,b){return b-a});//Ao contrario

//const numeros=[40,100,1,5,25,10];//12-pegar o MAIOR número de um array
//document.getElementById("teste").innerHTML=maiorNumero(numeros);
//function maiorNumero(Array){//12-pegar o MAIOR número de um array
  // return Math.max.apply(null, Array);//12-pegar o MAIOR número de um array - essa função que a gente usa para pegar o maior numero da matriz no JS
//}

//const numeros=[40,100,1,5,25,10];//13-pegar o MENOR número de um array
//document.getElementById("teste").innerHTML=menorNumero(numeros);
//function menorNumero(Array){//13-pegar o MENOR número de um array
   //return Math.min.apply(null, Array);
//}

const numeros=[40,100,1,5,25,10]; //14 - Filtragem de números
const maior20= numeros.filter(filtragem);

document.getElementById("teste").innerHTML=maior20;

function filtragem(value, index, array){//valor, indice, e a matriz
   return value>20;//14 - Filtragem de números
}
