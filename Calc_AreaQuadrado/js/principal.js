// Importe da classe Quadrado do arquivo 'Quadrado.js'
import { Quadrado } from './Quadrado.js';

// Calcula a área de um quadrado com base no lado
function calcularAreaQuadrado(lado) {
    // Cria um objeto Quadrado com o lado informado
    let quadrado = new Quadrado(lado);
    // retorna a saída do método calcularArea() da classe Quadrado
    return quadrado.calcularArea();
}

// Trata a entrada do usuário e exibe o resultado da área
function tratarEntrada() {
    // Obtém o valor do input de lado e converte para um número de ponto flutuante
    let lado = parseFloat(document.getElementById("ladoInput").value);

    // Verifica se o valor é válido e positivo
    if (!isNaN(lado) && lado > 0) {
        // Calcula a área do quadrado e exibe o resultado na tela
        let area = calcularAreaQuadrado(lado);
        document.getElementById("resultado").innerText = "Área do quadrado: " + area;
    } else {
        // Exibe mensagem de erro se o valor não for válido
        document.getElementById("resultado").innerText = "Digite um valor válido para o lado do quadrado.";
    }
}

// Função de inicialização, adiciona um ouvinte de evento ao botão de calcular
function iniciar() {
    let botaoCalcular = document.getElementById("botaoCalcular");
    botaoCalcular.addEventListener("click", tratarEntrada);
}

// Aguarda o evento 'DOMContentLoaded' e chama a função de inicialização
document.addEventListener("DOMContentLoaded", iniciar);
