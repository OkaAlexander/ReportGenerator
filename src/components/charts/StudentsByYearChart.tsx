import {
  Line,
  LineChart,
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
  { year: "2019", count: 2000 },
  { year: "2020", count: 2200 },
  { year: "2021", count: 2400 },
  { year: "2022", count: 2600 },
  { year: "2023", count: 2800 },
];

export function StudentsByYearChart() {
  const { theme } = useTheme();

  return (
    <Card className="w-full h-[400px]">
      <CardContent className="p-6 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke={
                theme === "dark"
                  ? "hsl(217.2, 91.2%, 59.8%)"
                  : "hsl(221.2, 83.2%, 53.3%)"
              }
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
