import React from "react";
import Type from "./Home/Type.jsx";
import nurse from "../assets/Img-1.svg";
import BgImg from "../assets/Vector.svg";
import BgImg2 from "../assets/Doctors-bro 1.svg";
import Arrow from "../assets/Arrow 1.svg";
import SearchIcon from "../assets/search icon.svg";
import { Link, useNavigate } from "react-router-dom";
// import Search from './Home/Searchbar.jsx'

export default function Home() {
  return (
    <div>

      {/* Section 1 */}

      <div className="w-full h-[350px] bg-white flex items-center flex-wrap justify-between">
        <Type />
        <img src={nurse} alt="nurse" />
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

      {/* Section 2 */}

      <div label='Section-2' className="bg-white w-full h-[730px] relative">
        <img src={BgImg} alt="Background Image" className="w-full h-full p-12 object-center absolute top-0 left-0" />

        {/* content over the background image */}
        <div className="absolute h-full w-full px-12 py-14 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className=" text-black text-[55px] font-semibold">Services we Provide</h2>
          <div className="py-20">
            <div className="flex w-full justify-around">
              <div className="w-[224.318px] h-[272.701px] rounded-3xl px-10 py-4 flex flex-col justify-around bg-[#FFE6E2] drop-shadow-md hover:drop-shadow-lg">
                <h3 className="text-center text-[#5717A9] text-xl font-semibold">Mental Health</h3>
                <ul className=" list-disc">
                  <li>Anxiety</li>
                  <li>Depression</li>
                  <li>Stress</li>
                  <li>Grief & Loss</li>
                  <li>Postpartum</li>
                  <li>Mood Disorders</li>
                  <li>PTSD</li>
                </ul>
              </div>
              <div className="w-[224.318px] h-[272.701px] rounded-3xl px-10 py-4 flex flex-col justify-around bg-[#FFE6E2] drop-shadow-md hover:drop-shadow-lg">
                <h3 className="text-center text-[#5717A9] text-xl font-semibold">Mental Health</h3>
                <ul className=" list-disc">
                  <li>Anxiety</li>
                  <li>Depression</li>
                  <li>Stress</li>
                  <li>Grief & Loss</li>
                  <li>Postpartum</li>
                  <li>Mood Disorders</li>
                  <li>PTSD</li>
                </ul>
              </div>
              <div className="w-[224.318px] h-[272.701px] rounded-3xl px-10 py-4 flex flex-col justify-around bg-[#FFE6E2] drop-shadow-md hover:drop-shadow-lg">
                <h3 className="text-center text-[#5717A9] text-xl font-semibold">Mental Health</h3>
                <ul className=" list-disc">
                  <li>Anxiety</li>
                  <li>Depression</li>
                  <li>Stress</li>
                  <li>Grief & Loss</li>
                  <li>Postpartum</li>
                  <li>Mood Disorders</li>
                  <li>PTSD</li>
                </ul>
              </div>
              <div className="w-[224.318px] h-[272.701px] rounded-3xl px-10 py-4 flex flex-col justify-around bg-[#FFE6E2] drop-shadow-md hover:drop-shadow-lg">
                <h3 className="text-center text-[#5717A9] text-xl font-semibold">Mental Health</h3>
                <ul className=" list-disc">
                  <li>Anxiety</li>
                  <li>Depression</li>
                  <li>Stress</li>
                  <li>Grief & Loss</li>
                  <li>Postpartum</li>
                  <li>Mood Disorders</li>
                  <li>PTSD</li>
                </ul>
              </div>
              <div className="w-[224.318px] h-[272.701px] rounded-3xl px-10 py-4 flex flex-col justify-around bg-[#FFE6E2] drop-shadow-md hover:drop-shadow-lg">
                <h3 className="text-center text-[#5717A9] text-xl font-semibold">Mental Health</h3>
                <ul className=" list-disc">
                  <li>Anxiety</li>
                  <li>Depression</li>
                  <li>Stress</li>
                  <li>Grief & Loss</li>
                  <li>Postpartum</li>
                  <li>Mood Disorders</li>
                  <li>PTSD</li>
                </ul>
              </div>
            </div>
            
          </div>
          <div className="flex justify-end translate-y-20 -translate-x-3">
            <Link to="/TeleMedicine" className="text-xl text-[#5717A9] flex items-center justify-between w-[350px]">Consult a Doctor right now<img src={Arrow} alt="Arrow"/></Link>
          </div>
          
        </div>
        <div className="absolute h-[330px] w-[330px] translate-y-[400px] translate-x-[110px]">
          <img src={BgImg2} alt="Doctors Yellow" />
        </div>
      </div>
    </div>
  );
}
