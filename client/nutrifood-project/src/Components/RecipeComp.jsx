// import React from "react";
import ReceipeImage1 from "../assets/ReceipeImage1.png"; // Add your first recipe image here
import ReceipeImage2 from "../assets/ReceipeImage2.png"; // Add your second recipe image here
import ReceipeImage3 from "../assets/ReceipeImage3.png"; // Add your third recipe image here
import ReceipeImage4 from "../assets/ReceipeImage4.png"; // Add your
// const RecipeInspirationSection = () => {
//   return (
//     <div className="w-full bg-white py-16 px-6 sm:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
        
//         <div className="flex flex-col lg:flex-row items-center gap-12">
          
//           {/* Left Side - Recipe Images Grid */}
//           <div className="flex-1 grid grid-cols-2 gap-4 max-w-2xl">
            
//             {/* Top Left - Ragout de viande */}
//             <div className="flex flex-col items-center">
//               <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg mb-3">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ReceipeImage1} // Add your first recipe image here
//                   alt="Ragout de viande"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 Ragoût de viande, pommes de<br />
//                 terre & grenade
//               </p>
//             </div>

//             {/* Top Right - Repas poivron rouge */}
//             <div className="flex flex-col items-center">
//               <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg mb-3">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ReceipeImage2} // Add your second recipe image here
//                   alt="Repas poivron rouge"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 repas poivron rouge & tomates
//               </p>
//             </div>

//             {/* Bottom Left - Salade César */}
//             <div className="flex flex-col items-center">
//               <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg mb-3">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ReceipeImage3} // Add your third recipe image here
//                   alt="Salade César"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 Salade César au poulet,<br />
//                 tomates & parmesan
//               </p>
//             </div>

//             {/* Bottom Right - Repas aux oignons verts */}
//             <div className="flex flex-col items-center">
//               <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg mb-3">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ReceipeImage4} // Add your fourth recipe image here
//                   alt="Repas aux oignons verts"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 repas aux oignons verts &<br />
//                 poivre
//               </p>
//             </div>

//           </div>

//           {/* Right Side - Text Content */}
//           <div className="flex-1 max-w-lg">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
//               Trouvez de l'inspiration parmi des centaines de recettes
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               Découvrez des recettes équilibrées et faciles à réaliser en moins de 30 minutes ! Toutes les recettes sont validées par des diététiciens.
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeInspirationSection;

import React from "react";

// const RecipeInspirationSection = () => {
//   return (
//     <div className="w-full bg-white py-16 px-6 sm:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
        
//         <div className="flex flex-col lg:flex-row items-center gap-12">
          
//           {/* Left Side - Recipe Images Grid */}
//           <div className="flex-1 grid grid-cols-2 gap-4 max-w-2xl">
            
//             {/* Top Left - Ragout de viande */}
//             <div className="flex flex-col items-center">
//               <div className="w-[350px] h-[230px] rounded-tl-3xl rounded-tr-3xl overflow-hidden shadow-lg mb-3">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ReceipeImage1} // Add your first recipe image here
//                   alt="Ragout de viande"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 Ragoût de viande, pommes de<br />
//                 terre & grenade
//               </p>
//             </div>

//             {/* Top Right - Repas poivron rouge */}
//             <div className="flex flex-col items-center">
//               <div className="w-[350px] h-[230px] rounded-tl-3xl rounded-tr-3xl overflow-hidden shadow-lg mb-3">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ReceipeImage2} // Add your second recipe image here
//                   alt="Repas poivron rouge"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 repas poivron rouge & tomates
//               </p>
//             </div>

//             {/* Bottom Left - Salade César */}
//             <div className="flex flex-col items-center">
//               <div className="w-[350px] h-[230px] rounded-tl-3xl rounded-tr-3xl overflow-hidden shadow-lg mb-3">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ReceipeImage3} // Add your third recipe image here
//                   alt="Salade César"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 Salade César au poulet,<br />
//                 tomates & parmesan
//               </p>
//             </div>

//             {/* Bottom Right - Repas aux oignons verts */}
//             <div className="flex flex-col items-center">
//               <div className="w-[350px] h-[230px] rounded-tl-3xl rounded-tr-3xl overflow-hidden shadow-lg mb-3">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ReceipeImage4} // Add your fourth recipe image here
//                   alt="Repas aux oignons verts"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 repas aux oignons verts &<br />
//                 poivre
//               </p>
//             </div>

//           </div>

//           {/* Right Side - Text Content */}
//           <div className="flex-1 max-w-lg">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
//               Trouvez de l'inspiration parmi des centaines de recettes
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               Découvrez des recettes équilibrées et faciles à réaliser en moins de 30 minutes ! Toutes les recettes sont validées par des diététiciens.
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeInspirationSection;


// const RecipeInspirationSection = () => {
//   return (
//     <div className="w-full bg-white py-16 px-6 sm:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
        
//         <div className="flex flex-col lg:flex-row items-center gap-12">
          
//           {/* Left Side - Recipe Images Grid */}
//           <div className="flex-1 grid grid-cols-2 gap-8 max-w-2xl">
            
//             {/* Top Left - Ragout de viande */}
//             <div className="flex flex-col items-center">
//               <div className="w-[350px] h-[230px] rounded-2xl overflow-hidden shadow-lg mb-3 ">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ReceipeImage1} // Add your first recipe image here
//                   alt="Ragout de viande"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 Ragoût de viande, pommes de<br />
//                 terre & grenade
//               </p>
//             </div>

//             {/* Top Right - Repas poivron rouge */}
//             <div className="flex flex-col items-center">
//               <div className="w-[350px] h-[230px] rounded-2xl overflow-hidden shadow-lg mb-3">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ReceipeImage2} // Add your second recipe image here
//                   alt="Repas poivron rouge"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 repas poivron rouge & tomates
//               </p>
//             </div>

//             {/* Bottom Left - Salade César */}
//             <div className="flex flex-col items-center">
//               <div className="w-[350px] h-[230px] rounded-2xl overflow-hidden shadow-lg mb-3">
//                 <img
//                   className="w-full h-full object-cover"
//                   src="" // Add your third recipe image here
//                   alt="Salade César"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 Salade César au poulet,<br />
//                 tomates & parmesan
//               </p>
//             </div>

//             {/* Bottom Right - Repas aux oignons verts */}
//             <div className="flex flex-col items-center">
//               <div className="w-[350px] h-[230px] rounded-2xl overflow-hidden shadow-lg mb-3">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={ReceipeImage4} // Add your fourth recipe image here
//                   alt="Repas aux oignons verts"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 text-center font-medium">
//                 repas aux oignons verts &<br />
//                 poivre
//               </p>
//             </div>

//           </div>

//           {/* Right Side - Text Content */}
//           <div className="flex-1 max-w-lg">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
//               Trouvez de l'inspiration parmi des centaines de recettes
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               Découvrez des recettes équilibrées et faciles à réaliser en moins de 30 minutes ! Toutes les recettes sont validées par des diététiciens.
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeInspirationSection;


const RecipeInspirationSection = () => {
  return (
    <div className="w-full bg-white py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Recipe Images Grid */}
          <div className="flex-1 grid grid-cols-2 gap-16 max-w-4xl">
            
            {/* Top Left - Ragout de viande */}
            <div className="flex flex-col items-center">
              <div className="w-[350px] h-[230px] rounded-tl-3xl rounded-tr-3xl overflow-hidden shadow-lg mb-3">
                <img
                  className="w-full h-full object-cover"
                  src={ReceipeImage1} // Add your first recipe image here
                  alt="Ragout de viande"
                />
              </div>
              <p className="text-sm text-gray-700 text-center font-medium">
                Ragoût de viande, pommes de<br />
                terre & grenade
              </p>
            </div>

            {/* Top Right - Repas poivron rouge */}
            <div className="flex flex-col items-center">
              <div className="w-[350px] h-[230px] rounded-tl-3xl rounded-tr-3xl overflow-hidden shadow-lg mb-3">
                <img
                  className="w-full h-full object-cover"
                  src={ReceipeImage2} // Add your second recipe image here
                  alt="Repas poivron rouge"
                />
              </div>
              <p className="text-sm text-gray-700 text-center font-medium">
                repas poivron rouge & tomates
              </p>
            </div>

            {/* Bottom Left - Salade César */}
            <div className="flex flex-col items-center">
              <div className="w-[350px] h-[230px] rounded-tl-3xl rounded-tr-3xl overflow-hidden shadow-lg mb-3">
                <img
                  className="w-full h-full object-cover"
                  src={ReceipeImage3} // Add your third recipe image here
                  alt="Salade César"
                />
              </div>
              <p className="text-sm text-gray-700 text-center font-medium">
                Salade César au poulet,<br />
                tomates & parmesan
              </p>
            </div>

            {/* Bottom Right - Repas aux oignons verts */}
            <div className="flex flex-col items-center">
              <div className="w-[350px] h-[230px] rounded-tl-3xl rounded-tr-3xl overflow-hidden shadow-lg mb-3">
                <img
                  className="w-full h-full object-cover"
                  src={ReceipeImage4} // Add your fourth recipe image here
                  alt="Repas aux oignons verts"
                />
              </div>
              <p className="text-sm text-gray-700 text-center font-medium">
                repas aux oignons verts &<br />
                poivre
              </p>
            </div>

          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Trouvez de l'inspiration parmi des centaines de recettes
            </h2>
            <p className="text-center text-gray-600 w-[14rem] leading-relaxed">
              Découvrez des recettes équilibrées et faciles à réaliser en moins de 30 minutes ! Toutes les recettes sont validées par des diététiciens.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RecipeInspirationSection;