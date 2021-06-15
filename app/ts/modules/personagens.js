"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavaleiro = exports.Soldado = exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(id, nome, energia) {
        this._id = id;
        this.nome = nome;
        this.energia = energia;
    }
    Personagem.prototype.estaVivo = function () {
        if (!this.energia) {
            return false;
        }
        return true;
    };
    Personagem.prototype.defenderAtaque = function (valorAtaque) {
        if (valorAtaque < this.energia) {
            this.energia -= valorAtaque;
        }
        else {
            this.energia = 0;
        }
    };
    Object.defineProperty(Personagem.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Personagem.prototype.toString = function () {
        return "\nID: " + this.id + "  Nome: " + this.nome + "  Energia: " + this.energia + "  Est\u00E1 Vivo? : " + this.estaVivo() + " \n";
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var Soldado = /** @class */ (function (_super) {
    __extends(Soldado, _super);
    function Soldado(id, nome, energia, forcaAtaque) {
        var _this = _super.call(this, id, nome, energia) || this;
        _this.forcaAtaque = forcaAtaque;
        return _this;
    }
    Soldado.prototype.atacar = function (p) {
        p.defenderAtaque(this.forcaAtaque);
    };
    Soldado.prototype.defenderAtaque = function (valorAtaque) {
        if (valorAtaque <= this.energia) {
            this.energia -= (valorAtaque / 2);
        }
        else {
            this.energia = 0;
        }
    };
    return Soldado;
}(Personagem));
exports.Soldado = Soldado;
var Cavaleiro = /** @class */ (function (_super) {
    __extends(Cavaleiro, _super);
    function Cavaleiro(id, nome, energia, forcaAtaque) {
        return _super.call(this, id, nome, energia, forcaAtaque) || this;
    }
    Cavaleiro.prototype.atacar = function (p) {
        p.defenderAtaque(this.forcaAtaque * 2);
    };
    Cavaleiro.prototype.defenderAtaque = function (valorAtaque) {
        if (valorAtaque <= this.energia) {
            this.energia -= valorAtaque / 3;
        }
        else {
            this.energia = 0;
        }
    };
    return Cavaleiro;
}(Soldado));
exports.Cavaleiro = Cavaleiro;
//# sourceMappingURL=personagens.js.map