"use client"

import { useState } from "react";

const categories = [
    { id: 'all', label: 'All Blogs' },
    { id: 'ui-ux', label: 'UI UX' },
    { id: 'webflow', label: 'Webflow' },
    { id: 'saas', label: 'SaaS' },
    { id: 'mvp', label: 'MVP' },
];

export default function BlogCategories() {
    const [active, setActive] = useState('all');

    return (
        <nav aria-label="Blog categories" className="w-full">
            <ul className="flex items-center gap-6 text-sm md:text-base border-b">
                {categories.map((c) => {
                    const isActive = c.id === active;
                    return (
                        <li key={c.id} className="list-none">
                            <button
                                onClick={() => setActive(c.id)}
                                className={`inline-flex cursor-pointer items-center px-0 pb-2 transition-colors duration-150 ${isActive ? 'text-primary border-b-[4px] border-primary font-medium' : 'text-foreground/70 hover:text-foreground'
                                    }`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {c.label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
