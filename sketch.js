//variáveis raquete
let xRaquete = 5
let yRaquete = 50
let larura = 10
let altura = 90

//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
rect(5, 150, 10, 90);
}
 function mostraRaquete() {  
rect(xRaquete,yRaquete, raqueteComprimento,raqueteAltura);
 function draw() {
   background(0);
   mostraBolinha();
   movimentaBolinha();
   verificaColisaoBolinha();
   mostraRaquete();
 }
 }
function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}
function draw() {
    background(0);
    mostraBolinha();
    //movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete();
    movimentaMinhaRaquete();
}
function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento) {
        velocidadeXBolinha *= -1;
    }
}
function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento) {
        velocidadeXBolinha *= -1;
    }
}
function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
    && yBolinha - raio < yRaquete + raqueteAltura
    && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento 
  && yBolinha - raio < yRaquete + raqueteAltura 
  && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}