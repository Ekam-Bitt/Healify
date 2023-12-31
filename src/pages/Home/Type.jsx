// components/Home/Type.jsx
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import nurse from "../../assets/Img-1.svg";

const Type = () => {
  const [word] = useTypewriter({
    words: [" Save Your Life", "Save Your Money", "Save Your Time"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    cursorStyle: "|",
  });
  const [heading] = useTypewriter({
    words: ["At Healify we can"],
  });
  return (
    <div className="flex items-center flex-wrap justify-between w-full">
      {/* Your content for Type component goes here */}
      <div className=" w-[55%] h-[156px] ml-16 mb-20">
        <h1 className=" text-6xl text-[#2C0472]">{heading}</h1>
        <span className=" text-8xl font-extrabold text-[#2C0472]">{word}</span>
      </div>
      <img src={nurse} alt="nurse" />
    </div>
  );
};

export default Type;
