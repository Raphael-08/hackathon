import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import { Button } from "./ui/button";

interface Faculty {
  selectedFaculty: string;
  faculty: any;
  className?: ClassValue;
}

export default function FacultyCard({
  selectedFaculty,
  faculty,
  className,
}: Faculty) {
  return (
    <Card
      className={cn(
        "flex flex-col h-full w-full md:h-auto text-sm md:text-lg p-2 gap-3",
        className
      )}
    >
      <CardHeader className="border border-accent rounded-md">
        <CardTitle className="text-sm md:text-2xl">{selectedFaculty}</CardTitle>
        <CardDescription>{faculty.email}</CardDescription>
      </CardHeader>
      <CardContent className="border border-accent rounded-md p-6 h-full">
        <p className="mb-4">{faculty.academicBackground}</p>
        <h3 className="font-semibold mb-2">Ratings (Last 4 Years)</h3>
        <div className="flex space-x-2 mb-4">
          {faculty.ratings.map((rating: number, index: number) => (
            <span
              key={index}
              className="bg-primary text-primary-foreground px-2 py-1 rounded"
            >
              {rating}
            </span>
          ))}
        </div>
        <h3 className="font-semibold mb-2">Research Projects</h3>
        <ul className="list-disc list-inside mb-4">
          {faculty.researchProjects.map((project: any, index: number) => (
            <li key={index}>
              {project.title} ({project.year})
            </li>
          ))}
        </ul>
        <h3 className="font-semibold mb-2">Patents</h3>
        <ul className="list-disc list-inside">
          {faculty.patents.map((patent: any, index: number) => (
            <li key={index}>
              {patent.title} - {patent.number} ({patent.year})
            </li>
          ))}
        </ul>
        <div className="flex justify-stretch p-2 gap-2">
          <Button className="w-1/2">view profile</Button>
          <Button className="w-1/2">select</Button>
        </div>
      </CardContent>
    </Card>
  );
}
