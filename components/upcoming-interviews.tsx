import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const upcomingInterviews = [
  { id: 1, name: "Diana Lee", position: "Data Scientist", date: "2023-06-16", time: "10:00 AM" },
  { id: 2, name: "Ethan Hunt", position: "Marketing Manager", date: "2023-06-17", time: "2:00 PM" },
  { id: 3, name: "Fiona Green", position: "Sales Representative", date: "2023-06-18", time: "11:30 AM" },
]

export function UpcomingInterviews() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {upcomingInterviews.map((interview) => (
          <TableRow key={interview.id}>
            <TableCell className="font-medium">{interview.name}</TableCell>
            <TableCell>{interview.position}</TableCell>
            <TableCell>{`${interview.date} ${interview.time}`}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">Prepare</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

