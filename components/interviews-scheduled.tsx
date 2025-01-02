import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InterviewsScheduled() {
  const interviews = [
    {
      name: "Lucas Scott",
      time: "10:00 am",
      position: "Sr. UX designer",
      interviewer: "Whitney Miller",
      status: "Confirmed",
    },
    {
      name: "Jessa Smith",
      time: "12:00 pm",
      position: "Front End Developer",
      interviewer: "Brian Conner",
      status: "Confirmed",
    },
    {
      name: "Ryan Parker",
      time: "4:00 pm",
      position: "Java Developer",
      interviewer: "Rueben Cruz",
      status: "Interviewer Confirmation Pending",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interviews Scheduled</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {interviews.map((interview, index) => (
            <div key={index} className="border-b pb-2 last:border-b-0">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{interview.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {interview.time} - {interview.position}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    Re-assign
                  </Button>
                  <Button size="sm" variant="outline">
                    Confirm
                  </Button>
                  <Button size="sm" variant="outline">
                    Re-Schedule
                  </Button>
                </div>
              </div>
              <p className="text-sm mt-1">
                Interviewer: {interview.interviewer} | Status: {interview.status}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

