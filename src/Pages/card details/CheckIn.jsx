import React, { useContext } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";
import { GoDeviceCameraVideo } from "react-icons/go";
import CommunicationContext from "../../context/ContextHook";

const CheckIn = ({ newFriend }) => {
  const { handleInteraction } = useContext(CommunicationContext);

  const { name } = newFriend;
  return (
    <div className="bg-gray-50 p-6 space-y-4 rounded-md">
      <h1 className="text-bold">Quick Check-In</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 rounded-md w-11/12 lg:w-12/12 mx-auto">
        <button
          onClick={() => handleInteraction("call", name)}
          className="flex justify-center items-center flex-col gap-4 p-4 rounded-md hover:bg-gray-200  border border-blue-400 hover:border-none"
        >
          <FiPhoneCall /> <p>Call</p>
        </button>
        <button
          onClick={() => handleInteraction("text", name)}
          className="flex justify-center items-center flex-col gap-4 p-4 rounded-md hover:bg-gray-200 border border-blue-400 hover:border-none"
        >
          <RiMessage2Line /> <p>Text</p>
        </button>
        <button
          onClick={() => handleInteraction("video", newFriend.name)}
          className="flex justify-center items-center flex-col gap-4 p-4 rounded-md hover:bg-gray-200 border border-blue-400 hover:border-none"
        >
          <GoDeviceCameraVideo /> <p>Video</p>
        </button>
      </div>
    </div>
  );
};

export default CheckIn;
