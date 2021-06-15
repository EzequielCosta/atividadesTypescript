"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
var personagens_1 = require("./personagens");
var Jogo = /** @class */ (function () {
    function Jogo() {
        this.personagens = [];
        this._index = 1;
    }
    Jogo.prototype.incluir = function (p) {
        if (this.consultar(p.id) === null) {
            this.personagens.push(p);
        }
    };
    Jogo.prototype.consultar = function (id) {
        for (var _i = 0, _a = this.personagens; _i < _a.length; _i++) {
            var personagem = _a[_i];
            if (personagem.id === id) {
                return personagem;
            }
        }
        return null;
    };
    Jogo.prototype.atacar = function (personagem_atacante_id, personagem_atacado_id) {
        var atacante = this.consultar(personagem_atacante_id);
        var atacado = this.consultar(personagem_atacado_id);
        if (atacante !== null && atacado !== null) {
            if (atacante === atacado) {
                throw new Error("Um personagem não pode atacar a si mesmo!");
            }
            else if ((atacante instanceof personagens_1.Soldado) || (atacante instanceof personagens_1.Cavaleiro)) {
                atacante.atacar(atacado);
            }
            else {
                throw new Error("Não pode atacar!");
            }
        }
        else {
            throw new Error("Não foi possível atacar!");
        }
    };
    Jogo.prototype.avaliarBatalha = function () {
        var status_persongame = [];
        for (var _i = 0, _a = this.personagens; _i < _a.length; _i++) {
            var personagem = _a[_i];
            status_persongame.push(personagem.toString());
        }
        return status_persongame;
    };
    return Jogo;
}());
exports.Jogo = Jogo;
//# sourceMappingURL=jogo.js.map