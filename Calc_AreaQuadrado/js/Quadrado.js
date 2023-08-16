// Definindo a classe Quadrado
export class Quadrado {
    // Atributo privado para armazenar o lado do quadrado
    #lado;

    // Construtor da classe, recebe o lado como parâmetro
    constructor(lado) {
        // Atribui o valor do parâmetro ao atributo privado #lado
        this.#lado = lado;
    }

    // Método getter para obter o valor do atributo privado #lado
    get getLado() {
        return this.#lado;
    }

    // Método setter para definir o valor do atributo privado #lado
    set setLado(lado) {
        // Verifica se o lado é maior que 0 antes de atribuir
        if (lado > 0) {
            this.#lado = lado;
        }
    }

    // Método para calcular a área do quadrado
    calcularArea() {
        return (this.#lado * this.#lado);
    }
}
