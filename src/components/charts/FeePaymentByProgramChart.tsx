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
  { program: "Computer Science", fullPayment: 150, incompletePayment: 50 },
  { program: "Engineering", fullPayment: 130, incompletePayment: 50 },
  { program: "Business", fullPayment: 120, incompletePayment: 40 },
  { program: "Arts", fullPayment: 100, incompletePayment: 40 },
  { program: "Sciences", fullPayment: 160, incompletePayment: 60 },
];

export function FeePaymentByProgramChart() {
  const { theme } = useTheme();

  return (
    <Card className="w-full h-[400px]">
      <CardContent className="p-6 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="program" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="fullPayment"
              fill={theme === "dark" ? "#82ca9d" : "#8884d8"}
            />
            <Bar
              dataKey="incompletePayment"
              fill={theme === "dark" ? "#8884d8" : "#82ca9d"}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
