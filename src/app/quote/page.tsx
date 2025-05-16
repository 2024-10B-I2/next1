import React from 'react';

// Define a simple array of quotes
const quotes = [
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
];

// Server Component for the Quote Generator page
export default function QuotePage() {
  // Pick a random quote on each server render
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const currentQuote = quotes[randomIndex];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
        <p className="text-xl md:text-2xl italic text-gray-800 mb-6">"{currentQuote.text}"</p>
        <p className="text-lg font-semibold text-gray-600">- {currentQuote.author}</p>
      </div>
    </div>
  );
}