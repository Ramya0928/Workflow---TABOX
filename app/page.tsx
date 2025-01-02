"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OverviewMetrics } from "@/components/overview-metrics"
import { RecentApplications } from "@/components/recent-applications"
import { UpcomingInterviews } from "@/components/upcoming-interviews"
import { TaskList } from "@/components/task-list"

export default function MyDashboard() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-semibold">My Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's an overview of your recruitment activities.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <OverviewMetrics />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Latest candidates who applied</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentApplications />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Interviews</CardTitle>
              <CardDescription>Your schedule for the next few days</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingInterviews />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Task List</CardTitle>
            <CardDescription>Your pending recruitment tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <TaskList />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

