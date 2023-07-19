// pages/Home.jsx
import React from "react";
import Type1 from "./Home/Type.jsx";
import SearchBar from "./Home/SearchBar.jsx";
import ServicesSection from "./Home/ServicesSection.jsx";

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="w-full h-[350px] bg-white flex items-center flex-wrap justify-between">
        <Type1 />
      </div>
      <div className="w-full h-[376px] align-middle  px-8 py-12 bg-[#CFB9FF]">
        <div className="flex justify-between pb-10">
          <h1 className="flex w-[762px] h-[119.515px] pl-6 pt-8 flex-col justify-center text-black text-[55px] not-italic font-semibold font-family: Alatsi;">
            Book Doctors
            <br />
            according to your location
          </h1>
          <button className="text-white text-center text-3xl w-[350px] h-[70px] mt-[76px] rounded-[40px] bg-[#7747b5]">
            EMERGENCY
          </button>
        </div>
        <SearchBar />
      </div>

      {/* Section 2 */}
      <ServicesSection />
    </div>
  );
};

export default Home;
