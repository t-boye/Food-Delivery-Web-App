import React from 'react';

const ChatNavbar = () => {
  const admin = {
    name: 'Admin',
    online: true // Set to false if admin is offline
  };

  return (
    <div className="flex justify-between items-center bg-[ #857a7a] p-8 mt-8">
      <div className="text-white pt-4 text-lg font-bold">MyFoodApp Chat Support</div>
      <div className="flex items-center">
        <div className="relative">
          {admin.online && (
            <div className="absolute right-0 bottom-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
          <div className="text-white ml-2">
            {admin.online}
          </div>
          <img
            src="/admin-profile-picture.jpg" // Replace with actual profile picture URL
            alt="Admin Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatNavbar;
