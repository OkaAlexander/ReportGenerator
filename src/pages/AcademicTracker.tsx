import { ContinuingStudentsChart } from "../components/charts/ContinuingStudentsChart";
import { LecturersByDepartmentChart } from "../components/charts/LecturersByDepartmentChart";
import { StudentsByDepartmentChart } from "../components/charts/StudentsByDepartmentChart";
import { StudentsByGenderChart } from "../components/charts/StudentsByGenderChart";
import { StudentsByLevelChart } from "../components/charts/StudentsByLevelChart";
import { StudentsByYearChart } from "../components/charts/StudentsByYearChart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

export function AcademicTracker() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Academic Tracker</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle> Gender-based student report</CardTitle>
            </CardHeader>
            <CardContent>
              <StudentsByGenderChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Department-based student report</CardTitle>
            </CardHeader>
            <CardContent>
              <StudentsByDepartmentChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Academic Year-based student report</CardTitle>
            </CardHeader>
            <CardContent>
              <StudentsByYearChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Level-based student report</CardTitle>
            </CardHeader>
            <CardContent>
              <StudentsByLevelChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Completed and inprogress students</CardTitle>
            </CardHeader>
            <CardContent>
              <ContinuingStudentsChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Department-based lecturars report</CardTitle>
            </CardHeader>
            <CardContent>
              <LecturersByDepartmentChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
