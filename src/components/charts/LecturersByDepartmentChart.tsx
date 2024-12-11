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
import { useTheme } from "next-themes";
import { Card, CardContent } from "../ui/Card";

const data = [
  { department: "Computer Science", count: 50 },
  { department: "Engineering", count: 45 },
  { department: "Business", count: 40 },
  { department: "Arts", count: 35 },
  { department: "Sciences", count: 55 },
];

export function LecturersByDepartmentChart() {
  const { theme } = useTheme();

  return (
    <Card className="w-full h-[400px]">
      <CardContent className="p-6 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="count"
              fill={theme === "dark" ? "#ffc658" : "#8884d8"}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
