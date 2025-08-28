import React, { useState, useEffect } from "react";
import addmeal from "../assets/addmeal.png";
import { Link } from "react-router-dom"; // Add this import

const JournalComp = ({ userId }) => {
  // Initialize state as null to avoid showing default values
  const [nutritionalInfo, setNutritionalInfo] = useState(null);

  // State for meals
  const [meals, setMeals] = useState({
    breakfast: [],
    dinner: [],
  });

  // Fetch user profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/get-profile/${userId}`
        );
        if (!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
          throw new Error(`Failed to fetch profile: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched profile data:", data);
        console.log("Available keys:", Object.keys(data));

        // Fixed column names to match database (removed extra 's')
        const calories = Number(data.besoin_calorique);
        const carbs = Number(data.besoin_glucides);
        const proteins = Number(data.besoin_proteines);
        const fats = Number(data.besoin_lipides);

        // Calculate percentages only if calories is not zero
        const carbsPercent =
          calories > 0 ? Math.round(((carbs * 4) / calories) * 100) : 0;
        const proteinsPercent =
          calories > 0 ? Math.round(((proteins * 4) / calories) * 100) : 0;
        const fatsPercent =
          calories > 0 ? Math.round(((fats * 9) / calories) * 100) : 0;

        setNutritionalInfo({
          caloriesLeft: calories,
          carbsLeft: carbs,
          proteinsLeft: proteins,
          fatsLeft: fats,
          carbsPercent: carbsPercent,
          proteinsPercent: proteinsPercent,
          fatsPercent: fatsPercent,
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [userId]);

  // Function to add a meal
  const addMeal = (mealType, mealName, calories, quantity) => {
    const newMeal = { name: mealName, calories, quantity, selected: true };
    setMeals({
      ...meals,
      [mealType]: [...meals[mealType], newMeal],
    });
  };

  // Function to toggle meal selection
  const toggleSelectMeal = (mealType, index) => {
    const updatedMeals = { ...meals };
    updatedMeals[mealType][index].selected =
      !updatedMeals[mealType][index].selected;
    setMeals(updatedMeals);
  };

  // Calculate total calories for a meal type
  const calculateTotalCalories = (mealType) => {
    return meals[mealType].reduce(
      (acc, meal) => acc + (meal.selected ? meal.calories : 0),
      0
    );
  };

  // Only render the UI if nutritionalInfo is not null
  if (!nutritionalInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header with nutritional info */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-2xl font-bold text-center mb-2">Today</h2>
        <p className="text-center text-gray-600 mb-4">
          You can eat{" "}
          <span className="font-bold">{nutritionalInfo.caloriesLeft}</span>{" "}
          calories
        </p>
        {/* Macronutrient circles */}
        <div className="flex justify-between mb-4">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-1">
              <span className="text-white font-bold">
                {nutritionalInfo.carbsPercent}%
              </span>
            </div>
            <p className="text-sm">Carbs</p>
            <p className="text-xs text-gray-500">
              {nutritionalInfo.carbsLeft} left
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-1">
              <span className="text-white font-bold">
                {nutritionalInfo.proteinsPercent}%
              </span>
            </div>
            <p className="text-sm">Protéines</p>
            <p className="text-xs text-gray-500">
              {nutritionalInfo.proteinsLeft} left
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-1">
              <span className="text-white font-bold">
                {nutritionalInfo.fatsPercent}%
              </span>
            </div>
            <p className="text-sm">Fat</p>
            <p className="text-xs text-gray-500">
              {nutritionalInfo.fatsLeft} left
            </p>
          </div>
        </div>
      </div>

      {/* Breakfast section */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h3 className="text-xl font-semibold mb-2">Breakfast</h3>
        {meals.breakfast.length > 0 ? (
          meals.breakfast.map((meal, index) => (
            <div
              key={index}
              className={`p-2 mb-2 rounded ${
                meal.selected ? "bg-green-100" : "bg-gray-100"
              }`}
              onClick={() => toggleSelectMeal("breakfast", index)}
            >
              <p className="font-medium">{meal.name}</p>
              <p className="text-sm text-gray-600">
                {meal.calories} cal, {meal.quantity}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No meals added yet.</p>
        )}
        <p className="font-bold mt-2">
          Total: {calculateTotalCalories("breakfast")} cal
        </p>
      </div>

      {/* Dinner section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-xl font-semibold mb-2">Dinner</h3>
        {meals.dinner.length > 0 ? (
          meals.dinner.map((meal, index) => (
            <div
              key={index}
              className={`p-2 mb-2 rounded ${
                meal.selected ? "bg-green-100" : "bg-gray-100"
              }`}
              onClick={() => toggleSelectMeal("dinner", index)}
            >
              <p className="font-medium">{meal.name}</p>
              <p className="text-sm text-gray-600">
                {meal.calories} cal, {meal.quantity}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No meals added yet.</p>
        )}
        <p className="font-bold mt-2">
          Total: {calculateTotalCalories("dinner")} cal
        </p>
      </div>

      {/* Add Meal Button */}
      <div className="fixed bottom-28 right-6 z-10">
        <Link to="/aliments">
          {" "}
          {/* Add your route path here */}
          <button className="cursor-pointer rounded-full flex items-center justify-center shadow-lg transition-colors duration-200">
            <img
              src={addmeal}
              alt="Add meal"
              className="w-16 h-16 object-contain"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JournalComp;
