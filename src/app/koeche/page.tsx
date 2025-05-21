import Link from 'next/link';
import React from 'react';

const showcaseItems = [
    {id: 'item1', href: '/recipes/spaghetti-carbonara', placeholderText: 'Recipe Highlight 1'},
    {id: 'item2', href: '/categories/italian', placeholderText: 'Category Focus'},
    {id: 'item3', href: '/meal-planner/weekly', placeholderText: 'Meal Plan Ideas'},
];

export default function ImageShowcasePage() {
    return (
        <div className="image-showcase-page-container">
            {/* You can add a title for this section if you like */}
            {/* <h1 className="image-showcase-title">Discover More</h1> */}
            <div className="image-placeholder-grid">
                {showcaseItems.map((item) => (
                    <Link key={item.id} href={item.href} className="image-placeholder-item">
                        <span>{item.placeholderText}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}