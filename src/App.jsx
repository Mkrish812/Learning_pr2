import React from "react";
import NavBar from "./layouts/NavBar";
import Home from "./layouts/Home";
import Features from "./layouts/Features";
import Integrations from "./layouts/Integrations";
import HowWorks from "./layouts/HowWorks";
import Pricing from "./layouts/Pricing";
import Reviews from "./layouts/Reviews";
import Faq from "./layouts/Faq";
import Blog from "./layouts/Blog";




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
      <Faq />
      <Blog />

      <div className="h-screen"></div>
      
    </>
  );
}
