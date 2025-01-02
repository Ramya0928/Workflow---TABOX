import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const tasks = [
  { id: 1, description: "Review resumes for Software Engineer position", completed: false },
  { id: 2, description: "Schedule second round interview for Product Manager candidate", completed: false },
  { id: 3, description: "Prepare offer letter for UX Designer", completed: true },
  { id: 4, description: "Follow up with Data Scientist candidates", completed: false },
]

export function TaskList() {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center space-x-2">
          <Checkbox id={`task-${task.id}`} checked={task.completed} />
          <Label
            htmlFor={`task-${task.id}`}
            className={task.completed ? "line-through text-muted-foreground" : ""}
          >
            {task.description}
          </Label>
        </div>
      ))}
    </div>
  )
}

