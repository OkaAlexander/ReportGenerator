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
              <CardTitle>Students by Gender</CardTitle>
            </CardHeader>
            <CardContent>
              <StudentsByGenderChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Students by Department</CardTitle>
            </CardHeader>
            <CardContent>
              <StudentsByDepartmentChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Students by Academic Year</CardTitle>
            </CardHeader>
            <CardContent>
              <StudentsByYearChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Students by Level</CardTitle>
            </CardHeader>
            <CardContent>
              <StudentsByLevelChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Continuing Students</CardTitle>
            </CardHeader>
            <CardContent>
              <ContinuingStudentsChart />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Lecturers by Department</CardTitle>
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
