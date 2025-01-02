"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Screening", value: 35 },
  { name: "First Interview", value: 25 },
  { name: "Technical", value: 20 },
  { name: "Final Interview", value: 15 },
  { name: "Offer Stage", value: 5 },
]

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--primary) / 0.8)",
  "hsl(var(--primary) / 0.6)",
  "hsl(var(--primary) / 0.4)",
  "hsl(var(--primary) / 0.2)",
]

export function StageBreakdown() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center mt-2">
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="text-sm text-muted-foreground">
              {entry.name} ({entry.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

