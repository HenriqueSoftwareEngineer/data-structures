class HistoricoNavegacao {
    constructor() {
        this.pilha = [];
        this.pilhaAvancar = [];
    }

    visitarPagina(url) {
        this.pilha.push(url);
        this.pilhaAvancar = [];
    }

    paginaAtual() {
        if (this.pilha.length > 0) {
            return this.pilha[this.pilha.length - 1];
        }
        return null;
    }

    voltar() {
        if (this.pilha.length > 1) {
            this.pilhaAvancar.push(this.pilha.pop());
        }
        return this.paginaAtual();
    }

    avancar() {
        if (this.pilhaAvancar.length > 0) {
            this.pilha.push(this.pilhaAvancar.pop());
        }
        return this.paginaAtual();
    }
}

// Testando a classe
const historico = new HistoricoNavegacao();
historico.visitarPagina("https://exemplo.com");
historico.visitarPagina("https://google.com");
historico.visitarPagina("https://wikipedia.org");
console.log(historico.paginaAtual());  // Saída esperada: https://wikipedia.org
historico.voltar();
console.log(historico.paginaAtual());  // Saída esperada: https://google.com
historico.avancar();
console.log(historico.paginaAtual());  // Saída esperada: https://wikipedia.org
