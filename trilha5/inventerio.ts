abstract class Inventory {
    protected inventory: Record<string, number> = {};

    public abstract addItem(item: string, quantity: number): void;
    public abstract removeItem(item: string): void;

    public getInventory(): Record<string, number> {
        return this.inventory;
    }
}
class WarehouseInventory extends Inventory {
    public addItem(item: string, quantity: number): void {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        } else {
            this.inventory[item] = quantity;
        }
        console.log(`📦 Armazém: Adicionado ${quantity}x de ${item}. Total: ${this.inventory[item]}`);
    }

    public removeItem(item: string): void {
        if (this.inventory[item]) {
            delete this.inventory[item];
            console.log(`🗑️ Armazém: Item ${item} removido do inventário.`);
        } else {
            console.log(`⚠️ Armazém: Item ${item} não encontrado.`);
        }
    }
}

class StoreInventory extends Inventory {
    private readonly MAX_QUANTITY = 10;

    public addItem(item: string, quantity: number): void {
        const currentQty = this.inventory[item] || 0;
        const newTotal = currentQty + quantity;

        if (newTotal > this.MAX_QUANTITY) {
            const excess = newTotal - this.MAX_QUANTITY;
            this.inventory[item] = this.MAX_QUANTITY;
            console.log(`🛑 Loja: Limite de 10 atingido para ${item}. ${excess} unidades rejeitadas.`);
        } else {
            this.inventory[item] = newTotal;
            console.log(`🛍️ Loja: Adicionado ${quantity}x de ${item}. Total: ${this.inventory[item]}`);
        }
    }

    public removeItem(item: string): void {
        if (this.inventory[item]) {
            delete this.inventory[item];
            console.log(`🗑️ Loja: Item ${item} removido do inventário.`);
        } else {
            console.log(`⚠️ Loja: Item ${item} não encontrado.`);
        }
    }
}

console.log("\n--- 2. Inventário de Itens ---");
const warehouse = new WarehouseInventory();
const store = new StoreInventory();

warehouse.addItem("Cadeira Office", 50);
store.addItem("Caderno", 7);
store.addItem("Caderno", 5);

console.log("\nInventário da Loja:");
console.log(store.getInventory());