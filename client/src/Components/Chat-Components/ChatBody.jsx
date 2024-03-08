import React, { useState } from 'react';

const ChatBody = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { user: 'John', content: 'Hey, how are you?' },
    { user: 'Jane', content: 'I\'m good, thanks! How about you?' },
    { user: 'John', content: 'I\'m doing great!' },
    { user: 'John', content: 'Did you watch the game last night?' },
    { user: 'Jane', content: 'Yes, it was amazing!' },
  ]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setMessages([...messages, { user: 'You', content: message }]);
      setMessage('');
    }
  };

  return (
    <div className="chat-body h-full overflow-y-auto bg-gray-100 p-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.user === 'You' ? 'justify-end' : 'justify-start'} mb-4`}
        >
          <div className={`max-w-[70%] rounded-lg shadow-md p-3 ${message.user === 'You' ? 'bg-blue-500 text-white self-end' : 'bg-white text-gray-800 self-start'}`}>
            {message.content}
          </div>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-md mr-2 text-gray-600 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button type="submit" className="bg-[#d44646] text-white px-4 py-2 rounded-md hover:bg-[#ffb3b3] focus:outline-none focus:ring focus:border-blue-300">Send</button>
      </form>
    </div>
  );
};

export default ChatBody;
