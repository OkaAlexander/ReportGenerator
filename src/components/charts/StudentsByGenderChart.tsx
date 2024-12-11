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
  { year: "2023", male: 1200, female: 1000 },
  { year: "2022", male: 1150, female: 950 },
  { year: "2021", male: 1100, female: 900 },
  { year: "2020", male: 1050, female: 850 },
  { year: "2019", male: 1000, female: 800 },
];

export function StudentsByGenderChart() {
  const { theme } = useTheme();
  const [selectedYear, setSelectedYear] = useState("2023");

  const filteredData = allData.find((d) => d.year === selectedYear);
  const chartData = filteredData
    ? [
        { gender: "Male", count: filteredData.male },
        { gender: "Female", count: filteredData.female },
      ]
    : [];

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
