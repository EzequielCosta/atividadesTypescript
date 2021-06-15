"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColecaoArray = /** @class */ (function () {
    function ColecaoArray() {
        this.colecao = [];
        this.indice = 0;
    }
    ColecaoArray.prototype.adiciona = function (elemento) {
        this.colecao.push(elemento);
    };
    ColecaoArray.prototype.atual = function () {
        return this.colecao[this.indice];
    };
    ColecaoArray.prototype.proximo = function () {
        this.indice++;
        return this.colecao[this.indice];
    };
    ColecaoArray.prototype.isPrimeiro = function () {
        return this.indice === 0 ? true : false;
    };
    ColecaoArray.prototype.isUltimo = function () {
        return this.indice === (this.colecao.length - 1) ? true : false;
    };
    ColecaoArray.prototype.isParaPrimeiro = function () {
        this.indice = 0;
        return this.colecao[0];
    };
    return ColecaoArray;
}());
var colecao = new ColecaoArray();
colecao.adiciona(1);
colecao.adiciona(4);
colecao.adiciona(10);
colecao.adiciona(16);
colecao.adiciona(9);
console.log("Eh o primeiro elemento: ", colecao.isPrimeiro());
console.log("Segundo elemento: ", colecao.proximo());
console.log("Terceiro elemento: ", colecao.proximo());
console.log("Elemento Atual: ", colecao.atual());
console.log("Primeiro elemento: ", colecao.isParaPrimeiro());
console.log("Eh o último elemento: ", colecao.isUltimo());
console.log("Elemento Atual : ", colecao.atual());
var personagens_1 = require("./modules/personagens");
var jogo_1 = require("./modules/jogo");
var jogo = new jogo_1.Jogo();
var soldado1 = new personagens_1.Soldado(1, 'Soldado1', 1000, 300);
jogo.incluir(soldado1);
var soldado2 = new personagens_1.Soldado(2, 'Soldado2', 800, 300);
jogo.incluir(soldado2);
var cavaleiro1 = new personagens_1.Cavaleiro(3, 'Cavaleiro1', 2000, 400);
jogo.incluir(cavaleiro1);
var personagem1 = new personagens_1.Personagem(4, 'Personagem1', 400);
jogo.incluir(personagem1);
var personagem2 = new personagens_1.Personagem(5, 'Personagem2', 400);
jogo.atacar(2, 1);
//jogo.atacar(3,3); gera uma exceção
jogo.atacar(2, 3);
jogo.atacar(3, 2);
jogo.atacar(1, 4);
//jogo.atacar(4,2); gera uma exceção
jogo.atacar(2, 4);
jogo.atacar(1, 2);
//jogo.atacar(3,5); gera uma exceção
for (var _i = 0, _a = jogo.avaliarBatalha(); _i < _a.length; _i++) {
    var personagem = _a[_i];
    console.log(personagem);
}
//# sourceMappingURL=app.js.map