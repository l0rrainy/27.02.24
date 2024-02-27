//Constante que armazena um valor somente leitura (string) que não pode ser alterado;
const variavel1 = "valor somente leitura";
//Variável que armazena um valor editável (string) e pode ser alterado;
var variavel2 = "valor editável"; 

// Tentativa de Modificação: variavel1;
try {
     // Tentativa de atribuir um novo valor à constante variavel1 (o que não é permitido);
    variavel1 = "valor não permitido";    
    // Mensagem exibida no console se a tentativa for bem-sucedida (não será neste caso).;                      
    console.log("a variavel1 foi alterada para: ", variavel1); 
} catch (e) { 
    // Bloco executado se ocorrer um erro na tentativa de modificar a constante variavel1.;
    console.error("Ops ! Ocorreu o erro: ", e);
}

// Tentativa de Modificação: variavel2;
try {
    // Tentativa de atribuir um novo valor à variável variavel2 (o que é permitido).;
    variavel2 = "valor permitido";
    // Mensagem exibida no console se a tentativa for bem-sucedida.;
    console.log("a variavel2 foi alterada para: ", variavel2);
} catch (e) {
     // Esta parte não será executada porque não há erro na modificação da variavel2.;
    console.error("Ops! Ocorreu o erro:", e);
}