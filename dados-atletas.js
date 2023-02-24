class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade < 9 || this.idade > 30) {
            return "Sem categoria";
        }
        if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        }
        if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        }
        if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        }
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        }
    }

    calculaIMC() {
        return (this.peso / (this.altura * this.altura));
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    ordenarNotas() {
        let notas = this.notas.sort((a, b) => a - b);
        return notas;
    }

    notasValidas() {
        let notas = this.ordenarNotas();
        return notas.slice(1, 4);
    }

    calculaMediaValida() {
        let soma = 0.0;
        this.notasValidas().forEach(function (nota) {
            soma += nota;
        });
        return soma / this.notasValidas().length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }

    exibirDadosDoAtleta() {
        let nome = this.obtemNomeAtleta();
        let peso = this.obtemPesoAtleta();
        let altura = this.altura;
        let notas = this.obtemNotasAtleta();
        let categoria = this.obtemCategoria();
        let imc = this.obtemIMC();
        let media = this.obtemMediaValida();

        return `Nome: ${nome}\nPeso: ${peso}\nAltura: ${altura}\nCategoria: ${categoria}\nIMC: ${imc}\nNotas Obtidas: ${notas}\nMédia Válida: ${media}\n`;
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.exibirDadosDoAtleta());