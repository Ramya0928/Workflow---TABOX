import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const applications = [
  {
    name: "Lucas Scott",
    position: "Sr. UX Designer",
    team: "Design",
    applicationDate: "24/11/2017",
    candidateStatus: "Round 1",
    interviewerStatus: "Assigned",
    hiringManager: "Whitney Miller",
    action: "Schedule Interview"
  },
  {
    name: "Jessa Smith",
    position: "Front-end Developer",
    team: "UI",
    applicationDate: "24/11/2017",
    candidateStatus: "Final Round",
    interviewerStatus: "Assigned",
    hiringManager: "Whitney Miller",
    action: "Schedule Interview"
  },
  {
    name: "Ryan Parker",
    position: "Java Developer",
    team: "Product",
    applicationDate: "24/11/2017",
    candidateStatus: "Awaiting Confirmation",
    interviewerStatus: "Yet to be Confirmed",
    hiringManager: "Whitney Miller",
    action: "Confirm Interview"
  }
]

export function ApplicationsTable() {
  return (
    <div className="rounded-md border bg-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead>CANDIDATE NAME</TableHead>
            <TableHead>POSITION</TableHead>
            <TableHead>TEAM</TableHead>
            <TableHead>APPLICATION DATE</TableHead>
            <TableHead>CANDIDATE STATUS</TableHead>
            <TableHead>INTERVIEWER STATUS</TableHead>
            <TableHead>HIRING MGR</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.name}>
              <TableCell className="font-medium">{application.name}</TableCell>
              <TableCell>{application.position}</TableCell>
              <TableCell>{application.team}</TableCell>
              <TableCell>{application.applicationDate}</TableCell>
              <TableCell>{application.candidateStatus}</TableCell>
              <TableCell>{application.interviewerStatus}</TableCell>
              <TableCell>{application.hiringManager}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  {application.action}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

