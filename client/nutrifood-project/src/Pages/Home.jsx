import React from 'react';
// import Navbar from '../Components/Navbar';
import HeroComp from '../Components/HeroComp.jsx';
import AiComp from '../Components/AiComp.jsx';
import RecipeComp from '../Components/RecipeComp.jsx';
import ProgrammeComp from '../Components/ProgrammeComp.jsx';
import Footer from '../Components/Footer';
import SignUpComp from '../Components/SignUpComp.jsx'
import Navbar from '../Components/Navbar.jsx';



function Home() {
  return (
    <>
      <Navbar />
      <HeroComp />
      <AiComp />
      <RecipeComp />
      <ProgrammeComp />
      <Footer />
    </>
  );
}

export default Home