import React, { useState } from "react";

const Formulaire1 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
    objective: "",
    exercise: "",
  });

  const steps = [
    {
      id: 1,
      bgColor: "bg-violet-300",
      hasNextButton: true,
      hasBackButton: false,
      content: {
        image: "",
        title: "Congratulations on taking the first step!",
        description: "",
      },
    },
    {
      id: 2,
      bgColor: "bg-green-300",
      hasNextButton: true,
      hasBackButton: true,
      content: {
        image: "",
        title: "You are unique, just like our program",
        description: "",
      },
    },
    {
      id: 3,
      bgColor: "bg-blue-300",
      hasNextButton: true,
      hasBackButton: true,
      content: {
        image: "",
        title: "Let's find your personalized program",
        description: "Find what works best for you to achieve your goal.",
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
      hasNextButton: true,
      hasBackButton: true,
      isResultCard: true,
      content: {
        image: "",
        title: "We found your personalized program",
        subtitle: "Reach 60 kg by the end of June",
      },
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const currentStepData = steps[currentStep];
  const showStackedForm = currentStep >= 3 && currentStep <= 8;
  const visibleFormSteps = showStackedForm
    ? steps.slice(3, currentStep + 1).filter((step) => step.isForm)
    : [];

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

  return (
    <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Nutrifood
        </h1>

        <div
          className={`${
            currentStepData.bgColor
          } rounded-3xl p-8 shadow-lg relative ${
            showStackedForm ? "min-h-[600px]" : "min-h-[500px]"
          } flex flex-col items-center justify-between`}
        >
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            {currentStepData.hasBackButton && currentStep > 0 && (
              <button
                onClick={prevStep}
                className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all ${
                  showStackedForm
                    ? "bg-gray-200 hover:bg-gray-300"
                    : "bg-white bg-opacity-20"
                }`}
              >
                <span
                  className={`text-xl font-bold ${
                    showStackedForm ? "text-gray-700" : "text-white"
                  }`}
                >
                  ←
                </span>
              </button>
            )}
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            {currentStep < steps.length - 1 && (
              <button
                onClick={nextStep}
                className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all ${
                  showStackedForm
                    ? "bg-gray-200 hover:bg-gray-300"
                    : "bg-white bg-opacity-20"
                }`}
              >
                <span
                  className={`text-xl font-bold ${
                    showStackedForm ? "text-gray-700" : "text-white"
                  }`}
                >
                  →
                </span>
              </button>
            )}
          </div>

          {/* Intro slides (non-stacked) */}
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
            // Results card layout
            <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
              {/* Main title */}
              <h2 className="text-lg font-semibold text-gray-800 mb-6 max-w-xs">
                {currentStepData.content.title}
              </h2>

              {/* Results card */}
              <div className="bg-white rounded-2xl p-6 shadow-md mb-6 w-full max-w-xs relative">
                {/* Subtitle */}
                <p className="text-sm font-medium text-gray-800 mb-4">
                  {currentStepData.content.subtitle}
                </p>

                {/* Image placeholder */}
                <div className="w-full h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="text-gray-400 text-4xl mb-2">🍽️</div>
                    <p className="text-gray-500 text-sm">Food Image Placeholder</p>
                  </div>
                </div>

                {/* Arrow pointing right */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span className="text-gray-600 text-xl font-bold">→</span>
                  </div>
                </div>
              </div>

              {/* Get Started Button */}
              <button
                onClick={nextStep}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-colors duration-200 max-w-xs"
              >
                Get Started
              </button>
            </div>
          ) : (
            // Stacked form steps
            <div className="flex flex-col w-full flex-1 overflow-y-auto">
              <div className="space-y-4 mb-6">
                {currentStepData.id === 8 || currentStepData.id === 9 ? (
                  // Show only current step for objective and exercise (full screen)
                  renderFormField(currentStepData, true)
                ) : (
                  // Show stacked form for other steps
                  visibleFormSteps.map((step, index) => (
                    <div key={step.id}>
                      {renderFormField(step, index === visibleFormSteps.length - 1)}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          <div className="w-full">
            {currentStepData.hasNextButton && !currentStepData.isResultCard && (
              <button
                onClick={nextStep}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200 mb-4"
              >
                {currentStep === steps.length - 1 ? "Start" : "Next"}
              </button>
            )}
          </div>

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