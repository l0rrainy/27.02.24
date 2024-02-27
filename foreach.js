// Variável que recebe o nome de tempoFilme e representa a duração total do filme em segundos
var tempoFilme = 60; //em segundos
// Variável que recebe o nome inicioFilme representa tempo atual do filme em segundos
var inicioFilme = 0; //em segundos

 // repete sobre cada segundo do filme, simulando o tempo decorrido. A variável t é começa no 0, representando o início da contagem de tempo
 // O loop continuará enquanto t for menor que o tempo total do filme. A variável t é aumentada a cada repetição, representando a passagem de 1 segundo.
for (var t = 0; t < tempoFilme; t++) { // O bloco de código dentro do loop será executado para cada repetiçao do loop.
      // Configura um temporizador para executar a cada segundo
    setTimeout(function(){
        // Limpa o console a cada segundo para uma exibição mais limpa
        console.clear();
         // Exibe uma mensagem informando a contagem regressiva do tempo restante para o final do filme
        console.log("Assistindo filme 60 segunos... Ainda faltam [" + (tempoFilme - inicioFilme) + "] segundos,");
        // aumenta o tempo inicial para rastrear o progresso do filme
        inicioFilme++;
    },t*1000); // Multiplica t por 1000 para converter segundos em milissegundos
}


