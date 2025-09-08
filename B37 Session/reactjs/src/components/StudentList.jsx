import React from "react";

function StudentList({data}) {
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="space-y-3">
        {data?.map((student) => (
          <div
            key={student.id}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-start gap-4 min-w-0 flex-1">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {student.id}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {student.name}
                  </h3>
                  <p className="text-gray-600 text-sm truncate">
                    {student.subject}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {student.score}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
