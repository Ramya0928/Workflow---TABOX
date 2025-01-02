"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Applied",
    total: 245,
  },
  {
    name: "Screening",
    total: 156,
  },
  {
    name: "First Interview",
    total: 98,
  },
  {
    name: "Technical",
    total: 65,
  },
  {
    name: "Final Interview",
    total: 35,
  },
  {
    name: "Offer",
    total: 22,
  },
  {
    name: "Hired",
    total: 15,
  },
]

export function CandidateFlow() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

