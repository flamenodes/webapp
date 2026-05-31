export type Todo = {
    id: number;
    title: string;
};
export declare function getTodos(): Todo[];
export declare function addTodo(title: string): void;
export declare function subscribeToTodos(callback: (todos: Todo[]) => void): () => void;
//# sourceMappingURL=mcp-todos.d.ts.map