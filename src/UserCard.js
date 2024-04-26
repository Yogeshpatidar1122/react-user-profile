// UserCard.js
import React, { useState, useEffect } from 'react';

const UserCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => setUserData(data.results[0]));
  }, []);

  return (
    <div className="container mx-auto mt-10 bg-gradient-to-br from-purple-300 to-blue-400 min-h-screen flex items-center justify-center">
      {userData && (
        <div className="max-w-xl bg-white shadow-md rounded-lg overflow-hidden p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">User Profile</h1>
          <div className="flex items-center justify-between">
            <div className="w-1/3 bg-gradient-to-br from-pink-200 to-purple-300 p-4 rounded-lg">
              <img className="rounded-full w-32 h-32" src={userData.picture.large} alt="User" />
            </div>
            <div className="w-2/3 ml-8">
              <h1 className="text-gray-900 font-bold text-xl mb-4">{userData.name.first} {userData.name.last}</h1>
              <p className="text-gray-700 text-base mb-2">
                <span className="font-semibold text-gray-800">Email:</span> {userData.email}
              </p>
              <p className="text-gray-700 text-base">
                <span className="font-semibold text-gray-800">Phone:</span> {userData.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
