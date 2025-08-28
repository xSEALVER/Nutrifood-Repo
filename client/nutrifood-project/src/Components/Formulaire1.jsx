import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Added useNavigate

const Formulaire1 = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Added this hook
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
    objective: "",
    exercise: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  // Fetch user info from navigation state or localStorage
  useEffect(() => {
    let userData = null;
    if (location.state) {
      userData = {
        id_clients: location.state.userId,
        name: location.state.name,
        email: location.state.email,
      };
      console.log("Got user data from navigation:", userData);
    } else {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          userData = JSON.parse(storedUser);
          console.log("Got user data from localStorage:", userData);
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
    if (userData && userData.id_clients) {
      setUserInfo(userData);
    } else {
      console.error("No user data found. User might not be logged in.");
    }
  }, [location.state]);

  // Function to handle navigation to journal
  const goToJournal = () => {
    navigate("/journal", {
      state: {
        userInfo: userInfo,
        nutritionalNeeds: apiResponse?.nutritional_needs,
      },
    });
  };

  // Define all steps
  const steps = [
    {
      id: 1,
      bgColor: "bg-violet-300",
      hasNextButton: true,
      hasBackButton: false,
      content: {
        image: "",
        title: "",
        description: "Congratulations on taking the first step!",
      },
    },
    {
      id: 2,
      bgColor: "bg-green-300",
      hasNextButton: true,
      hasBackButton: true,
      content: {
        image: "",
        description:
          "In nutrition, finding what works best for you makes all the difference.",
      },
    },
    {
      id: 3,
      bgColor: "bg-blue-300",
      hasNextButton: true,
      hasBackButton: true,
      content: {
        image: "",
        title: "",
        description: "You are unique, just like our program",
      },
    },
    {
      id: 4,
      bgColor: "bg-white",
      hasNextButton: true,
      hasBackButton: true,
      isForm: true,
      content: {
        title: "What is your gender?",
        fieldType: "gender",
      },
    },
    {
      id: 5,
      bgColor: "bg-white",
      hasNextButton: true,
      hasBackButton: true,
      isForm: true,
      content: {
        title: "How old are you?",
        fieldType: "age",
      },
    },
    {
      id: 6,
      bgColor: "bg-white",
      hasNextButton: true,
      hasBackButton: true,
      isForm: true,
      content: {
        title: "What is your height?",
        fieldType: "height",
      },
    },
    {
      id: 7,
      bgColor: "bg-white",
      hasNextButton: true,
      hasBackButton: true,
      isForm: true,
      content: {
        title: "What is your current weight?",
        fieldType: "weight",
      },
    },
    {
      id: 8,
      bgColor: "bg-white",
      hasNextButton: true,
      hasBackButton: true,
      isForm: true,
      content: {
        title: "What is your objective?",
        fieldType: "objective",
      },
    },
    {
      id: 9,
      bgColor: "bg-white",
      hasNextButton: true,
      hasBackButton: true,
      isForm: true,
      content: {
        title: "Do you exercise?",
        fieldType: "exercise",
      },
    },
    {
      id: 10,
      bgColor: "bg-violet-300",
      hasNextButton: true, // Changed to true so we can show the Next button
      hasBackButton: true,
      isResultCard: true,
      content: {
        image: "",
        title: "We found your personalized program",
      },
    },
  ];

  // Save profile data to the backend
  const saveProfile = async () => {
    setIsLoading(true);
    try {
      if (!userInfo || !userInfo.id_clients) {
        alert("User information not found. Please log in again.");
        setIsLoading(false);
        return false;
      }

      const profileData = {
        utilisateur_id: userInfo.id_clients,
        sexe: formData.gender,
        age: formData.age,
        poids: formData.weight,
        taille: formData.height,
        niveau_activite: formData.exercise,
        objectif: formData.objective,
      };

      console.log("Sending profile data:", profileData);

      const response = await fetch("http://localhost:8081/save-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${
            errorData.error || "Unknown error"
          }`
        );
      }

      const result = await response.json();
      console.log("Profile saved successfully:", result);

      setApiResponse(result);
      alert("Profile saved successfully!");
      return true;
    } catch (error) {
      console.error("Error saving profile:", error);
      alert(`Error saving profile: ${error.message}. Please try again.`);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Move to the next step
  const nextStep = async () => {
    // If we're on the result card (step 9, index 9), go to journal
    if (currentStep === 9) {
      goToJournal();
      return;
    }

    if (currentStep >= steps.length - 1) {
      return;
    }

    if (currentStep === 8) {
      if (
        !formData.gender ||
        !formData.age ||
        !formData.height ||
        !formData.weight ||
        !formData.objective ||
        !formData.exercise
      ) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      const success = await saveProfile();
      if (success && currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  // Move to the previous step
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Get current step data
  const currentStepData = steps[currentStep];
  if (!currentStepData) {
    return <div>Loading...</div>;
  }

  const showStackedForm = currentStep >= 3 && currentStep <= 8;
  const visibleFormSteps = showStackedForm
    ? steps.slice(3, currentStep + 1).filter((step) => step.isForm)
    : [];

  // Render form fields
  const renderFormField = (step, isActive = false) => {
    const fieldType = step.content.fieldType;

    switch (fieldType) {
      case "gender":
        return (
          <div className={`mb-4 ${!isActive ? "opacity-60" : ""}`}>
            <h3 className="text-sm font-medium text-gray-800 mb-2">
              What is your gender?
            </h3>
            <div className="flex gap-2 flex-wrap">
              {["Male", "Female", "Non-binary", "Other"].map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange("gender", option)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                    formData.gender === option
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  disabled={!isActive}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case "age":
        return (
          <div className={`mb-4 ${!isActive ? "opacity-60" : ""}`}>
            <h3 className="text-sm font-medium text-gray-800 mb-2">
              How old are you?
            </h3>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your age"
              disabled={!isActive}
            />
          </div>
        );

      case "height":
        return (
          <div className={`mb-4 ${!isActive ? "opacity-60" : ""}`}>
            <h3 className="text-sm font-medium text-gray-800 mb-2">
              What is your height?
            </h3>
            <input
              type="text"
              value={formData.height}
              onChange={(e) => handleInputChange("height", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g., 5ft8 or 173cm"
              disabled={!isActive}
            />
          </div>
        );

      case "weight":
        return (
          <div className={`mb-4 ${!isActive ? "opacity-60" : ""}`}>
            <h3 className="text-sm font-medium text-gray-800 mb-2">
              What is your current weight?
            </h3>
            <input
              type="text"
              value={formData.weight}
              onChange={(e) => handleInputChange("weight", e.target.value)}
              className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="e.g., 150 lbs or 68 kg"
              disabled={!isActive}
            />
          </div>
        );

      case "objective":
        return (
          <div className={`mb-4 ${!isActive ? "opacity-60" : ""}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              What is your objective?
            </h3>
            <div className="space-y-2">
              {[
                "Weight loss",
                "maintenance",
                "mass gain",
                "Gain muscle & lose fat",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange("objective", option)}
                  className={`w-full p-3 rounded-full text-sm font-medium transition-colors ${
                    formData.objective === option
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  disabled={!isActive}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case "exercise":
        return (
          <div className={`mb-4 ${!isActive ? "opacity-60" : ""}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Do you exercise?
            </h3>
            <div className="space-y-2">
              {[
                "6-7 per week",
                "3-5 per week",
                "1-2 per week",
                "Less than that",
                "Never",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => handleInputChange("exercise", option)}
                  className={`w-full p-3 rounded-full text-sm font-medium transition-colors ${
                    formData.exercise === option
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  disabled={!isActive}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Render the component
  return (
    <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center p-8">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Nutrifood
        </h1>

        <div
          className={`${
            currentStepData.bgColor
          } rounded-3xl p-8 shadow-lg relative ${
            showStackedForm ? "min-h-[500px]" : "min-h-[400px]"
          } flex flex-col items-center justify-between`}
        >
          {/* Back button */}
          <div className="absolute top-1/2 left-1 transform -translate-y-1/2 z-10">
            {currentStepData.hasBackButton && currentStep > 0 && (
              <button
                onClick={prevStep}
                className={`w-10 h-10 rounded-full align-middle hover:bg-opacity-30 transition-all ${
                  showStackedForm
                    ? "bg-gray-200 hover:bg-gray-300"
                    : "bg-opacity-20"
                }`}
                disabled={isLoading}
              >
                <span
                  className={`text-3xl font-black ${
                    showStackedForm ? "text-black" : "text-black"
                  }`}
                >
                  ←
                </span>
              </button>
            )}
          </div>

          {/* Next button */}
          <div className="absolute top-1/2 right-1 transform -translate-y-1/2 z-10">
            {currentStep < steps.length - 1 && (
              <button
                onClick={nextStep}
                className={`w-10 h-10 rounded-full items-center hover:bg-opacity-30 transition-all ${
                  showStackedForm
                    ? "bg-gray-200 hover:bg-gray-300"
                    : "bg-opacity-20"
                }`}
                disabled={isLoading}
              >
                <span
                  className={`text-3xl font-black ${
                    showStackedForm ? "text-black" : "text-black"
                  }`}
                >
                  →
                </span>
              </button>
            )}
          </div>

          {/* Content */}
          {!showStackedForm ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center">
              <div className="w-48 h-48 bg-white rounded-2xl mb-6 flex items-center justify-center shadow-md">
                {currentStepData.content.image ? (
                  <img
                    src={currentStepData.content.image}
                    alt={`Step ${currentStep + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="text-gray-400 text-sm">
                    Image {currentStep + 1}
                  </div>
                )}
              </div>

              {currentStepData.content.title && (
                <h2 className="text-lg font-semibold text-gray-800 mb-4 max-w-xs">
                  {currentStepData.content.title}
                </h2>
              )}

              {currentStepData.content.description && (
                <p className="text-sm text-gray-700 mb-6 max-w-xs">
                  {currentStepData.content.description}
                </p>
              )}
            </div>
          ) : currentStepData.isResultCard ? (
            <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-6 max-w-xs">
                {currentStepData.content.title}
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-md mb-6 w-full max-w-xs relative">
                {apiResponse?.nutritional_needs ? (
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-800 mb-4">
                      Your Daily Nutritional Needs:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Calories:</span>
                        <span className="font-semibold">
                          {apiResponse.nutritional_needs.calories}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protein:</span>
                        <span className="font-semibold">
                          {apiResponse.nutritional_needs.proteins}g
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Carbs:</span>
                        <span className="font-semibold">
                          {apiResponse.nutritional_needs.carbs}g
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fats:</span>
                        <span className="font-semibold">
                          {apiResponse.nutritional_needs.fats}g
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-gray-400 text-4xl mb-2">🍽️</div>
                    <p className="text-gray-500 text-sm">
                      Food Image Placeholder
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full flex-1 overflow-y-auto px-4">
              <div className="space-y-4 mb-6">
                {currentStepData.id === 8 || currentStepData.id === 9
                  ? renderFormField(currentStepData, true)
                  : visibleFormSteps.map((step, index) => (
                      <div key={step.id}>
                        {renderFormField(
                          step,
                          index === visibleFormSteps.length - 1
                        )}
                      </div>
                    ))}
              </div>
            </div>
          )}

          {/* Bottom button */}
          <div className="w-full">
            {currentStepData.hasNextButton && (
              <button
                onClick={nextStep}
                disabled={isLoading}
                className={`w-full font-semibold py-3 rounded-xl transition-colors duration-200 mb-4 ${
                  isLoading
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : currentStepData.isResultCard 
                    ? "bg-blue-500 hover:bg-blue-600 text-white" 
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                {isLoading
                  ? "Saving..."
                  : currentStepData.isResultCard
                  ? "Next"
                  : currentStep === steps.length - 1
                  ? "Start"
                  : "Next"}
              </button>
            )}
          </div>

          {/* Step indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? "bg-white" : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulaire1;