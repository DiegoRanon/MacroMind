"use client";

export default function MacroSummary({ macros, goals }) {
  // Default values if not provided
  const defaultMacros = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  };

  const defaultGoals = {
    calories: 2000,
    protein: 150,
    carbs: 200,
    fat: 65,
  };

  const currentMacros = macros || defaultMacros;
  const targetGoals = goals || defaultGoals;

  // Calculate percentages for progress bars
  const getPercentage = (current, target) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Today&apos;s Macros</h2>

      <div className="space-y-4">
        {/* Calories */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-medium">Calories</span>
            <span>
              {currentMacros.calories} / {targetGoals.calories}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{
                width: `${getPercentage(
                  currentMacros.calories,
                  targetGoals.calories
                )}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Protein */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-medium">Protein</span>
            <span>
              {currentMacros.protein}g / {targetGoals.protein}g
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-red-500 h-2.5 rounded-full"
              style={{
                width: `${getPercentage(
                  currentMacros.protein,
                  targetGoals.protein
                )}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Carbs */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-medium">Carbs</span>
            <span>
              {currentMacros.carbs}g / {targetGoals.carbs}g
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{
                width: `${getPercentage(
                  currentMacros.carbs,
                  targetGoals.carbs
                )}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Fat */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-medium">Fat</span>
            <span>
              {currentMacros.fat}g / {targetGoals.fat}g
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-yellow-500 h-2.5 rounded-full"
              style={{
                width: `${getPercentage(currentMacros.fat, targetGoals.fat)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
