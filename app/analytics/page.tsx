import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OverviewMetrics } from "@/components/overview-metrics"
import { InterviewTrends } from "@/components/interview-trends"
import { TopJobOpenings } from "@/components/top-job-openings"
import { CandidateSourceChart } from "@/components/candidate-source-chart"
import { TimeToHire } from "@/components/time-to-hire"

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">Key metrics and insights for your recruitment process</p>
        </div>
      </div>

      <OverviewMetrics />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Interview Trends</CardTitle>
            <CardDescription>Number of interviews conducted over time</CardDescription>
          </CardHeader>
          <CardContent>
            <InterviewTrends />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Job Openings</CardTitle>
            <CardDescription>Positions with the most applications</CardDescription>
          </CardHeader>
          <CardContent>
            <TopJobOpenings />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Candidate Sources</CardTitle>
            <CardDescription>Where your candidates are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <CandidateSourceChart />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Time to Hire</CardTitle>
            <CardDescription>Average days to fill a position by department</CardDescription>
          </CardHeader>
          <CardContent>
            <TimeToHire />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

