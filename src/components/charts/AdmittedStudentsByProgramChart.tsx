import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "../ui/Card";
import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

const allData = [
  {
    year: "2023",
    data: [
      { program: "Computer Science", count: 200 },
      { program: "Engineering", count: 180 },
      { program: "Business", count: 160 },
      { program: "Arts", count: 140 },
      { program: "Sciences", count: 220 },
    ],
  },
  {
    year: "2022",
    data: [
      { program: "Computer Science", count: 190 },
      { program: "Engineering", count: 170 },
      { program: "Business", count: 150 },
      { program: "Arts", count: 130 },
      { program: "Sciences", count: 210 },
    ],
  },
  {
    year: "2021",
    data: [
      { program: "Computer Science", count: 180 },
      { program: "Engineering", count: 160 },
      { program: "Business", count: 140 },
      { program: "Arts", count: 120 },
      { program: "Sciences", count: 200 },
    ],
  },
  {
    year: "2020",
    data: [
      { program: "Computer Science", count: 170 },
      { program: "Engineering", count: 150 },
      { program: "Business", count: 130 },
      { program: "Arts", count: 110 },
      { program: "Sciences", count: 190 },
    ],
  },
  {
    year: "2019",
    data: [
      { program: "Computer Science", count: 160 },
      { program: "Engineering", count: 140 },
      { program: "Business", count: 120 },
      { program: "Arts", count: 100 },
      { program: "Sciences", count: 180 },
    ],
  },
];

export function AdmittedStudentsByProgramChart() {
  const { theme } = useTheme();
  const [selectedYear, setSelectedYear] = useState("2023");

  const chartData = allData.find((d) => d.year === selectedYear)?.data || [];

  return (
    <Card className="w-full h-[400px]">
      <CardContent className="p-6 h-full">
        <div className="mb-4">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {allData.map((d) => (
                <SelectItem key={d.year} value={d.year}>
                  {d.year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="program" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="count"
              fill={theme === "dark" ? "#8884d8" : "#82ca9d"}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
