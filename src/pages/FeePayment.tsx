import { FeePaymentByProgramChart } from "../components/charts/FeePaymentByProgramChart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

export function FeePayment() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Fee Payment</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Fee Payment by Program</CardTitle>
            </CardHeader>
            <CardContent>
              <FeePaymentByProgramChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
