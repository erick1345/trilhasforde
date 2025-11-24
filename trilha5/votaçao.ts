// 1. Classe Abstrata
abstract class VoteSystem {

    protected votes: Record<string, number> = {};

    public abstract voteFor(candidate: string): void;
    
    public abstract getResults(): any; 
}


class Election extends VoteSystem {
    public voteFor(candidate: string): void {
    
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`🗳️ Eleição: Voto adicionado para ${candidate}.`);
    }

    public getResults(): Record<string, number> {
    
        return this.votes;
    }
}


interface PollResult {
    candidate: string;
    votes: number;
}

class Poll extends VoteSystem {
    public voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log(`📊 Pesquisa: Voto adicionado para ${candidate}.`);
    }

    public getResults(): PollResult[] {

        const results: PollResult[] = Object.keys(this.votes).map(candidate => ({
            candidate,
            votes: this.votes[candidate],
        }));

        results.sort((a, b) => b.votes - a.votes);
        
        return results;
    }
}


console.log("\n--- 4. Sistema de Votação ---");
const eleicao = new Election();
const pesquisa = new Poll();

eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato B");
eleicao.voteFor("Candidato A");

pesquisa.voteFor("Opção X");
pesquisa.voteFor("Opção Y");
pesquisa.voteFor("Opção Y");
pesquisa.voteFor("Opção Z");

console.log("\nResultados da Eleição (Objeto):", eleicao.getResults());
console.log("\nResultados da Pesquisa (Lista Ordenada):", pesquisa.getResults());