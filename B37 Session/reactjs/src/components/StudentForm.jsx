function StudentForm() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <form action="#" className="space-y-6">
        {/* Header Section */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Student <span className="text-blue-600">Mark Form</span>
          </h1>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Enter student information and scores to record academic performance
            and track progress.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Student ID Field */}
          <div>
            <label
              htmlFor="studentId"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              placeholder="Enter student enrollment ID"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              required
            />
          </div>

          {/* Student Name Field */}
          <div>
            <label
              htmlFor="studentName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              placeholder="e.g. Selva Kumar"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              required
            />
          </div>

          {/* Subject Name Field */}
          <div>
            <label
              htmlFor="subjectName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subject Name
            </label>
            <input
              type="text"
              id="subjectName"
              name="subjectName"
              placeholder="e.g. Mathematics"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              required
            />
          </div>

          {/* Score Field */}
          <div>
            <label
              htmlFor="score"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Score
            </label>
            <input
              type="number"
              id="score"
              name="score"
              placeholder="Enter score (0-100)"
              min="0"
              max="100"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 text-white font-medium py-2.5 px-4 rounded-md transition-all duration-200 focus:outline-none active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
