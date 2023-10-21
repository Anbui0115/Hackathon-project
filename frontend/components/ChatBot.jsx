"use client";
// "use server"
import { OpenAIApi } from "openai";
import { useState, useEffect } from "react";

const openai = new OpenAIApi({
  key: process.env.OPENAI_API_KEY
})


const ChatBot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  return (
    <div>
      
    </div>
  )
}

export default ChatBot