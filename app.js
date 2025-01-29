let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
     let campo = document.querySelector(tag);  // Seleciona o elemento HTML pela tag.
     campo.innerHTML = texto;  // Exibe o texto no elemento.
     if ('speechSynthesis' in window) {
          let utterance = new SpeechSynthesisUtterance(texto);
          utterance.lang = 'pt-BR'; 
          utterance.rate = 1.2; 
          window.speechSynthesis.speak(utterance); 
      } else {
          console.log("Web Speech API não suportada neste navegador.");
      }
 }
 


function exibirMensagemIncial(){

     exibirTextoNaTela('h1', 'Jogo do número secreto');
     exibirTextoNaTela('p', 'Escolha um número entre 01 e 10 ');

}

exibirMensagemIncial();


function verificarChute(){

     let chute = document.querySelector('input').value;

     if(chute == numeroSecreto){
          exibirTextoNaTela('h1', 'Acertou');
          let palavraTentativa = tentativas > 1 ? 'tentativas' : 'Tentativa';
          let mensagemTentativas = `Voce acertou numero Secreto com ${tentativas}  ${palavraTentativa}`;
          exibirTextoNaTela('P', mensagemTentativas);
          document.getElementById('reiniciar').removeAttribute('disabled');


     } else {
          if(chute > numeroSecreto){

               exibirTextoNaTela('p', 'Numero secreto e menor!');
          } else {
               exibirTextoNaTela('p', 'Numero secreto e maior');
          }

          tentativas++;
          limparCampo();
     }
}


function gerarNumeroAleatorio(){
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeElementoLista = listaDeNumeroSorteados.length;

   if(quantidadeElementoLista == numeroLimite){
     listaDeNumeroSorteados = [];
   }

     if(listaDeNumeroSorteados.includes(numeroEscolhido)){
          return gerarNumeroAleatorio();
     } else{

          listaDeNumeroSorteados.push(numeroEscolhido);
          console.log(listaDeNumeroSorteados);
          return numeroEscolhido;
     }

}



function limparCampo(){

     chute = document.querySelector('input');
     chute.value =  '';
}



function reiniciarJogo(){

     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemIncial();
     document.getElementById('reiniciar').setAttribute('disabled', true);
}


 