import ProImage1 from "../assets/ProImage1.png"; // Add your first recipe image here
import ProImage2 from "../assets/ProImage2.png"; // Add your second recipe image here
import ProImage3 from "../assets/ProImage3.png"; // Add your third recipe image here
import ProImage4 from "../assets/ProImage4.png"; // Add your fourth recipe image

// const ProgrammeComp = () => {
//   return (
//     <div className="w-full bg-gray-100 py-16 px-6 sm:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
        
//         <div className="flex flex-col lg:flex-row items-center gap-12">
          
//           {/* Left Side - Main Text */}
//           <div className="flex-1 max-w-lg">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
//               Choisissez le programme adapté à vos besoins
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               Trouvez le programme alimentaire qui vous convient et obtenez des résultats durables. Choisissez parmi plus de 15 options !
//             </p>
//           </div>

//           {/* Right Side - Program Options Grid */}
//           <div className="flex-1 grid grid-cols-2 gap-6 max-w-2xl">
            
//             {/* Top Left - Régime Keto */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
//               <div className="w-24 h-24 rounded-full mb-4 overflow-hidden">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ProImage1} // Add your Keto program image here
//                   alt="Régime Keto"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">
//                 Régime Keto
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Populaire pour<br />
//                 perdre du gras
//               </p>
//             </div>

//             {/* Top Right - Planning de repas */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
//               <div className="w-24 h-24 rounded-full mb-4 overflow-hidden">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ProImage2} // Add your Meal Planning image here
//                   alt="Planning de repas"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">
//                 Planning de repas
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Populaire pour<br />
//                 les foodies
//               </p>
//             </div>

//             {/* Bottom Left - Prise de masse */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
//               <div className="w-24 h-24 rounded-full mb-4 overflow-hidden">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ProImage3} // Add your Weight Gain image here
//                   alt="Prise de masse"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">
//                 Prise de masse
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Populaire pour<br />
//                 les sportifs
//               </p>
//             </div>

//             {/* Bottom Right - Low Carb */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
//               <div className="w-24 h-24 rounded-full mb-4 overflow-hidden">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ProImage4} // Add your Low Carb image here
//                   alt="Low Carb"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">
//                 Low Carb
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Populaire pour<br />
//                 la perte de poids
//               </p>
//             </div>

//           </div>

//         </div>

//         {/* Start Button */}
//         <div className="flex justify-center mt-12">
//           <button className="bg-slate-700 hover:bg-slate-600 text-white text-xl font-semibold px-12 py-4 rounded-full transition-colors duration-200 shadow-lg">
//             <span className="text-green-400">Start</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgrammeComp;

import React from "react";

const ProgramComp = () => {
  return (
    <div className="w-full bg-gray-100 py-8 px-6 sm:px-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Main Text */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Choisissez le programme adapté à vos besoins
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trouvez le programme alimentaire qui vous convient et obtenez des résultats durables. Choisissez parmi plus de 15 options !
            </p>
          </div>

          {/* Right Side - Program Options Grid */}
          <div className="flex-1 grid grid-cols-2 gap-6 max-w-2xl">
            
            {/* Top Left - Régime Keto */}
            <div className="bg-white rounded-tl-3xl rounded-tr-3xl p-6 shadow-lg flex items-center gap-4">
              <div className="flex-1">
                <h3 className=" text-4xl font-bold text-gray-900 mb-2">
                  Régime Keto
                </h3>
                <p className="text-sm text-gray-600">
                  Populaire pour<br />
                  perdre du gras
                </p> 
              </div>
              <div className=" w-32 h-32  overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={ProImage1} // Add your Keto program image here
                  alt="Régime Keto"
                />
              </div>
            </div>

            {/* Top Right - Planning de repas */}
            <div className="bg-white rounded-tl-3xl rounded-tr-3xl p-6 shadow-lg flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  Planning de repas
                </h3>
                <p className="text-sm text-gray-600">
                  Populaire pour<br />
                  les foodies
                </p>
              </div>
              <div className="w-32 h-32 overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={ProImage2} // Add your Meal Planning image here
                  alt="Planning de repas"
                />
              </div>
            </div>

            {/* Bottom Left - Prise de masse */}
            <div className="bg-white rounded-tl-3xl rounded-tr-3xl p-6 shadow-lg flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Prise de masse
                </h3>
                <p className="text-sm text-gray-600">
                  Populaire pour<br />
                  les sportifs
                </p>
              </div>
              <div className="w-32 h-32 overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={ProImage3} // Add your Weight Gain image here
                  alt="Prise de masse"
                />
              </div>
            </div>

            {/* Bottom Right - Low Carb */}
            <div className="bg-white rounded-tl-3xl rounded-tr-3xl p-6 shadow-lg flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  Low Carb
                </h3>
                <p className="text-sm text-gray-600">
                  Populaire pour<br />
                  la perte de poids
                </p>
              </div>
              <div className="w-32 h-32 overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={ProImage4} // Add your Low Carb image here
                  alt="Low Carb"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Start Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-slate-700 hover:bg-slate-600 text-white text-xl font-semibold px-12 py-4 rounded-full transition-colors duration-200 shadow-lg">
            <span className="text-green-400">Start</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramComp;