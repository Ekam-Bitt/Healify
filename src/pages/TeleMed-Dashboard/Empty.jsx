import React from "react";

export default function Empty() {
  return (
    <div>
      <div className="w-full h-[620px] flex flex-col justify-evenly items-center bg-[#FFE6E2]">
        <p className=" text-2xl not-italic font-bold leading-[normal] font-family: Poppins;">
          Why TeleMedicine is the Future ?
        </p>
        <div className=" w-[85%] h-[85%] rounded-xl flex justify-evenly items-center bg-white">
          <div class="grid grid-cols-4 gap-4 bg-red-500">
            <div className="bg-violet-1 rounded-xl flex flex-col justify-evenly items-center">a</div>
          </div>
        </div>
      </div>
    </div>
  );
}
