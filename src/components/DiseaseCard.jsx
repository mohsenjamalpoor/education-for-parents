import React from "react";
 
export default function Card({ title, description, icon, color }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border">
      <span className={`text-4xl ${color}`}>{icon}</span>
      <h2 className="text-lg font-bold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  );
}