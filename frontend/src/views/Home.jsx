// File: Home.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GiBananaBunch } from 'react-icons/gi';
import { FaGamepad } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 text-yellow-800">
      <header className="text-center py-8">
        <h1 className="text-5xl font-extrabold text-yellow-600">🍌 Banana Game Challenge 🍌</h1>
        <p className="mt-4 text-lg font-semibold">Test your skills and become the top banana!</p>
      </header>

      <main className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg text-center space-y-6">
        <div className="flex items-center justify-center">
          <GiBananaBunch className="text-5xl text-yellow-500 animate-bounce" />
          <p className="ml-2 text-xl font-bold text-yellow-700">Are you ready for the challenge?</p>
        </div>

        <div className="space-y-4">
          <button
            className="flex items-center justify-center w-full px-4 py-2 text-lg font-semibold text-yellow-600 bg-yellow-100 border-2 border-yellow-500 rounded-lg shadow-md hover:bg-yellow-200 transition duration-300"
            onClick={() => navigate('/leaderboard')}
          >
            <BsFillStarFill className="mr-2 text-xl text-yellow-600" /> Leaderboard
          </button>
        </div>
      </main>

      <footer className="text-center mt-8"></footer>
    </div>
  );
};

export default Home;
