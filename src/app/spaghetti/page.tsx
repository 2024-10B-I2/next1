"use client";
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

// Basis-Zutatenliste für das Rezept.
// Diese Struktur ist gut für eine spätere Datenbankintegration geeignet.
// 'baseAmount' bezieht sich auf 'basePortions'.
const initialBaseIngredients = [
    { id: 'spaghetti', name: 'Spaghetti', baseAmount: 200, unit: 'g', basePortions: 2 },
    { id: 'pancetta', name: 'Pancetta oder Bacon', baseAmount: 100, unit: 'g', basePortions: 2 },
    { id: 'eggs', name: 'große Eier', baseAmount: 2, unit: '', basePortions: 2 }, // Leere Einheit für Stückzahlen
    { id: 'parmesan', name: 'geriebener Parmesan', baseAmount: 50, unit: 'g', basePortions: 2 },
    { id: 'garlic', name: 'Knoblauchzehen, gehackt', baseAmount: 2, unit: '', basePortions: 2 },
];

// Zutaten, die nicht direkt skaliert werden oder nach Geschmack hinzugefügt werden.
const otherIngredients = [
    { id: 'saltpepper', text: 'Salz & schwarzer Pfeffer (nach Geschmack)'}
];

export default function Page() {
    // State für die Anzahl der gewünschten Portionen, standardmäßig 2 (passend zu basePortions)
    const [portions, setPortions] = useState(2);

    // Handler für die Änderung der Portionsanzahl
    const handlePortionsChange = (event) => {
        const newPortions = parseInt(event.target.value, 10);
        if (event.target.value === '') {
            setPortions(1); // Fallback, falls das Feld geleert wird
        } else if (newPortions >= 1) {
            setPortions(newPortions);
        }
    };

    // Berechnet die angepassten Zutatenmengen basierend auf den Portionen.
    // useMemo wird verwendet, um die Berechnung nur dann erneut auszuführen, wenn sich 'portions' ändert.
    const adjustedIngredients = useMemo(() => {
        return initialBaseIngredients.map(ingredient => {
            const calculatedAmount = (ingredient.baseAmount / ingredient.basePortions) * portions;
            let displayAmount;

            if (ingredient.unit === '') { // Für Stückzahlen (z.B. Eier, Knoblauchzehen)
                // Auf die nächste ganze Zahl runden, mindestens 1, wenn der berechnete Wert > 0 ist.
                if (calculatedAmount === 0) {
                    displayAmount = "0";
                } else {
                    // Sicherstellen, dass es mindestens 1 ist, wenn der ursprüngliche Betrag nicht 0 war und die Berechnung > 0 ist.
                    displayAmount = String(Math.max(1, Math.round(calculatedAmount)));
                }
            } else { // Für Gewichts- oder Volumeneinheiten (z.B. g, ml)
                if (calculatedAmount === 0) {
                    displayAmount = "0";
                } else if (calculatedAmount < 0.1 && calculatedAmount > 0) { // Sehr kleine Mengen
                    displayAmount = calculatedAmount.toFixed(2); // z.B. 0.05g
                } else if (calculatedAmount < 10 && calculatedAmount > 0) { // Kleine Mengen
                    // Eine Dezimalstelle, aber .0 entfernen, wenn es eine ganze Zahl ist (z.B. 2.0 -> 2)
                    displayAmount = parseFloat(calculatedAmount.toFixed(1)).toString();
                } else { // Größere Mengen
                    // Auf ganze Zahl runden
                    displayAmount = Math.round(calculatedAmount).toString();
                }
            }

            return {
                ...ingredient,
                displayAmount: displayAmount, // Als String für die direkte Anzeige
            };
        });
    }, [portions]); // Abhängigkeit 'initialBaseIngredients' kann hinzugefügt werden, falls sie sich ändern könnte

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-neutral-900 dark:to-neutral-800 flex flex-col items-center justify-center px-4 py-12 transition-colors duration-300">
            <Link
                href="/"
                className="fixed top-6 left-6 z-50 text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400 font-semibold text-lg transition-colors bg-white/80 dark:bg-neutral-900/80 px-4 py-2 rounded shadow"
            >
                &larr; Zurück zur Hauptseite
            </Link>
            <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-xl rounded-2xl p-8 max-w-xl w-full mt-24 sm:mt-16 transition-colors duration-300">
                <h1 className="text-4xl font-extrabold text-center text-orange-700 dark:text-orange-300 mb-6 drop-shadow">
                    Spaghetti Carbonara
                </h1>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Spaghetti_alla_Carbonara.jpg"
                    alt="Spaghetti Carbonara"
                    className="w-full h-56 object-cover rounded-xl mb-6 shadow"
                />

                {/* Portions-Anpassung */}
                <div className="mb-6 p-4 bg-orange-50 dark:bg-neutral-800 rounded-lg shadow">
                    <label htmlFor="portions" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Portionen anpassen:
                    </label>
                    <div className="flex items-center space-x-3">
                        <input
                            type="number"
                            id="portions"
                            name="portions"
                            min="1"
                            max="100" // Ein Maximalwert ist sinnvoll
                            value={portions}
                            onChange={handlePortionsChange}
                            className="w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-neutral-700 dark:text-gray-100 dark:border-neutral-600"
                        />
                        <span className="text-gray-700 dark:text-gray-300">
                            {portions === 1 ? 'Portion' : 'Portionen'}
                        </span>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Zutaten</h2>
                <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300 space-y-1">
                    {adjustedIngredients.map(ingredient => (
                        <li key={ingredient.id}>
                            {/* Zeige die Menge nur an, wenn sie nicht "0" ist */}
                            {ingredient.displayAmount !== "0" ? `${ingredient.displayAmount}${ingredient.unit} ` : ''}
                            {ingredient.name}
                        </li>
                    ))}
                    {otherIngredients.map(item => (
                         <li key={item.id}>{item.text}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Anleitung</h2>
                <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Die Spaghetti in kochendem Salzwasser al dente kochen.</li>
                    <li>Die Pancetta mit dem Knoblauch knusprig braten.</li>
                    <li>Die Eier verquirlen und mit Parmesan, Salz und Pfeffer vermischen.</li>
                    <li>Die Nudeln abgießen und mit Pancetta und Knoblauch vermengen.</li>
                    <li>Vom Herd nehmen, die Ei-Mischung hinzufügen und schnell vermischen.</li>
                    <li>Sofort mit extra Parmesan servieren.</li>
                </ol>
            </div>
        </div>
    );
}