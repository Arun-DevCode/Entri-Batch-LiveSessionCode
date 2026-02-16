import { useState } from "react";
import { Search, Loader2, AlertCircle } from "lucide-react";

export function SearchBar({ onLocationFound, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchLocation = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError("");
    setResults([]);
    setShowResults(true);

    try {
      // Using Nominatim (OpenStreetMap) for geocoding
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery,
        )}&limit=5`,
        {
          headers: {
            "Accept-Language": "en-US",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();

      if (data.length === 0) {
        setError("No locations found. Try a different search.");
        setResults([]);
        return;
      }

      setResults(data);
    } catch (err) {
      setError("Error searching location. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectLocation = (location) => {
    const locationData = {
      name: location.name,
      displayName: location.display_name,
      latitude: parseFloat(location.lat),
      longitude: parseFloat(location.lon),
      type: location.type,
      address: location.address,
    };
    onLocationFound(locationData);
    setShowResults(false);
    setResults([]);
  };

  return (
    <div className="w-full">
      <form onSubmit={searchLocation} className="space-y-4">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Search by city, country, or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <Search size={18} />
              Search Location
            </>
          )}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex gap-2 text-red-700">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Search Results */}
      {showResults && results.length > 0 && (
        <div className="mt-4 space-y-2 max-h-64 overflow-y-auto border border-gray-200 rounded-lg">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleSelectLocation(result)}
              className="w-full text-left px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition duration-150"
            >
              <div className="font-semibold text-gray-900 text-sm">
                {result.name}
              </div>
              <div className="text-xs text-gray-600 mt-1 truncate">
                {result.display_name}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
