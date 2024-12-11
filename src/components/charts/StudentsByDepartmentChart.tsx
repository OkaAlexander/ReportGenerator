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
      { department: "Computer Science", count: 500 },
      { department: "Engineering", count: 450 },
      { department: "Business", count: 400 },
      { department: "Arts", count: 350 },
      { department: "Sciences", count: 500 },
    ],
  },
  {
    year: "2022",
    data: [
      { department: "Computer Science", count: 480 },
      { department: "Engineering", count: 430 },
      { department: "Business", count: 390 },
      { department: "Arts", count: 340 },
      { department: "Sciences", count: 480 },
    ],
  },
  {
    year: "2021",
    data: [
      { department: "Computer Science", count: 460 },
      { department: "Engineering", count: 410 },
      { department: "Business", count: 380 },
      { department: "Arts", count: 330 },
      { department: "Sciences", count: 460 },
    ],
  },
  {
    year: "2020",
    data: [
      { department: "Computer Science", count: 440 },
      { department: "Engineering", count: 390 },
      { department: "Business", count: 370 },
      { department: "Arts", count: 320 },
      { department: "Sciences", count: 440 },
    ],
  },
  {
    year: "2019",
    data: [
      { department: "Computer Science", count: 420 },
      { department: "Engineering", count: 370 },
      { department: "Business", count: 360 },
      { department: "Arts", count: 310 },
      { department: "Sciences", count: 420 },
    ],
  },
];

export function StudentsByDepartmentChart() {
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
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="count"
              fill={
                theme === "dark"
                  ? "hsl(217.2, 91.2%, 59.8%)"
                  : "hsl(221.2, 83.2%, 53.3%)"
              }
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
