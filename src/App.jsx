import React from "react";
import NavBar from "./layouts/NavBar";
import Home from "./layouts/Home";
import Features from "./layouts/Features";
import Integrations from "./layouts/Integrations";
import HowWorks from "./layouts/HowWorks";
import Pricing from "./layouts/Pricing";
import Reviews from "./layouts/Reviews";


export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Features />
      <Integrations />
      <HowWorks />
      <Pricing />
      <Reviews />

      <div className="h-screen"></div>
      
    </>
  );
}
