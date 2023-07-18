import React from "react";
import Type from "./Home/Type.jsx";
import nurse from "../assets/Img-1.svg";
import SearchIcon from "../assets/search icon.svg";
// import Search from './Home/Searchbar.jsx'

export default function Home() {
  return (
    <div>
      <div className="w-full h-[350px] bg-white flex items-center flex-wrap justify-between">
        <Type />
        <img src={nurse} alt="nurse" />
      </div>
      <div className="w-full h-[376px] align-middle  px-8 py-12 bg-[#CFB9FF]">
        <div className="flex justify-between pb-10">
          <h1 className="flex w-[762px] h-[119.515px] pl-6 pt-8 flex-col justify-center text-black text-[55px] not-italic font-normal font-family: Alatsi;">
            Book Doctors
            <br />
            according to your location
          </h1>
          <button className="text-white text-center text-3xl w-[350px] h-[70px] mt-[76px] rounded-[40px] bg-[#7747b5]">
            EMERGENCY
          </button>
        </div>
        <div className=" px-10">
          <form>
            <input
              type="text"
              placeholder="Condition/Doctor/Procedure                    |                 City/State/Pin-Code                 |                 Insurance Carrier & Plan"
              className="w-[1240px] h-[60px] relative text-xl text-center font-semibold border rounded-[12px_0px_0px_12px] border-solid border-black bg-white"
            />
            <button
              type="submit"
              className=" w-[73px] h-[60px] px-4 py-2 absolute border justify-between rounded-[0px_12px_12px_0px] border-solid border-black bg-[#ffe6e2]"
            >
              <img src={SearchIcon} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
