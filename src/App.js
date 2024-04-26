// src/App.js
import React from 'react';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className=" text-3xl font-bold text-center mt-10">
          User Profile Card
        </h1>
        <UserCard />
      </header>
    </div>
  );
}

export default App;
