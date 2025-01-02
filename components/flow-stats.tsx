import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, UserX, Clock } from 'lucide-react'

const stats = [
  {
    title: "Total Candidates",
    value: "245",
    change: "+4.75%",
    icon: Users,
  },
  {
    title: "In Progress",
    value: "45",
    change: "+10.2%",
    icon: Clock,
  },
  {
    title: "Hired",
    value: "15",
    change: "+2.3%",
    icon: UserCheck,
  },
  {
    title: "Rejected",
    value: "185",
    change: "-0.4%",
    icon: UserX,
  },
]

export function FlowStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${
              stat.change.startsWith('+') 
                ? 'text-green-600' 
                : 'text-red-600'
            }`}>
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

