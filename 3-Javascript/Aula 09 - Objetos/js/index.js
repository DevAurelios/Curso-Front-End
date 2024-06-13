/* OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca:"ford",modelo:"ka",ano:2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocada dentro de uma propriedade.

*/
 //objeto:carro  //abaixo fica as prOpriedAdes entre{}, marca, modelo, ano, placa, cada 1 tem seu valor
const carro={ //Aqui acabamos de definir um objeto
    marca:"ford",
    modelo:"ka", 
    ano:2015, 
    placa:"ABC-1234",
    buzina: function(){alert("Biiiiiiiiiiiiiiiiiiiiiiiii")},//<(método), um método e quando a gente cria uma propriedade que tem uma função dentro dela, são funções dentro de uma propriedade, que podem ser invocadas em qualquer momento no codigo
    completo: function(){
        return "A marca é "+this.marca+" e o modelo é: "+this.modelo; //this quer dizer(este), deste objeto eu quero a marca
    }
};
//uma prática comum e usar o (const) ao inves do (let), para o contéudo não mude
//quando nós definimos um valor para um objeto, nós dizemos que esse é um objeto LITERAL, a gente ja determina pra ele ja as propriedades que ele vai ter.

//se a gente quer com que o método seja adicionado e bem simples, olhe abaixo
//carro.buzina();

//console.log(carro.ano);
//console.log(carro["marca"]);
console.log(carro.completo())// () < é a chamadinha de nossa função


