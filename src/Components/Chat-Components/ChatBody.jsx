import React from "react";
import ReciveItem from "./ReciveItem";
import Send from "./Send";

const ChatBody = () => {
  return (
    <div className="mt-[14rem] py-4 flex flex-col gap-y-7 px-[5%]">
      <div className="">
        <ReciveItem />
      </div>

      <div className=" flex items-center justify-end">
        <Send />
      </div>

      <div className="">
        <ReciveItem />
      </div>

      <div className=" flex items-center justify-end">
        <Send />
      </div>
      <div className="">
        <ReciveItem />
      </div>

      <div className=" flex items-center justify-end">
        <Send />
      </div>
    </div>
  );
};

export default ChatBody;
