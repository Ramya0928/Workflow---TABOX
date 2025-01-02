"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { position: "Software Engineer", applications: 150 },
  { position: "Product Manager", applications: 120 },
  { position: "Data Scientist", applications: 100 },
  { position: "UX Designer", applications: 80 },
  { position: "Sales Representative", applications: 60 },
]

export function TopJobOpenings() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ top: 0, right: 0, left: 40, bottom: 0 }}>
        <XAxis type="number" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis dataKey="position" type="category" fontSize={12} tickLine={false} axisLine={false} width={100} />
        <Tooltip />
        <Bar dataKey="applications" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

