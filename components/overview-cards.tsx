import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <OverviewCard title="Hired" value="5 of 13" />
      <OverviewCard title="Interviewed" value="12 of 13" />
      <OverviewCard title="Rejected" value="5 of 13" />
    </div>
  )
}

function OverviewCard({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

