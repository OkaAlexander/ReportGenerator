import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "../ui/Card";
import { useTheme } from "next-themes";

const allData = [
  { year: "2019", male: 600, female: 500 },
  { year: "2020", male: 650, female: 550 },
  { year: "2021", male: 700, female: 600 },
  { year: "2022", male: 750, female: 650 },
  { year: "2023", male: 800, female: 700 },
];

export function AdmittedStudentsByYearChart() {
  const { theme } = useTheme();

  return (
    <Card className="w-full h-[400px]">
      <CardContent className="p-6 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={allData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="male"
              stroke={theme === "dark" ? "#8884d8" : "#82ca9d"}
            />
            <Line
              type="monotone"
              dataKey="female"
              stroke={theme === "dark" ? "#82ca9d" : "#8884d8"}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
