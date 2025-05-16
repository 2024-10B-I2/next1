import React from 'react';

const navigationItems = [
    {id: 'rezepte', text: 'Rezepte', href: '/burger'},
    {id: 'kategorien', text: 'Kategorien', href: '/categories'},
    {id: 'planner', text: 'Planner', href: '/meal-planner'},
    {id: 'koeche', text: 'Unsere Köche', href: '/koeche'},
    // Hier mehr hinzufügen
];

export default function HomePage() {
    return (
        <>

            <main className="main-page-content">
                <h1>Willkommen!</h1>
                <p>
                    Das hier ist die Homepage. Hier werden wir blogs haben und Rezepte verlinken.
                </p>
            </main>
        </>
    );
}