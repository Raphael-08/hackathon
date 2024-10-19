"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Calendar, GraduationCap, Users } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSelectCourses = () => {
    router.push("/courses");
  };
  const handleViewFaculty = () => {
    router.push("/faculty");
  };
  const handleSubmitFeedback = () => {
    router.push("/feedback");
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Welcome, {session?.user.name}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Courses Enrolled
            </CardTitle>
            <BookOpen className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4/6</div>
            <p className="text-xs text-muted-foreground">
              2 more courses to select
            </p>
            <Progress value={67} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Semester 1-1
            </CardTitle>
            <Calendar className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Fall 2023</div>
            <p className="text-xs text-muted-foreground">Sept 1 - Dec 15</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">GPA</CardTitle>
            <GraduationCap className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.75</div>
            <p className="text-xs text-muted-foreground">
              Last updated: Aug 15, 2023
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Teachers Rated
            </CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Out of 15 teachers</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button className="w-full" onClick={() => handleSelectCourses()}>
              Select Courses
            </Button>
            <Button
              className="w-full"
              onClick={() => handleViewFaculty()}
              variant="outline"
            >
              View Faculty
            </Button>
            <Button
              className="w-full"
              onClick={() => handleSubmitFeedback()}
              variant="outline"
            >
              Submit Feedback
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Course Selection Deadline</span>
                <span className="font-medium">Sept 10, 2023</span>
              </li>
              <li className="flex justify-between">
                <span>Add/Drop Period Ends</span>
                <span className="font-medium">Sept 15, 2023</span>
              </li>
              <li className="flex justify-between">
                <span>Midterm Exams Begin</span>
                <span className="font-medium">Oct 20, 2023</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
