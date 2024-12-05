import React from 'react';
import { GiBananaBunch } from 'react-icons/gi';
import { FaGamepad, FaTrophy, FaRocket } from 'react-icons/fa';

const Description = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-yellow-100 text-yellow-800 py-10 px-4">
     
      <div className="text-center mb-8">
        <GiBananaBunch className="text-6xl text-yellow-600 mx-auto animate-bounce" />
        <h1 className="text-4xl font-bold text-yellow-700 mt-4">Banana Game Challenge</h1>
        <p className="text-gray-600 mt-2">Sharpen your math skills and take on the challenge! </p>
      </div>

      
      <div className="max-w-2xl bg-white shadow-md rounded-lg overflow-hidden p-6 text-center">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the <span className="text-yellow-600 font-bold">Banana Game Challenge</span>! Test your math skills with this exciting game packed with twists and challenges.
        </p>

        <div className="flex flex-col items-center space-y-6 mt-6">
         
          <div className="flex items-center space-x-3">
            <FaGamepad className="text-3xl text-yellow-500" />
            <p className="text-yellow-700 font-medium text-xl">Hidden Equations</p>
          </div>
          <p className="text-gray-700">
            You'll be presented with mathematical equations, and some numbers will be cleverly hidden within tomatoes.
          </p>

        
          <div className="flex items-center space-x-3">
            <FaTrophy className="text-3xl text-yellow-500" />
            <p className="text-yellow-700 font-medium text-xl">Find the Numbers</p>
          </div>
          <p className="text-gray-700">
            Identify the hidden numbers within the tomatoes. You have 30 seconds to solve each equation and find the elusive numbers.
          </p>

          
          <div className="flex items-center space-x-3">
            <FaRocket className="text-3xl text-yellow-500" />
            <p className="text-yellow-700 font-medium text-xl">Hearts System</p>
          </div>
          <p className="text-gray-700">
            You start with 3 hearts. Lose a heart if you fail to answer within the time limit or provide an incorrect answer. Losing all hearts ends the challenge!
          </p>

        
          <div className="flex items-center space-x-3">
            <FaTrophy className="text-3xl text-yellow-500" />
            <p className="text-yellow-700 font-medium text-xl">Leaderboard</p>
          </div>
          <p className="text-gray-700">
            Successfully complete challenges to earn a spot on the leaderboard. Compete with others and showcase your tomato-solving skills.
          </p>

          <div className="flex items-center space-x-3">
            <FaRocket className="text-3xl text-yellow-500" />
            <p className="text-yellow-700 font-medium text-xl">The Challenge</p>
          </div>
          <p className="text-gray-700">
            Can you locate the hidden numbers within the given time? Sharpen your mathematical skills and embrace the Banana Game Challenge.
          </p>

          <div className="flex items-center space-x-3">
            <FaRocket className="text-3xl text-yellow-500" />
            <p className="text-yellow-700 font-medium text-xl">Logout</p>
          </div>
          <p className="text-gray-700">
            You can log out anytime using the "Logout" option in the navigation menu.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700 font-medium">
          Are you ready to embrace the challenge and become the ultimate math master? 
        </p>
      </div>
    </div>
  );
};

export default Description;
