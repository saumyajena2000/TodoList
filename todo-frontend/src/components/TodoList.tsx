import TodoItem from "./TodoItem";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
    return (
        <div className="mt-6 w-full max-w-md mx-auto">
            {todos.map((todo) => (
                <TodoItem 
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onToggle={() => onToggle(todo.id)}
                onDelete={() => onDelete(todo.id)}
                />
            ))}
        </div>
    );
}