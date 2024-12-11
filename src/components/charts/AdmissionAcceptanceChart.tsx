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
      { gender: "Male", accepted: 400, unaccepted: 100 },
      { gender: "Female", accepted: 350, unaccepted: 80 },
    ],
  },
  {
    year: "2022",
    data: [
      { gender: "Male", accepted: 380, unaccepted: 90 },
      { gender: "Female", accepted: 330, unaccepted: 70 },
    ],
  },
  {
    year: "2021",
    data: [
      { gender: "Male", accepted: 360, unaccepted: 80 },
      { gender: "Female", accepted: 310, unaccepted: 60 },
    ],
  },
  {
    year: "2020",
    data: [
      { gender: "Male", accepted: 340, unaccepted: 70 },
      { gender: "Female", accepted: 290, unaccepted: 50 },
    ],
  },
  {
    year: "2019",
    data: [
      { gender: "Male", accepted: 320, unaccepted: 60 },
      { gender: "Female", accepted: 270, unaccepted: 40 },
    ],
  },
];

export function AdmissionAcceptanceChart() {
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
            <XAxis dataKey="gender" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="accepted"
              fill={theme === "dark" ? "#82ca9d" : "#8884d8"}
            />
            <Bar
              dataKey="unaccepted"
              fill={theme === "dark" ? "#8884d8" : "#82ca9d"}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
