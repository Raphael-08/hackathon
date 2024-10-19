import FacultyCard from "@/components/FacultyCard";

const name = "Dr. John Doe";

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

export default function Lecturers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-3 gap-4">
      {Array.from({ length: 40 }, (_, index) => (
        <div key={index} className="shadow-lg-invert">
          <FacultyCard selectedFaculty={name} faculty={faculty}/>
        </div>
      ))}
    </div>
  );
}
