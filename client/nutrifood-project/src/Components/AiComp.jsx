import React from "react";
import AiImage1 from "../assets/AiImage1.png";
import AiImage2 from "../assets/AiImage2.png";
import AiImage3 from "../assets/AiImage3.png";


const AiComp = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16 leading-relaxed">
          Une application révolutionnaire pour manger mieux simplement en prenant une photo !
        </h2>

        {/* Three Progressive Images */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-16">
          
          {/* Step 1 - Original Food Photo */}
          <div className="flex flex-col items-center">
            <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={AiImage1}
                alt="Food photo step 1"
              />
            </div>
          </div>

          {/* Arrow */}
          <div className="text-gray-400 text-4xl lg:rotate-0 rotate-90">
            →
          </div>

          {/* Step 2 - Scanning Process */}
          <div className="flex flex-col items-center">
            <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={AiImage2}
                alt="Food photo step 2"
              />
            </div>
          </div>

          {/* Arrow */}
          <div className="text-gray-400 text-4xl lg:rotate-0 rotate-90">
            →
          </div>

          {/* Step 3 - Results with Labels */}
          <div className="flex flex-col items-center">
            <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={AiImage3}
                alt="Food photo step 3"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          Foodvisor est la première application de suivi alimentaire capable, à partir d'une simple photo de votre assiette, de reconnaître les aliments, d'en estimer les quantités et de fournir un bilan nutritionnel en quelques secondes.
        </p>

        {/* Start Button */}
        <div className="flex justify-center">
          <button className="bg-slate-700 hover:bg-slate-600 text-white text-xl font-semibold px-12 py-4 rounded-full transition-colors duration-200 shadow-lg">
            <span className="text-green-400">Start</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiComp;