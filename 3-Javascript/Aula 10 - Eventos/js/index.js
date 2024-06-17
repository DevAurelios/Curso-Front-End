/* EVENTOS
Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um Click.
ondblclick -> Disparado quase clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco. Válida para input, s
oncharge -> Disparado quando existe uma mudança no conteúdo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionado.
onkeypress -> Disparado quando uma tecla é pressionado e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimencionamento da janela.

*/
//--------EVENTO ONCLICK-----------//
//--------EVENTO ONCLICK
function eventoClick(){
    alert("Acionou um evento de click")
    document.body.style.backgroundColor="yellow"; //eu falei que no meu documento(document) na minha TAG (body) eu quero mudar o estilo(style) e a cor do fundo(backgroundColor) eu quero que fique amarela("yellow"), isso vai acontecer quando eu clicar, ou seja, eu fiz uma manipulação de um evento usando JS, eu manipulei o corpotamento da minha página com JS
}
//--------EVENTO ONDBLCLICK
function eventoDblclick(){// ()é a chamada da função
    alert("Evento de clique duplo");//esse evento é ativado quando a pessoa apertar 2 vezes o botão de click sem rapido
    document.body.style.backgroundColor="blue"
}
//--------EVENTOS DE MOUSE-----------//
//--------EVENTO ONMOUSEOVER
function viraVermelho(){
    let div = document.getElementById("teste");//elemento chamado "teste" agr vai ser contido nessa variavel chamada var(let)
    div.style.backgroundColor="red";//nessa nossa div cujo id e "teste" a gente quer mudar o estilo(styele), a cor do fundo(backgroundColor) vai ser vermelha
    //OBS:quando você tira o mouser, a cor não volta ao azul, a gente vai querer q ele volte ao azul, a gente vai ter que usar o "onmouseout"
}
//--------EVENTO ONMOUSEOUT
function viraAzul(){
    let div = document.getElementById("teste");//e basicamente o viraVermelho, soq esse vira o azul
    div.style.backgroundColor="blue";
}
//--------EVENTO ONMOUSEMOVE
function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append("O mouse moveu<br>")//(append é pra adicionar)
}
//--------EVENTOS INPUTS(eventos relacionados aos campos de input)-----------//
//--------EVENTO ONFOCUS
//quando eu clico no campo de input ele fica com uma borda mais escura, quer dizer que o item recebeu foco, atenção
function limpaTexto(){ //
    document.getElementById("campoTexto").value="";//nesse caso como é um campo de tipo texto, a gente usa o value, que e o valor do campo
}
//--------EVENTO ONCHANGE
function mudou(){
    console.log("Mudou")//quando eu clico fora ele mudou, pq o conteúdo foi mudado, então a partir do momento que você desfoca aqui o item é ele teve uma alteração, ai você aciona o evento do "onchange", ele funciona melhor com outros tipos de elementos
}
//--------EVENTO ONBLUR
function eventoclick(){
    document.body.style.backgroundColor="yellow";//quando eu desfocar o meu campo, ele dispara a função "onblur"
}
//--------EVENTOS DE TECLADO-----------//
//--------EVENTO ONKEYPRESS
function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;//quando a pressoa pressionar uma tecla, essa nova variavel chamada "input" vai pegar qual que é o valor do campo, é vamos pedir ao console.log qual que é o valor de input
    console.log(input)
}
//--------EVENTO ONKEYDOWN
function teclaPressionadA(){
    let input = document.getElementById("campoTexto").value;
    console.log(input)
}
//--------EVENTO ONKEYUP
function teclaPressioNadA(){
    let input = document.getElementById("campoTexto").value;//quando eu pressiono ele não da nenhum evento, agora quando eu solto ele ativa o evento
    //console.log(input)
    //console.log('Tecla pressionada')
}
//-----------------------
//--------EVENTO ONLOAD
//ele é disparado na tag body, quando a nossa página for carregada completamente
//pq a gente tem um evento de quando a página terminou de carregar? pq talvez a sua página seja muito grande, tenha muitos recursos que precisam ser carregadas, imagens, arquivos externos, uma página meio pesada, então você pode fazer com q alguma coisa q você deseja so apareca dps de tudo terminar de carregar, exemplo: você pode carregar oq e o mais principal por primeiro, e assim q você tiver um evento q a página q foi carregada, o teu JS, por programação você diz que pode mostrar isso, mostrar aquilo, dps q carregou fazer isso ou aquilo, isso e bom para ter um controle dps que a página foi carregada
//--------EVENTO ONRESIZE
//Esse evento é disparado quando a nossa página teve algum tipo de redimensionamento, quer dizer, quando a gente aumentou ou diminuiu o tamanho da tela. Isso aqui é interessante, por exemplo, para com o JavaScript você poder controlar tamanhos de tela, o que acontece se for numa tela de tamanho X, tamanho Y. Então, é esse evento de OnResize que é que vai ser disparado quando ele detectar que teve algum tipo de mudança no tamanho da nossa tela.