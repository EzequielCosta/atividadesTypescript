interface Interavel<T>{

    proximo():T;
    atual():T;
    isPrimeiro():boolean;
    isUltimo():boolean;
    isParaPrimeiro():T;

}

class ColecaoArray<T> implements Interavel<T>{

    private colecao:T[] = [];
    private indice:number;

    constructor(){
        this.indice = 0;
    }
    adiciona(elemento:T){
        this.colecao.push(elemento);
    }
    atual():T{
        return this.colecao[this.indice];

    }

    proximo():T{
        this.indice++;
        return this.colecao[this.indice];
    }
    
    isPrimeiro():boolean{
        return this.indice === 0 ? true:false;
    }
    isUltimo():boolean{
        return this.indice === (this.colecao.length -1 ) ? true:false;
    }
    isParaPrimeiro():T{
        this.indice = 0;
        return this.colecao[0];
    }
}   

let colecao:ColecaoArray<number> = new ColecaoArray();
colecao.adiciona(1);
colecao.adiciona(4);
colecao.adiciona(10);
colecao.adiciona(16);
colecao.adiciona(9);

console.log("Eh o primeiro elemento: ",colecao.isPrimeiro());
console.log("Segundo elemento: ",colecao.proximo());
console.log("Terceiro elemento: ",colecao.proximo());
console.log("Elemento Atual: ",colecao.atual());
console.log("Primeiro elemento: ",colecao.isParaPrimeiro());
console.log("Eh o último elemento: ",colecao.isUltimo());
console.log("Elemento Atual : ",colecao.atual());


import {Personagem,Soldado,Cavaleiro} from "./modules/personagens"
import {Jogo} from "./modules/jogo"

let jogo:Jogo = new Jogo();
let soldado1:Soldado = new Soldado(1,'Soldado1',1000,300);
jogo.incluir(soldado1);
let soldado2:Soldado = new Soldado(2,'Soldado2',800,300);
jogo.incluir(soldado2);
let cavaleiro1: Cavaleiro =  new Cavaleiro(3,'Cavaleiro1',2000,400);
jogo.incluir(cavaleiro1);
let personagem1:Personagem = new Personagem(4,'Personagem1',400);
jogo.incluir(personagem1);

let personagem2:Personagem = new Personagem(5,'Personagem2',400);

jogo.atacar(2,1);
//jogo.atacar(3,3); gera uma exceção
jogo.atacar(2,3);
jogo.atacar(3,2);
jogo.atacar(1,4);
//jogo.atacar(4,2); gera uma exceção
jogo.atacar(2,4);
jogo.atacar(1,2);

//jogo.atacar(3,5); gera uma exceção


for (let personagem of jogo.avaliarBatalha()){
    console.log(personagem)
}








