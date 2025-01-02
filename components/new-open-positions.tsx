import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function NewOpenPositions() {
  const positions = [
    {
      position: "Sr. UX Designer",
      team: "Design",
      closingDate: "24/11/2017",
      hiringManager: "Whitney Miller",
    },
    {
      position: "Front-end Developer",
      team: "UI",
      closingDate: "24/11/2017",
      hiringManager: "Whitney Miller",
    },
    {
      position: "Java Developer",
      team: "Product",
      closingDate: "24/11/2017",
      hiringManager: "Whitney Miller",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Open Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Position</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Closing Date</TableHead>
              <TableHead>Hiring Manager</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {positions.map((position, index) => (
              <TableRow key={index}>
                <TableCell>{position.position}</TableCell>
                <TableCell>{position.team}</TableCell>
                <TableCell>{position.closingDate}</TableCell>
                <TableCell>{position.hiringManager}</TableCell>
                <TableCell>
                  <Button size="sm">Confirm</Button>
                  <Button size="sm" variant="outline" className="ml-2">
                    Re-Schedule
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

