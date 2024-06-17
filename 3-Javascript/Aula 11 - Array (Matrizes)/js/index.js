/* ARRAYS
Os arrays Javascript são usados para armazenar vários valores em uma única variavel. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os
arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz","feijão","macarrão","leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.

*/
                //0       //1      //2       //3
//const lista = ["arroz","feijão","macarrão","leite"];//quando a gente já passa todos os itens que vão fazer parte da nossa lista(array), a gente chama a nossa matriz de (array literal)

//alert(lista[2]);

///const list = []; //<--segunda forma de fazer arrays
//list[0] = "arroz";
//list[1] = "feijão";
//list[2] = "macarrão";
//list[3] = "leite";

///const lis = new Array("arroz", "feijão", "macarrão", "leite");//<--teiceira forma de fazer arrays

//const lista = ["arroz","feijão","macarrão","leite"];
//let x = lista[3]//[]<--indicar o indice
//alert(x)

///Alterar o valor de uma matriz:
//const lista = ["arroz","feijão","macarrão","leite"];
//lista[0] = "Café";
//alert(lista[0]);

///Como ver todos os itens de uma matriz:
//const lista = ["arroz","feijão","macarrão","leite"];
//lista[0] = "Café";
//console.log(lista);

///Os arrays são um tipo especial de objeto, posso ter coisas mais complexas, aqui esta a diferença entre array e objetos:
//const pessoa=["dimitri","teixeira",30];//array
//const pessoa={nome:"dimitri",sobrenome:"teixeira",idade:30};//objeto

//pessoa.nome;//<--se eu quiser pegar o nome no objeto,seria dessa forma no objeto
//pessoa[0];//<--se eu quiser pegar o nome no array,seria dessa forma no array
//OBS:é interessante você usar matrizes(arrayz) quando for trabalhar com dados mais elaborados, objetos a gente pode usar as vezes quando e uma coisa um pouco mais simples, um item em especifico com varias propriedades dentro dele.

///Entendendo algumas coisas que podemos fazer com o array:
//const pessoa=["dimitri","teixeira",30];//array
//alert(pessoa.length);//3<--ele me retorna quantos itens tem dentro da minha matriz (pessoa)

//const pessoa=["dimitri","teixeira",30,"professor"];

   //matrix //[]posição, na posição a gente coloca o tamanho da nossa matrix é -1 
//alert(pessoa[pessoa.length-1]);//esse código sempre vai mostrar o último item do array

///Adicionar um item dentro da matriz:
//const pessoa=["dimitri","teixeira",30,"professor"];
//pessoa.push("Brasileiro");//1 forma de acrescentar mais 1 item, usando o push
//console.log(pessoa);

//const pessoa=["dimitri","teixeira",30,"professor"]; 
//pessoa[pessoa.length]="Casado" //2 forma de acrescentar mais 1 item
//console.log(pessoa)

//CUIDADO!!!
//const pessoa=["dimitri","teixeira",30,"professor"]; 
//pessoa[8]="Casado" //3 forma de acrescentar mais 1 item
//console.log(pessoa[6]);
//alert(pessoa[6]);

///Como saber de uma variável é mesmo um array?
const pessoa=["dimitri","teixeira",30,"professor"];
//Array.isArray(pessoa);//<--se for um array ele volta (true)

alert(Array.isArray(pessoa));//TRUE- isto é um array

const x = "Dimitri"
alert(Array.isArray(x))//TRUE- isto não é um array
