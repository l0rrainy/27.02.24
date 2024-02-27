// Função: sortear que gera um número aleatório e associa um nome correspondente com base na posição do número em um array; ARRAY É CONJUNTO DE ELEMENTOS
const sortear = () => {
    // Array contendo nomes a serem sorteados, Os arrays são estruturas que servem para guardar dados, e organizá-los;
    var nomes = ["Lolo ", "Mari ", "Gigi "," Gabriel ", "calebe ", "jhnei "];

     // Elemento HTML onde o nome sorteado será exibido;
    let h1Nome = document.getElementById("nome"); //document e . é metodo;
                                     
    // Variável para controlar se o número sorteado já foi associado a um nome;
    let achouNumero = false; // let vai sumir na memoria depoiis de terminar a função; 
    // Variável para armazenar o número sorteado;
    let numeroSorteado;

    // Loop para garantir que o número sorteado esteja dentro dos limites do array;
    while (achouNumero == false) { //estrutura de repetição;
        // Gera um número aleatório entre 0 (inclusive) e o tamanho do array de nomes;
        numeroSorteado = Math.floor(Math.random() * 100);  // math.random vai gerar um numero aleatorio --- encapsulamento esse parentese azulzinho, math.random esta encapsulado e esta sendo multiplicado por 100;
        // Verifica se o número está dentro dos limites da quantidade de nomes no array;
        if (numeroSorteado < nomes.length) {
            // Se o número gerado estiver dentro dos limites do array, define achouNumero como true para encerrar o loop;
            achouNumero = true;
        }
    }

    // Switch para associar o número sorteado ao nome correspondente no conjunto de elementos;
    switch (numeroSorteado) {  //switchcase é interruptor : 
        // Cada case representa um elemento no conjunto de elementos 'nomes'
        case 0: //trocar caso a variavel seja 0
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 1: //trocar caso a variavel seja 1
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 2: //trocar caso a variavel seja 2
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 3:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 4:
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        case 5:
            // Exibe o nome sorteado no elemento HTML
            h1Nome.innerText = nomes[numeroSorteado];
            break;
        default:
            // Caso o número não esteja dentro dos limites do conjunto de elementos
            h1Nome.innerText = "ops! nome nao consta na lista";
        
    }
    h1Nome.innerText += " O número sorteado foi: " + numeroSorteado; //operador "+=" vai recebe a propria variavel mais oque eu quero que apareça.
}