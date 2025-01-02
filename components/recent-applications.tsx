import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const recentApplications = [
  { id: 1, name: "Alice Johnson", position: "Software Engineer", date: "2023-06-15" },
  { id: 2, name: "Bob Smith", position: "Product Manager", date: "2023-06-14" },
  { id: 3, name: "Charlie Brown", position: "UX Designer", date: "2023-06-13" },
]

export function RecentApplications() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentApplications.map((application) => (
          <TableRow key={application.id}>
            <TableCell className="font-medium">{application.name}</TableCell>
            <TableCell>{application.position}</TableCell>
            <TableCell>{application.date}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">Review</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

