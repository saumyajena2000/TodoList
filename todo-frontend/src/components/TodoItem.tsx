import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

interface TodoItemProps {
    id: number;
    title: string;
    completed: boolean;
    onToggle: () => void;
    onDelete: () => void;
}

export default function TodoItem({id, title, completed, onToggle, onDelete}: TodoItemProps) {
    return (
        <div className="flex items-center justify-between p-3 border rounded-md shadow-xl mb-2">
            <div className="flex items-center gap-2">
                <Checkbox checked={completed} onCheckedChange={onToggle} id={`todo-${id}`} />
                <span className= {completed? "line-through text-muted-foreground" : ""}>{title}</span>
            </div>
            <Button variant="outline" onClick={onDelete} size="sm">Delete</Button>
        </div>
    );
}