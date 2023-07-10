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
              src="https://img.freepik.com/free-vector/videocalling-with-therapist-illustrated_23-2148515728.jpg?w=1380&t=st=1688981003~exp=1688981603~hmac=3008ec0b2fc8ef3f2da8501a7cc6bb2d115dea1be386adcc97e973c6e2c88ab1"
              alt=""
              className=" w-[140px] h-[140px] bg-white rounded-full"
            />
            <div className=" w-[85%] h-[50%] bg-white rounded-xl">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Enter Room Code"
              />
              <button className=" bg-red-500" onClick={handleJoinRoom}>Join Video Call</button>
              <a href="https://buy.stripe.com/test_aEU3ddgKlfdYeYMcMN"><button className=" bg-blue-500">Payment</button></a>
            </div>
          </div>
          <div className=" w-[40%] h-[85%] bg-violet-1 rounded-xl flex flex-col justify-evenly items-center">
            <img
              src="https://img.freepik.com/premium-vector/videocalling-with-therapist_23-2148517119.jpg?w=1380"
              alt=""
              className=" w-[140px] h-[140px] bg-white rounded-full"
            />
            <div className=" w-[85%] h-[50%] bg-white rounded-xl">
              <button className=" bg-red-500" onClick={handleJoinChatRoom}>Join Chat Room</button>
              <a href="https://buy.stripe.com/test_5kAdRR51Dc1Mg2QaEG"><button className=" bg-blue-500">Payment</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
