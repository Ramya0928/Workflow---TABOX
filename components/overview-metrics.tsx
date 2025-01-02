import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Clock, Briefcase } from 'lucide-react'

const metrics = [
  {
    title: "Total Candidates",
    value: "1,234",
    change: "+12.3%",
    icon: Users,
  },
  {
    title: "Interviews Scheduled",
    value: "56",
    change: "+8.1%",
    icon: Calendar,
  },
  {
    title: "Average Time to Hire",
    value: "18 days",
    change: "-2.5 days",
    icon: Clock,
  },
  {
    title: "Open Positions",
    value: "23",
    change: "+4",
    icon: Briefcase,
  },
]

export function OverviewMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

