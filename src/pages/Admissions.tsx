import { AdmissionAcceptanceChart } from "../components/charts/AdmissionAcceptanceChart";
import { AdmittedStudentsByProgramChart } from "../components/charts/AdmittedStudentsByProgramChart";
import { AdmittedStudentsByYearChart } from "../components/charts/AdmittedStudentsByYearChart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

export function Admissions() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Admissions</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Admitted Students by Year</CardTitle>
            </CardHeader>
            <CardContent>
              <AdmittedStudentsByYearChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Admitted Students by Program</CardTitle>
            </CardHeader>
            <CardContent>
              <AdmittedStudentsByProgramChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Admission Acceptance</CardTitle>
            </CardHeader>
            <CardContent>
              <AdmissionAcceptanceChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
