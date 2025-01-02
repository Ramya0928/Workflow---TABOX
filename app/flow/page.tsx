"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FlowStats } from "@/components/flow-stats"
import { CandidateFlow } from "@/components/candidate-flow"
import { StageBreakdown } from "@/components/stage-breakdown"

export default function FlowPage() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Recruitment Flow</h1>
            <p className="text-muted-foreground mt-1">Track your recruitment pipeline and candidate progress</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FlowStats />
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Candidate Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <CandidateFlow />
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
              <CardTitle>Stage Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <StageBreakdown />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

