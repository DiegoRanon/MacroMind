"use client";

import { useState } from "react";

export default function FitbitSync({ onSync }) {
  const [isConnected, setIsConnected] = useState(false);
  const [syncDate, setSyncDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // In a real app, this would use the OAuth flow
  const handleConnect = () => {
    setIsLoading(true);

    // Mock OAuth flow - in reality this would redirect to Fitbit
    setTimeout(() => {
      setIsConnected(true);
      setIsLoading(false);
      setSyncDate(new Date());

      // Mock data - in reality this would come from the Fitbit API
      if (onSync) {
        onSync({
          steps: 8432,
          caloriesBurned: 1950,
          heartRate: { resting: 68, average: 72 },
          sleep: { duration: 7.5, quality: "good" },
        });
      }
    }, 1500);
  };

  const handleSync = () => {
    setIsLoading(true);

    // Mock sync - in reality this would call the Fitbit API
    setTimeout(() => {
      setIsLoading(false);
      setSyncDate(new Date());

      // Mock data
      if (onSync) {
        onSync({
          steps: 8432,
          caloriesBurned: 1950,
          heartRate: { resting: 68, average: 72 },
          sleep: { duration: 7.5, quality: "good" },
        });
      }
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Fitness Data Sync</h2>

      {!isConnected ? (
        <button
          onClick={handleConnect}
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 transition"
        >
          {isLoading ? "Connecting..." : "Connect to Fitbit"}
        </button>
      ) : (
        <div>
          <div className="flex items-center mb-4">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            <span>Connected to Fitbit</span>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-500">
              Last synced: {syncDate ? syncDate.toLocaleString() : "Never"}
            </p>
          </div>

          <button
            onClick={handleSync}
            disabled={isLoading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 transition"
          >
            {isLoading ? "Syncing..." : "Sync Now"}
          </button>
        </div>
      )}
    </div>
  );
}
