import React from "react";
import Navbar from "../Components/Chat-Components/Navbar";
import ChatBody from "../Components/Chat-Components/ChatBody";
import Footer from "../Components/Chat-Components/Footer";
const Chat = () => {
  return (
    <div className="py-4 text-white">
      <Navbar />
      <ChatBody />
      <Footer />
    </div>
  );
};

export default Chat;
