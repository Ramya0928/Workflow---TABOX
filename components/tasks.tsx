import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function Tasks() {
  const tasks = [
    { title: "Review the JD with hiring manager", status: "pending" },
    { title: "Create a new JD for Java Developer position", status: "pending" },
    { title: "Confirm Sr. UX designer interview with Lucas Scott", status: "completed" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox id={`task-${index}`} checked={task.status === "completed"} />
              <label
                htmlFor={`task-${index}`}
                className={`text-sm ${
                  task.status === "completed" ? "line-through text-muted-foreground" : ""
                }`}
              >
                {task.title}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <Button size="sm">Create</Button>
          <Button size="sm">Set Review Meeting</Button>
        </div>
      </CardContent>
    </Card>
  )
}

