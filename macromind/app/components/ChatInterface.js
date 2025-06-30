"use client";

import { useState } from "react";

export default function ChatInterface({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "assistant", content: "Hello! What did you eat today?" },
  ]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    // Add user message to chat history
    const userMessage = { role: "user", content: message };
    setChatHistory([...chatHistory, userMessage]);

    // Clear input field
    setMessage("");

    // Process the message (e.g., send to OpenAI)
    if (onSendMessage) {
      const response = await onSendMessage(message);

      // Add assistant response to chat history
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`${
              msg.role === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "mr-auto bg-gray-200 text-gray-800"
            } rounded-xl p-3 max-w-[80%]`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* Message input */}
      <form
        onSubmit={handleSendMessage}
        className="border-t border-gray-200 p-4"
      >
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me what you ate (e.g., 'I had 2 eggs and toast')"
            className="flex-1 rounded-l-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
