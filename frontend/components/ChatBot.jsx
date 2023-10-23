"use client";


import { useState, useEffect } from "react";
import Chat from '../public/chat.png';
import Image from "next/image";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [toggleChat, setToggleChat] = useState(false);

  return (
    <div className="bottom-16 right-16 z-20 fixed">
      <Image 
        src={Chat}
        height={60}
        width={60}
      />
    </div>
  );
}

export default ChatBot;
