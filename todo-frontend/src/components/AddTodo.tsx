import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

interface AddTodoProps {
    onAdd: (task: string) => void;
}

export function AddTodo({onAdd}: AddTodoProps) {
    const [task, setTask] = useState("");

    const handleAdd = () => {
        if(!task.trim()) 
            return;
        onAdd(task);
        setTask("");
    };

    return (
        <div className="flex w-full max-w-md gap-2">
            <Input 
            placeholder="Enter a task...." 
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <Button onClick={handleAdd}>Add</Button>
        </div>
    )
}