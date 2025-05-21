import React from 'react';
import Link from 'next/link'; // Import Link if you plan to use it for the button or other links

export default function HomePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6 md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
                Willkommen!
            </h1>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-10 md:text-xl max-w-2xl mx-auto">
                Entdecke unsere neuesten Rezepte, lies spannende Blog-Artikel und plane deine Mahlzeiten.
                Lass dich inspirieren!
            </p>
            <div className="flex justify-center mb-16">
                {/* Example Link component for navigation, you can change href as needed */}
                <Link href="/burger" legacyBehavior>
                    <a
                        className="bg-[var(--accent-color)] text-[var(--primary-text)] font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]"
                    >
                        Zu den Rezepten
                    </a>
                </Link>
            </div>

            {}
            <div>
                <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800 dark:text-gray-100">
                    Neueste Blog-Einträge
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder for blog cards - repeat this structure for each card */}
                    <div
                        className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="h-40 bg-gray-200 dark:bg-neutral-700 rounded-md mb-4 animate-pulse"></div>
                        {/* Image Placeholder */}
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Titel des Blog-Eintrags
                            1</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                            Eine kurze und knackige Zusammenfassung dessen, was die Leser in diesem spannenden Beitrag
                            erwartet...
                        </p>
                        <Link href="#" legacyBehavior>
                            <a className="text-sm font-medium text-[var(--accent-color)] hover:underline">
                                Weiterlesen &rarr;
                            </a>
                        </Link>
                    </div>
                    <div
                        className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="h-40 bg-gray-200 dark:bg-neutral-700 rounded-md mb-4 animate-pulse"></div>
                        {/* Image Placeholder */}
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Titel des Blog-Eintrags
                            2</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                            Entdecken Sie faszinierende Einblicke und praktische Tipps in unserem neuesten Artikel...
                        </p>
                        <Link href="#" legacyBehavior>
                            <a className="text-sm font-medium text-[var(--accent-color)] hover:underline">
                                Weiterlesen &rarr;
                            </a>
                        </Link>
                    </div>
                    <div
                        className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="h-40 bg-gray-200 dark:bg-neutral-700 rounded-md mb-4 animate-pulse"></div>
                        {/* Image Placeholder */}
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Titel des Blog-Eintrags
                            3</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                            Ein weiterer fesselnder Beitrag, der darauf wartet, von Ihnen entdeckt zu werden. Tauchen
                            Sie ein...
                        </p>
                        <Link href="#" legacyBehavior>
                            <a className="text-sm font-medium text-[var(--accent-color)] hover:underline">
                                Weiterlesen &rarr;
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}