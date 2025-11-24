
abstract class FavoriteManager {
    protected favorites: string[] = [];

    public abstract addFavorite(item: string): void;

    public getFavorites(): string[] {
        return this.favorites;
    }
    
    protected isDuplicate(item: string): boolean {
        return this.favorites.map(f => f.toLowerCase()).includes(item.toLowerCase());
    }
}

class MoviesFavoriteManager extends FavoriteManager {
    public addFavorite(item: string): void {
        if (this.isDuplicate(item)) {
            console.log(`❌ Filme "${item}" já está na lista de favoritos.`);
            return;
        }
        
        this.favorites.push(item);
        this.favorites.sort(); 
        console.log(`🎬 Filme "${item}" adicionado e lista ordenada.`);
    }
}

class BooksFavoriteManager extends FavoriteManager {
    public addFavorite(item: string): void {
        if (this.isDuplicate(item)) {
            console.log(`❌ Livro "${item}" já está na lista de favoritos.`);
            return;
        }
        this.favorites.unshift(item);
        console.log(`📚 Livro "${item}" adicionado no início da lista.`);
    }
}

console.log("\n--- 3. Gerenciador de Favoritos ---");
const movieMgr = new MoviesFavoriteManager();
const bookMgr = new BooksFavoriteManager();

movieMgr.addFavorite("A Origem");
movieMgr.addFavorite("O Poderoso Chefão");
movieMgr.addFavorite("Interestelar");
movieMgr.addFavorite("A Origem");

bookMgr.addFavorite("1984");
bookMgr.addFavorite("O Senhor dos Anéis");
bookMgr.addFavorite("Duna");

console.log("\nFilmes Favoritos (Alfabético):", movieMgr.getFavorites());
console.log("Livros Favoritos (Último adicionado primeiro):", bookMgr.getFavorites());