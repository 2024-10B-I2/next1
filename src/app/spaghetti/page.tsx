import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-neutral-900 dark:to-neutral-800 flex flex-col items-center justify-center px-4 transition-colors duration-300">
            <Link
                href="/"
                className="fixed top-6 left-6 z-50 text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400 font-semibold text-lg transition-colors bg-white/80 dark:bg-neutral-900/80 px-4 py-2 rounded shadow"
            >
                &larr; Back to Main Page
            </Link>
            <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-xl rounded-2xl p-8 max-w-xl w-full mt-16 transition-colors duration-300">
                <h1 className="text-4xl font-extrabold text-center text-orange-700 dark:text-orange-300 mb-6 drop-shadow">
                    Spaghetti Carbonara
                </h1>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Spaghetti_alla_Carbonara.jpg"
                    alt="Spaghetti Carbonara"
                    className="w-full h-56 object-cover rounded-xl mb-6 shadow"
                />
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Ingredients</h2>
                <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300 space-y-1">
                    <li>200g spaghetti</li>
                    <li>100g pancetta or bacon</li>
                    <li>2 large eggs</li>
                    <li>50g grated Parmesan cheese</li>
                    <li>2 cloves garlic, minced</li>
                    <li>Salt &amp; black pepper</li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Instructions</h2>
                <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Cook the spaghetti in salted boiling water until al dente.</li>
                    <li>Fry the pancetta with garlic until crispy.</li>
                    <li>Beat the eggs and mix with Parmesan, salt, and pepper.</li>
                    <li>Drain the pasta and combine with pancetta and garlic.</li>
                    <li>Remove from heat, add egg mixture, and toss quickly.</li>
                    <li>Serve immediately with extra Parmesan.</li>
                </ol>
            </div>
        </div>
    );
}