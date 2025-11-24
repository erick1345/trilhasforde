abstract class TaskManager {
    protected tasks: Map<string, boolean> = new Map();
    public abstract addTask(task: string): void;
    public abstract listTasks(): string[];
    protected isDuplicate(task: string): boolean {
        return this.tasks.has(task.toLowerCase());
    }
}

class Project extends TaskManager {
    constructor(private projectName: string) {
        super();
    }

    public addTask(task: string): void {
        const fullTask = `[${this.projectName}] - ${task}`;
        if (this.isDuplicate(fullTask)) {
            console.log(`❌ Tarefa duplicada. "${task}" já está no projeto.`);
            return;
        }
        this.tasks.set(fullTask.toLowerCase(), true);
        console.log(`✅ Tarefa de Projeto adicionada: ${fullTask}`);
    }

    public listTasks(): string[] {
        return Array.from(this.tasks.keys());
    }
}

class DailyTasks extends TaskManager {
    public addTask(task: string): void {
        const dailyTask = `[Diária] - ${task}`;
        if (this.isDuplicate(dailyTask)) {
            console.log(`❌ Tarefa duplicada. "${task}" já é uma tarefa diária.`);
            return;
        }
        this.tasks.set(dailyTask.toLowerCase(), true);
        console.log(`✅ Tarefa Diária adicionada: ${dailyTask}`);
    }

    public listTasks(): string[] {
        return Array.from(this.tasks.keys());
    }
}

console.log("--- 1. Sistema de Tarefas e Projetos ---");
const siteProject = new Project("Novo Site");
const myDaily = new DailyTasks();

siteProject.addTask("Definir layout principal");
siteProject.addTask("Configurar banco de dados");
siteProject.addTask("Definir layout principal");

myDaily.addTask("Responder e-mails");
myDaily.addTask("Revisar código");
myDaily.addTask("Responder e-mails");

console.log("\nTarefas do Projeto:");
console.log(siteProject.listTasks());

console.log("\nTarefas Diárias:");
console.log(myDaily.listTasks());