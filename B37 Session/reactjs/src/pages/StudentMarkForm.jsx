import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import { useLoaderData } from "react-router";

function StudentMarkForm() {
  const studentData = useLoaderData();
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-2">
            Student Score Management
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage student records and track academic performance efficiently
          </p>
        </div>

        {/* Main Content Container */}
        <div className="flex items-center space-x-32">
          {/* Student Form Section */}
          <div className="flex-1">
            <StudentForm />
          </div>

          {/* Student List Section */}
          <div className="flex-1">
            <div className="mb-6 ml-3.5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Student Records
              </h2>
              <p className="text-sm text-gray-600">
                View and manage existing student scores
              </p>
            </div>
            <div className="max-h-[600px] overflow-y-auto pr-2">
              <StudentList data={studentData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default StudentMarkForm;
