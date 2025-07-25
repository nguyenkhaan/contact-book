import React from 'react'
import ReactDOM from 'react-dom'
function Card({ name, address }) {
  return (
    <div className="h-64 relative rounded-md font-sans p-6 bg-white text-base shadow-md transition-shadow hover:shadow-lg">
      <h3 className="font-bold text-2xl mb-1">{name}</h3>
      <span>{address}</span>
      <button className="absolute font-sans bottom-6 right-6 bg-gray-200 py-2 px-6 tracking-wider text-lg rounded-lg cursor-pointer text-black hover:bg-gray-300">
        Edit
      </button>
    </div>
  );
}

export default Card