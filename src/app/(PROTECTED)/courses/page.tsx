"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FacultyCard from "@/components/FacultyCard";

const faculties = [
  { name: "John Doe" },
  { name: "Jane Doe" },
  { name: "John Smith" },
  { name: "Jane Smith" },
  { name: "Kevin Hart" },
  { name: "Alexander" },
  { name: "James Bond" },
];

const faculty = {
  name: "Dr. John Doe",
  email: "john.doe@university.edu",
  academicBackground: "Ph.D. in Computer Science from MIT",
  ratings: [4.5, 4.7, 4.6, 4.8],
  researchProjects: [
    { title: "Machine Learning in Healthcare", year: 2022 },
    { title: "Quantum Computing Algorithms", year: 2021 },
  ],
  patents: [
    {
      title: "Efficient Data Compression Algorithm",
      number: "US123456",
      year: 2020,
    },
  ],
};

function ComponentContent() {
  const router = useRouter();
  const query = useSearchParams();

  const [course, setCourse] = useState(query.get("course") || "");
  const [selectedFaculty, setSelectedFaculty] = useState(
    query.get("faculty") || ""
  );

  useEffect(() => {
    const params = new URLSearchParams(query.toString());
    setCourse(params.get("course") || "");
    setSelectedFaculty(params.get("faculty") || "");
  }, [query]);

  const handleCourseChange = (value: string) => {
    setCourse(value);
    updateQueryParams(value, selectedFaculty);
  };

  const handleFacultySelect = (name: string) => {
    setSelectedFaculty(name);
    updateQueryParams(course, name);
  };

  const updateQueryParams = (
    course: string,
    faculty: string
  ) => {
    const params = new URLSearchParams(query.toString());
    params.set("course", course);
    params.set("faculty", faculty);
    console.log(params.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 h-[calc(100vh-3rem)] font-[family-name:var(--font-geist-sans)] gap-2 p-4">
      <div className="w-full col-span-2 lg:col-span-1 flex flex-col border-2 border-accent rounded-lg gap-2 p-2 shadow-xl">
        <div className="flex w-full gap-2">
          <Select value={course} onValueChange={handleCourseChange}>
            <SelectTrigger className="h-16">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Courses</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full border-2 border-accent rounded-lg">
          {course === "apple" ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="flex items-center justify-center">
                    Faculty
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {faculties.map((item) => (
                  <TableRow
                    key={item.name}
                    className={selectedFaculty === item.name ? "bg-accent" : ""}
                    onClick={() => handleFacultySelect(item.name)}
                  >
                    <TableCell className="font-medium flex justify-center cursor-pointer">
                      {item.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex items-center justify-center h-full p-4">
              Please select a semester and course
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 md:border-2 border-accent rounded-lg gap-2 md:p-2 shadow-xl">
        <div className="flex items-center justify-center h-full w-full md:border-2 border-accent rounded-md md:p-2">
          {selectedFaculty ? (
            <FacultyCard selectedFaculty={selectedFaculty} faculty={faculty} className="md:w-1/2"/>
          ) : (
            <div className="flex items-center justify-center h-full">
              Please select a faculty member
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentContent />
    </Suspense>
  );
}