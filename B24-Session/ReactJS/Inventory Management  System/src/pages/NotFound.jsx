export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>
    
      <p className="mt-4 text-xl text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <a
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
