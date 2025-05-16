import Link from 'next/link';
import React from 'react';

const navigationItems = [
    {id: 'browse', text: 'Rezepte', href: '/recipes'},
    {id: 'categories', text: 'Kategorien', href: '/categories'},
    {id: 'planner', text: 'Planner', href: '/meal-planner'},
    // Hier mehr hinzufügen
];

export default function HomePage() {
    return (
        <>
            <header className="sticky-top-bar">
                <div className="top-bar-logo">
                    <Link href="/">HTS Rezepte</Link>
                </div>
                <div className="top-bar-controls">
                    <div className="search-bar-container">
                        <input
                            type="search"
                            placeholder="Rezepte suchen..."
                            className="search-input"
                            aria-label="Search recipes"
                        />
                    </div>
                    <nav className="top-bar-nav" aria-label="Main navigation">
                        {navigationItems.map((item) => (
                            <Link key={item.id} href={item.href} className="top-bar-nav-button">
                                {item.text}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="main-page-content">
                <h1>Willkommen!</h1>
                <p>
                    Das hier ist die Homepage. Hier werden wir blogs haben und Rezepte verlinken.
                </p>
            </main>
        </>
    );
}