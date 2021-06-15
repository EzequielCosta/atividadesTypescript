import {Personagem,Soldado,Cavaleiro} from "./personagens"

class Jogo{

    personagens: Personagem[] = [];
    _index = 1; 

    incluir(p:Personagem){
        if (this.consultar(p.id) === null){
            this.personagens.push(p);
        }
    }

    consultar(id:number):Personagem{
        for (let personagem of this.personagens){
            if (personagem.id === id){
                return personagem;
            }
        }
        return null;
    }

    atacar(personagem_atacante_id:number, personagem_atacado_id:number){
        let atacante:Personagem = this.consultar(personagem_atacante_id);
        let atacado:Personagem = this.consultar(personagem_atacado_id);

        if (atacante !== null && atacado !== null){
            if (atacante === atacado){ 
                throw new Error("Um personagem não pode atacar a si mesmo!");
            }
            else if ((atacante instanceof Soldado) || (atacante instanceof Cavaleiro)){
                atacante.atacar(atacado);
            }else{
                throw new Error("Não pode atacar!");
                
            }
        }else{
            throw new Error("Não foi possível atacar!");
        }
    }

    avaliarBatalha():string[]{
        let status_persongame: string[] = [];
        for (let personagem of this.personagens){
            status_persongame.push(personagem.toString());
        }
        return status_persongame;
    }

}

export {Jogo}