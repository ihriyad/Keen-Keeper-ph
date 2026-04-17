import React, { useState } from "react";
import CommunicationContext from "./ContextHook";
import Date from "./../date/Date";
import textImage from "./../assets/text.png";
import videoImage from "./../assets/video.png";
import callImage from "./../assets/call.png";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

const Context = ({ children }) => {
  const { day, year, month } = Date();
  const [interaction, setInteraction] = useState([]);

  const handleInteraction = (type, name) => {
    const typeImage =
      type === "text"
        ? textImage
        : type === "call"
          ? callImage
          : type === "video"
            ? videoImage
            : "";
    const newFriend = {
      interactionType: type,
      naming: name,
      date: { day, year, month },
      image: typeImage,
    };
    setInteraction([newFriend, ...interaction]);

    toast.success(`${type.toUpperCase()} with ${name}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const data = {
    interaction,
    handleInteraction,
  };

  return (
    <CommunicationContext.Provider value={data}>
      {children}
    </CommunicationContext.Provider>
  );
};

export default Context;
