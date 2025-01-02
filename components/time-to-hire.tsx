"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { department: "Engineering", days: 45 },
  { department: "Sales", days: 30 },
  { department: "Marketing", days: 35 },
  { department: "Product", days: 40 },
  { department: "Design", days: 38 },
]

export function TimeToHire() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="department" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value} days`} />
        <Tooltip />
        <Bar dataKey="days" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

