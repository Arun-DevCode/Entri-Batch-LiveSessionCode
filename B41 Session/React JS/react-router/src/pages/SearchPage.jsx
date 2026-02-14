import { Form } from "react-router";
import { Search } from "lucide-react";
import SearchResult from "../components/SearchResult";
import { useLoaderData } from "react-router";

function SearchPage() {
  // Get data from loader
  const { data, error } = useLoaderData();
  return (
    <section className="flex justify-center items-center h-dvh">
      <div className="p-1">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold font-serif">
            Search For Users
          </h2>
          <p className="text-md text-gray-400 font-serif">
            Find users by their name
          </p>
        </div>
        {/* Form with loader - GET */}
        <Form method="get" className="flex items-stretch overflow-hidden">
          <input
            type="text"
            name="name"
            placeholder="Search user..."
            className="border focus:outline-none focus:border-blue-600 border-gray-200 rounded-l-lg px-5 py-2.5"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white text-center rounded-r-lg p-3 cursor-pointer"
            type="submit"
          >
            <Search size={16} />
          </button>
        </Form>

        {/* User List */}
        <div className="my-8">
          <h2 className="text-xl font-medium font-serif">User List:</h2>
          <SearchResult data={data} status={error} />
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
