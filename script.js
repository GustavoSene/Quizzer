let question = document.getElementsByClassName("perguntas")
let resps = document.getElementsByClassName("resp");
let img = document.getElementsByClassName("imagem");
let q = document.getElementById("numeroQ");
let check = 1;
let scoreW = 0;
let scoreL = 0;

let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;



 let perguntas = [ //perguntas
    {pergunta: "Qual a cor da roupa dessa mulher?"}, 
    {pergunta:"Em que ano foi inventado o computador?"}, 
    {pergunta: "Qual o nome desse instrumento de saúde?"}, 
    {pergunta:"Quantos livros esta estudante carrega?"},
    {pergunta: "Qual a montanha mais alta do mundo?"}, 
    {pergunta:"Qual o monumento famoso pela sua inclinação?"},
    {pergunta: "Quem pintou Mona Lisa?"}, 
    {pergunta:"O que os pandas comem?"},
    {pergunta: "Qual o plural de chapéu?"}, 
    {pergunta:"Qual o satélite natural da Terra?"},

]

let respostas = [[ //respostas

    ["Azul"],
    ["Laranja"],
    ["Vermelho"],
    ["Verde"]
],
[

    ["1946"],
    ["1520"],
    ["2008"],
    ["1945"]

],
[

    ["Desfibrilador"],
    ["Coração"],
    ["Termômetro"],
    ["Estetoscópio"]

],
[

    ["1"],
    ["2"],
    ["5"],
    ["3"]

],
[

    ["Monte Everest"],
    ["Monte Chimborazo"],
    ["Pico da Neblina"],
    ["Monte Pascoal"]

],
[

    ["Esfinge"],
    ["Estátua da Liberdade"],
    ["Torre Eiffel"],
    ["Torre de Pisa"]

],
[

    ["Leonardo da Vinci"],
    ["Pablo Picasso"],
    ["Tarsila do Amaral"],
    ["Van Gogh"]

],
[

    ["Bambu"],
    ["Aves, ovos e peixe"],
    ["Frutas e mel"],
    ["Mel"]

],
[

    ["Chapéis"],
    ["Os chapéu"],
    ["Chapéus"],
    ["Boné"]

],
[

    ["Lua"],
    ["Sol"],
    ["SCD-1"],
    ["Amazonia 1"]

]]

var imgArray = new Array(); //imagens

imgArray[0] = new Image();
imgArray[0].src = './images/random.jpg';

imgArray[1] = new Image();
imgArray[1].src = './images/manobrown.jpg';

imgArray[2] = new Image();
imgArray[2].src = './images/estetoscopio.jpg';

imgArray[3] = new Image();
imgArray[3].src = './images/estudante.jpg';

imgArray[4] = new Image();
imgArray[4].src = './images/everest.jpg';

imgArray[5] = new Image();
imgArray[5].src = './images/torrepisa.jpg';

imgArray[6] = new Image();
imgArray[6].src = './images/monalisa.jpg';

imgArray[7] = new Image();
imgArray[7].src = './images/panda.jpg';

imgArray[8] = new Image();
imgArray[8].src = './images/chapeu.jpg';

imgArray[9] = new Image();
imgArray[9].src = './images/satelite.jpg';

let array = []


let allOp = [ //onde vão aparecer as respostas no html
[

   [resps[0]],
   [resps[1]],
   [resps[2]],
   [resps[3]]

]]

  perguntar(); //chamando a função

 function perguntar() {

    resps[0].disabled = false;
    resps[1].disabled = false;
    resps[2].disabled = false;
    resps[3].disabled = false;

    resps[0].style.animation = "none";
    resps[1].style.animation = "none";
    resps[2].style.animation = "none";
    resps[3].style.animation = "none";

    num = Math.floor(Math.random() * 10);

    if (check == 11) {

        gameover(scoreW,scoreL);

    } else {
    
    while (array.indexOf(num) != -1) { 

    num = Math.floor(Math.random() * 10);

     }}

    array.push(num);

    randomize(num); 
}


function randomize(num) {

    let randomN1 = 0;
    let randomN2 = 0;
    let randomN3 = 0;
    let randomN4 = 0;

    while (randomN1 == randomN2 || randomN1 == randomN3 || randomN1 == randomN4 || randomN2 == randomN3 || randomN2 == randomN4 || randomN3 == randomN4) {

        randomN1 = Math.floor(Math.random() * 4);
        randomN2 = Math.floor(Math.random() * 4);
        randomN3 = Math.floor(Math.random() * 4);
        randomN4 = Math.floor(Math.random() * 4);
    } //gera 4 numeros aleatórios pra randomizar as opções do array das respostas

    q.innerHTML = check;
   question[0].innerHTML = perguntas[num].pergunta;
   img[0].src = imgArray[num].src;

   allOp[0][randomN1].innerHTML = respostas[num][randomN1];

       resps[0].innerHTML = allOp[0][randomN1].innerHTML;

   allOp[0][randomN2].innerHTML = respostas[num][randomN2];

       resps[1].innerHTML = allOp[0][randomN2].innerHTML;

   allOp[0][randomN3].innerHTML = respostas[num][randomN3];

       resps[2].innerHTML = allOp[0][randomN3].innerHTML;

   allOp[0][randomN4].innerHTML = respostas[num][randomN4]; 

       resps[3].innerHTML = allOp[0][randomN4].innerHTML;  

   return num;    

}

function corrigir(pos) {

    if (resps[pos].innerHTML == "Laranja" || resps[pos].innerHTML == "1946" || resps[pos].innerHTML == "Estetoscópio"
    || resps[pos].innerHTML == "3" || resps[pos].innerHTML == "Monte Everest" || resps[pos].innerHTML == "Torre de Pisa"
    || resps[pos].innerHTML == "Leonardo da Vinci" || resps[pos].innerHTML == "Bambu" || resps[pos].innerHTML == "Chapéus"
    || resps[pos].innerHTML == "Lua") {

        won(pos);

    } else {

        lost(pos);

    }

}      

function won(qual) {

    resps[qual].style.animationName = "esverdear";
    resps[qual].style.animationDuration = "0.3s";
    resps[qual].style.animationFillMode = "forwards";

    resps[0].disabled = true;
    resps[1].disabled = true;
    resps[2].disabled = true;
    resps[3].disabled = true;

    setTimeout(perguntar,700);

    check++;

    scoreW++;

}

function lost(qual) {

    resps[qual].style.animationName = "avermelhar";
    resps[qual].style.animationDuration = "0.3s";
    resps[qual].style.animationFillMode = "forwards";

    resps[0].disabled = true;
    resps[1].disabled = true;
    resps[2].disabled = true;
    resps[3].disabled = true;

    setTimeout(perguntar,700);

    check++;

    scoreL++;

}

function gameover(scoreW,scoreL) {

alert(`GAME OVER! 
Acertos: ${scoreW} 
Erros: ${scoreL}`);

}
