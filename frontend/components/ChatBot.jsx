"use client";


import { useState, useEffect } from "react";
import Chat from '../public/chat.png';
import Image from "next/image";

const ChatBot = () => {
  const [messages, setMessages] = useState([{ type: 'chatbot', content: 'Hi there! How can I help you today? ' }]);
  const [input, setInput] = useState("");
  const [toggleChat, setToggleChat] = useState(true);

  const handleSendMessage = (e) => {
    e.preventDefault()

    if (input.trim() !== "") {
      setMessages([...messages, { type: 'user', content: input.trim() }]);
      setInput("");
    }
  }

  return (
    <div className="bottom-16 right-16 z-20 fixed flex items-end">
      
      {/* Chat Screen */}
      {toggleChat && (
        <div className="relative left-24 bottom-24 z-30 bg-white p-4 rounded-md shadow-lg border w-[600px] h-[auto] mr-2 overflow-y-auto">

          {/* Chat Header */}
          <div className="my-2 text-xl font-semibold">Chat with PriyadaGPT</div>
          
          <hr className="border-gray-300 mx-[-16px]" /> 

          {/* ChatSubHeader Tips & Tricks */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="text-lg font-semibold underline">Things I can do for you</div>
            <div className="">Ask me about the studio or the teachers</div>
            <div>Ask me about my current dance class bookings</div>
            <div>Ask me any questions you might have about the dance studio</div>
          </div>
          
          <hr className="border-gray-300 mx-[-16px] my-4" /> 

          {/* Chat messages will go here */}
          <div className="my-4 flex flex-col">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`
                  my-2 p-2 rounded 
                  ${message.type === 'user' 
                    ? 'bg-cyan-600 text-white self-end font-semibold' 
                    : 'bg-gray-200 self-start font-semibold'}
                  max-w-2/3
                `}
              >
                {message.content}
              </div>
            ))}
          </div>

          
         {/* Input area */}
         <div className="mt-2">
            <form onSubmit={handleSendMessage}>
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Type your message..."
              />
              <button type="submit" className="hidden">Send</button>
            </form>
          </div>
        </div>
      )}

      {/* Chat Icon */}
      <div onClick={() => setToggleChat(!toggleChat)}>
        <Image 
          src={Chat}
          height={60}
          width={60}
        />
      </div>
      
    </div>
  );
}

export default ChatBot;

