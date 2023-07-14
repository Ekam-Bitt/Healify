import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientProfile = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  const handleJoinChatRoom = useCallback(() => {
    navigate(`/ChatApp`);
  }, [navigate]);

  return (
    <div>
      <div className="w-full h-[620px] flex flex-col justify-evenly items-center bg-[#FFE6E2]">
        <p className=" text-2xl not-italic font-bold leading-[normal] font-family: Poppins;">
          Book Doctor
        </p>
        <div className=" w-[85%] h-[85%] rounded-xl flex justify-evenly items-center">
          <div className=" w-[40%] h-[85%] bg-violet-1 rounded-xl flex flex-col justify-evenly items-center">
            <img
              src="https://img.freepik.com/free-vector/videocalling-with-therapist-illustrated_23-2148515728.jpg?w=996&t=st=1689345994~exp=1689346594~hmac=c07cb23896b7c3d08df3658c3f20a3279e34b34e5de445117b035a0ddbdec0c3"
              alt=""
              className=" w-[140px] h-[140px] bg-white rounded-full"
            />
            <div className=" w-[85%] h-[50%] bg-white rounded-xl flex flex-col justify-evenly items-center">
              <a href="https://buy.stripe.com/test_aEU3ddgKlfdYeYMcMN">
                <button className=" px-4 py-2 text-xl text-white bg-blue-500 rounded-xl border-none transition ease-in-out">
                  Make Payment
                </button>
              </a>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Enter Room Code"
                className="w-[85%] px-4 py-2 text-xl text-gray-600 bg-white rounded-xl border-[1px] transition ease-in-out"
              />
              <button
                className="w-[85%] px-4 py-2 text-xl text-white bg-blue-400 rounded-xl border-none transition ease-in-out"
                onClick={handleJoinRoom}
              >
                Join Video Call
              </button>
            </div>
          </div>
          <div className=" w-[40%] h-[85%] bg-violet-1 rounded-xl flex flex-col justify-evenly items-center">
            <img
              src="https://img.freepik.com/premium-vector/videocalling-with-therapist_23-2148517119.jpg?w=1380"
              alt=""
              className=" w-[140px] h-[140px] bg-white rounded-full"
            />
            <div className=" w-[85%] h-[50%] bg-white rounded-xl flex flex-col justify-evenly items-center">
              {/* <button className=" bg-red-500" onClick={handleJoinChatRoom}>
                Join Chat Room
              </button>
              <a href="https://buy.stripe.com/test_5kAdRR51Dc1Mg2QaEG">
                <button className=" bg-blue-500">Payment</button>
              </a> */}
              <a href="https://buy.stripe.com/test_5kAdRR51Dc1Mg2QaEG">
                <button className=" px-4 py-2 text-xl text-white bg-blue-500 rounded-xl border-none transition ease-in-out">
                  Make Payment
                </button>
              </a>
              {/* <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Enter Room Code"
                className="w-[85%] px-4 py-2 text-xl text-gray-600 bg-white rounded-xl border-[1px] transition ease-in-out"
              /> */}
              <button
                className="w-[85%] px-4 py-2 text-xl text-white bg-blue-400 rounded-xl border-none transition ease-in-out"
                onClick={handleJoinChatRoom}
              >
                Join Chat Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
