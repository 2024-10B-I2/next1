import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex flex-col items-center justify-center px-4">
            <Link
                href="/"
                className="fixed top-6 left-6 z-50 text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors bg-white/80 px-4 py-2 rounded shadow"
            >
                &larr; Back to Main Page
            </Link>
            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 max-w-xl w-full mt-16">
                <h1 className="text-4xl font-extrabold text-center text-orange-700 mb-6 drop-shadow">
                    Classic Burger
                </h1>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg"
                    alt="Classic Burger"
                    className="w-full h-56 object-cover rounded-xl mb-6 shadow"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ingredients</h2>
                <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
                    <li>1 burger bun</li>
                    <li>150g ground beef patty</li>
                    <li>1 slice cheddar cheese</li>
                    <li>2 slices tomato</li>
                    <li>2 leaves lettuce</li>
                    <li>2 slices red onion</li>
                    <li>Ketchup &amp; mustard</li>
                    <li>Salt &amp; black pepper</li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Instructions</h2>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Season the beef patty with salt and pepper.</li>
                    <li>Grill or fry the patty until cooked to your liking.</li>
                    <li>Place cheese on the patty and let it melt.</li>
                    <li>Toast the burger bun lightly.</li>
                    <li>Assemble: bun, lettuce, tomato, patty with cheese, onion, sauces, top bun.</li>
                    <li>Serve immediately and enjoy!</li>
                </ol>
            </div>
        </div>
    );
}