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

const data = [
  { year: "2019", continuing: 1800, completed: 200 },
  { year: "2020", continuing: 2000, completed: 200 },
  { year: "2021", continuing: 2200, completed: 200 },
  { year: "2022", continuing: 2400, completed: 200 },
  { year: "2023", continuing: 2600, completed: 200 },
];

export function ContinuingStudentsChart() {
  const { theme } = useTheme();

  return (
    <Card className="w-full h-[400px]">
      <CardContent className="p-6 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="continuing"
              fill={
                theme === "dark"
                  ? "hsl(217.2, 91.2%, 59.8%)"
                  : "hsl(221.2, 83.2%, 53.3%)"
              }
            />
            <Bar
              dataKey="completed"
              fill={
                theme === "dark"
                  ? "hsl(210, 40%, 96.1%)"
                  : "hsl(217.2, 32.6%, 17.5%)"
              }
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
