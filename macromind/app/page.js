"use client";

import { useState, useEffect } from "react";
import ChatInterface from "./components/ChatInterface";
import MacroSummary from "./components/MacroSummary";
import FitbitSync from "./components/FitbitSync";

export default function Home() {
  const [macros, setMacros] = useState({
    calories: 850,
    protein: 45,
    carbs: 90,
    fat: 30,
  });

  const [goals, setGoals] = useState({
    calories: 2200,
    protein: 165,
    carbs: 220,
    fat: 70,
  });

  const [fitnessData, setFitnessData] = useState(null);

  const handleSendMessage = async (message) => {
    // In a real app, this would call the OpenAI API
    console.log("Processing message:", message);

    // Mock API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock response logic based on input
    if (
      message.toLowerCase().includes("egg") ||
      message.toLowerCase().includes("ate")
    ) {
      // Update macros
      const newMacros = {
        calories: macros.calories + 200,
        protein: macros.protein + 15,
        carbs: macros.carbs + 2,
        fat: macros.fat + 12,
      };
      setMacros(newMacros);

      // Return assistant response
      if (newMacros.protein < goals.protein * 0.6) {
        return "I've logged that! You're still quite low on protein today. Consider adding some chicken or a protein shake.";
      } else {
        return "I've logged that! Your macros have been updated.";
      }
    }

    // Default response
    return "I didn't quite catch what food you ate. Could you please provide more details?";
  };

  const handleFitbitSync = (data) => {
    setFitnessData(data);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">MacroMind</h1>
          <p className="text-sm">Your AI Nutrition Coach</p>
        </div>
      </header>

      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Macros */}
          <div>
            <MacroSummary macros={macros} goals={goals} />

            <div className="mt-6">
              <FitbitSync onSync={handleFitbitSync} />
            </div>

            {fitnessData && (
              <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Fitness Summary</h2>
                <div className="space-y-2">
                  <p>Steps: {fitnessData.steps}</p>
                  <p>Calories Burned: {fitnessData.caloriesBurned}</p>
                  <p>Resting Heart Rate: {fitnessData.heartRate.resting} BPM</p>
                  <p>Sleep Duration: {fitnessData.sleep.duration} hours</p>
                </div>
              </div>
            )}
          </div>

          {/* Right column - Chat */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md h-[600px] flex flex-col">
              <ChatInterface onSendMessage={handleSendMessage} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
