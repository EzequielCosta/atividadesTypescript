class Personagem{

    private _id : number;
    nome:string;
    energia: number;

    constructor(id:number,nome:string,energia:number){
        this._id = id;
        this.nome = nome;
        this.energia = energia;
    }
        
    estaVivo():boolean{
        if (!this.energia){
            return false;
        }
        return true;
    }

    defenderAtaque(valorAtaque:number):void{
        if (valorAtaque < this.energia){
            this.energia -= valorAtaque;
        }else{
            this.energia = 0;
        }
    }
    
    get id():number{
        return this._id;
    }

    toString(){
        return `\nID: ${this.id}  Nome: ${this.nome}  Energia: ${this.energia}  Está Vivo? : ${this.estaVivo()} \n`;

    }
}


class Soldado extends Personagem{
    
    forcaAtaque:number;

    constructor(id:number,nome:string,energia:number,forcaAtaque:number){
        super(id,nome,energia);
        this.forcaAtaque = forcaAtaque;
    }

    atacar(p : Personagem){
        p.defenderAtaque(this.forcaAtaque);
    }

    defenderAtaque(valorAtaque:number){
        if (valorAtaque <= this.energia){
            this.energia -= (valorAtaque / 2);
        }else{
            this.energia = 0;
        }
    }
}

class Cavaleiro extends Soldado{

    constructor(id:number,nome:string,energia:number,forcaAtaque:number){
        super(id,nome,energia,forcaAtaque);
     
    }
    atacar(p:Personagem){
        p.defenderAtaque(this.forcaAtaque * 2);
    }

    defenderAtaque(valorAtaque:number){
        if (valorAtaque <= this.energia){
            this.energia -= valorAtaque / 3;
        }else{
            this.energia = 0;
        }
    }   
}

export {Personagem,Soldado,Cavaleiro}