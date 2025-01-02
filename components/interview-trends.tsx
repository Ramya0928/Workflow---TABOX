"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "Jan 1", interviews: 12 },
  { date: "Jan 8", interviews: 18 },
  { date: "Jan 15", interviews: 24 },
  { date: "Jan 22", interviews: 30 },
  { date: "Jan 29", interviews: 26 },
  { date: "Feb 5", interviews: 32 },
  { date: "Feb 12", interviews: 28 },
]

export function InterviewTrends() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="interviews" stroke="hsl(var(--primary))" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

