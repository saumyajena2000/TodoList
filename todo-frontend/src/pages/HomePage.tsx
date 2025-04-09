import { useEffect, useState } from "react";
import { AddTodo } from "@/components/AddTodo";
import { TodoList } from "@/components/TodoList";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export default function HomePage() {

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/todos")
        .then(res => setTodos(res.data))
        .catch(err => console.error("Failed to fetch todos", err));
    }, []);

    const addTodo = (title: string) => {
        axios.post("http://localhost:8080/api/todos", {
            title,
            completed: false
        }).then(res => {
            setTodos(prev => [res.data, ...prev]);
        });
    };

    const toggleTodo = (id: number) => {
        const todo = todos.find(t => t.id === id);
        if(!todo) return;

        axios.put(`http://localhost:8080/api/todos/${id}`, {
            ...todo,
            completed : !todo.completed,
        }).then(res => {
            setTodos(prev => prev.map(t => t.id === id ? res.data : t));
        });
    };

    const deleteTodo = (id: number) => {
        axios.delete(`http://localhost:8080/api/todos/${id}`)
        .then(() => {
            setTodos(prev => prev.filter(t => t.id !== id));
        });
      };
    
      return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
          <h1 className="text-4xl font-bold mb-6">📝 To-Do List</h1>
          <AddTodo onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
      );
}