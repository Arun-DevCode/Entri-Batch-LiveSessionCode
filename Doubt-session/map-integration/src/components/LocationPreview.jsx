import { MapPin, X, Copy, Check } from "lucide-react";
import { useState } from "react";

export function LocationPreview({ location, onClose }) {
  const [copiedField, setCopiedField] = useState(null);

  if (!location) {
    return null;
  }

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const formatAddress = (displayName) => {
    if (!displayName) return "N/A";
    // Truncate very long addresses
    return displayName.length > 100
      ? displayName.substring(0, 100) + "..."
      : displayName;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-5 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-start gap-2">
        <div className="flex gap-2 items-start flex-1">
          <MapPin className="text-blue-600 shrink-0 mt-1" size={20} />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-gray-900 truncate">
              {location.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1 capitalize">
              {location.type || "Location"}
            </p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 shrink-0"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Address */}
      <div className="bg-gray-50 rounded p-3">
        <p className="text-xs text-gray-600 font-semibold mb-2">Full Address</p>
        <p className="text-sm text-gray-700 leading-relaxed wrap-break-words">
          {formatAddress(location.displayName)}
        </p>
      </div>

      {/* Coordinates */}
      <div className="grid grid-cols-2 gap-3">
        {/* Latitude */}
        <div className="border border-gray-200 rounded p-3">
          <p className="text-xs text-gray-600 font-semibold mb-1">Latitude</p>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-mono text-gray-800">
              {location.latitude.toFixed(6)}
            </p>
            <button
              onClick={() =>
                copyToClipboard(location.latitude.toFixed(6), "lat")
              }
              className="text-gray-400 hover:text-gray-600 transition"
            >
              {copiedField === "lat" ? (
                <Check size={16} className="text-green-600" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </div>

        {/* Longitude */}
        <div className="border border-gray-200 rounded p-3">
          <p className="text-xs text-gray-600 font-semibold mb-1">Longitude</p>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-mono text-gray-800">
              {location.longitude.toFixed(6)}
            </p>
            <button
              onClick={() =>
                copyToClipboard(location.longitude.toFixed(6), "lng")
              }
              className="text-gray-400 hover:text-gray-600 transition"
            >
              {copiedField === "lng" ? (
                <Check size={16} className="text-green-600" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Formatted Coordinates */}
      <div className="border border-gray-200 rounded p-3">
        <p className="text-xs text-gray-600 font-semibold mb-2">Coordinates</p>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-mono text-gray-800 break-all">
            [{location.longitude.toFixed(6)}, {location.latitude.toFixed(6)}]
          </p>
          <button
            onClick={() =>
              copyToClipboard(
                `[${location.longitude.toFixed(6)}, ${location.latitude.toFixed(6)}]`,
                "coords",
              )
            }
            className="text-gray-400 hover:text-gray-600 transition shrink-0"
          >
            {copiedField === "coords" ? (
              <Check size={16} className="text-green-600" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>
      </div>

      {/* Type */}
      {location.type && (
        <div className="flex gap-2 pt-2 border-t border-gray-200">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            {location.type}
          </span>
        </div>
      )}
    </div>
  );
}
