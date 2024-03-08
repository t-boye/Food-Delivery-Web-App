import React from "react";
import ChatBody from "../Components/Chat-Components/ChatBody";
import ChatNavbar from "../Components/Chat-Components/ChatNavbar";

const Chat = () => {
  return (
    <div className="py-4 text-white">
      <ChatNavbar />
      <ChatBody />
    </div>
  );
};

export default Chat;
