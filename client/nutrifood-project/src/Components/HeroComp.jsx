// import React from "react";
// import ImageAcc from "../assets/ImageAcc.png";

// const HeroComp = () => {
//   return (
//     <>
//       <div className="relative w-full h-screen">
//         {/* Background Image */}
//         <img
//           className="w-full h-full object-cover"
//           src={ImageAcc}
//           alt="Accueil"
//         />

//         {/* Overlay Text */}
//         <div className="absolute inset-0 flex flex-col items-left justify-center text-center px-6 sm:px-8 lg:px-16">
//           <h1
//             data-aos="fade-up"
//             data-aos-delay="300"
//             className="text-3xl sm:text-5xl lg:text-7xl font-black font-serif text-black "
//           >
//             Track your calories Easily
//           </h1>
//           <p
//             data-aos="fade-up"
//             data-aos-delay="1000"
//             className="font-bold text-black text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl lg:max-w-4xl mt-4 sm:mt-6"
//           >
//             Avec Aude Mobilité, trouvez des solutions de transport adaptées à
//             vos besoins. Nous nous engageons à vous offrir des options sur
//             mesure pour faciliter vos déplacements et améliorer votre quotidien.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroComp;

import React from "react";
import ImageAcc from "../assets/ImageAcc.png";

const HeroComp = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src={ImageAcc}
          alt="Accueil"
        />

        {/* Overlay Text - Left Aligned */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-8xl sm:text-5xl lg:text-6xl xl:text-8xl font-black text-black leading-tight mb-6"
            >
              Track your calories Easily
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-4xl sm:text-6xl text-black mb-8 max-w-lg"
            >
              Your wellness simplified
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="cursor-pointer bg-[#2C3E50] hover:bg-gray-700 text-[#27AE60]  font-semibold px-10 py-6 rounded-lg text-lg transition-colors duration-200 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComp;