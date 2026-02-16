import { useState } from "react";
import { Map } from "./components/ui/map";
import { SearchBar } from "./components/SearchBar";
import { LocationPreview } from "./components/LocationPreview";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState([-74.006, 40.7128]);
  const [mapZoom, setMapZoom] = useState(12);

  const handleLocationFound = (location) => {
    setSelectedLocation(location);
    setMapCenter([location.longitude, location.latitude]);
    setMapZoom(14);
  };

  const handleClearLocation = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="h-screen w-full bg-gray-50 overflow-hidden">
      <div className="flex h-full gap-4 p-4">
        {/* Left Side - Map */}
        <div className="flex-1 min-w-0">
          <div className="h-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <Map
              center={mapCenter}
              zoom={mapZoom}
              marker={
                selectedLocation
                  ? {
                      latitude: selectedLocation.latitude,
                      longitude: selectedLocation.longitude,
                      label: selectedLocation.name,
                    }
                  : null
              }
            />
          </div>
        </div>

        {/* Right Side - Search + Preview */}
        <div className="w-96 flex flex-col gap-4 min-w-0">
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
            <SearchBar
              onLocationFound={handleLocationFound}
              onClose={handleClearLocation}
            />
          </div>

          {/* Location Preview */}
          <div className="flex-1 overflow-y-auto">
            {selectedLocation ? (
              <LocationPreview
                location={selectedLocation}
                onClose={handleClearLocation}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 h-full flex flex-col items-center justify-center text-center">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto opacity-40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 font-semibold mb-2">
                  No Location Selected
                </p>
                <p className="text-sm text-gray-500">
                  Search for a city, country, or address to view details and
                  marker on the map.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
