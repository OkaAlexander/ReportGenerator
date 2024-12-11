import {
  Pie,
  PieChart,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "../ui/Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { useState } from "react";

const data = [
  { level: "100", male: 300, female: 250 },
  { level: "200", male: 280, female: 270 },
  { level: "300", male: 260, female: 240 },
  { level: "400", male: 240, female: 230 },
];
const allData = [
  { year: "2023", male: 1200, female: 1000 },
  { year: "2022", male: 1150, female: 950 },
  { year: "2021", male: 1100, female: 900 },
  { year: "2020", male: 1050, female: 850 },
  { year: "2019", male: 1000, female: 800 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function StudentsByLevelChart() {
  const [selectedYear, setSelectedYear] = useState("2023");

  const _ = allData.find((d) => d.year === selectedYear);
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
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="male"
              nameKey="level"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}` as any}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Pie
              data={data}
              dataKey="female"
              nameKey="level"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}` as any}
                  fill={COLORS[(index + 2) % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
