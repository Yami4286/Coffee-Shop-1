import { useState, useEffect } from "react";

// The 'filterType' prop is the input you send from App.jsx
function MenuCards({ filterType, searchTerm , addToCart}) {

    const menuItems = [
        { id: 1, name: "Golden Croissant", category: "cake", price: "$3.75", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500", description: "Flaky buttery layers baked fresh.", ingredients: ["Refined Flour", "French Butter", "Yeast", "Sea Salt"] },
        { id: 2, name: "Velvet Cupcake", category: "cake", price: "$4.25", image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=500", description: "Rich cream frosting on chocolate.", ingredients: ["Cocoa Powder", "Cream Cheese", "Vanilla Extract", "Sugar"] },
        { id: 3, name: "Glazed Donut", category: "cake", price: "$2.50", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=500", description: "Sweet classic treats melted perfectly.", ingredients: ["Dough", "Honey Glaze", "Whole Milk", "Cinnamon"] },
        { id: 4, name: "Berry Tart", category: "cake", price: "$5.50", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=500", description: "Fresh forest berries on cream.", ingredients: ["Blueberries", "Shortcrust Pastry", "Custard", "Mint"] },
        { id: 5, name: "Vanilla Latte", category: "coffee", price: "$4.50", image: "https://plus.unsplash.com/premium_photo-1723759448747-1d174225e61f?q=80&w=500", description: "Smooth espresso with sweet vanilla.", ingredients: ["Arabica Beans", "Steamed Milk", "Vanilla Syrup"] },
        { id: 6, name: "Cold Brew", category: "coffee", price: "$5.00", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500", description: "Bold coffee steeped sixteen hours.", ingredients: ["Ground Coffee", "Filtered Water", "Ice Cubes"] },
        { id: 7, name: "Flat White", category: "coffee", price: "$4.25", image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=500", description: "Velvety microfoam over double espresso.", ingredients: ["Double Espresso", "Whole Milk", "Microfoam"] },
        { id: 8, name: "Mocha Dream", category: "coffee", price: "$5.25", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=500", description: "Rich dark chocolate coffee blend.", ingredients: ["Espresso", "Dark Chocolate", "Milk", "Whipped Cream"] }
    ];

    

    // The Filtering Logic
    const filteredItems = menuItems.filter((item) => {
        // 1. Filter by Category
        const isInCategory = filterType === "all" || item.category === filterType;

        // 2. Filter by Search (Search bar is empty? Show all. Not empty? Match name.)
        const matchesSearch = searchTerm === "" || item.name.toLowerCase().includes(searchTerm.toLowerCase());

        // Both conditions must be true
        return isInCategory && matchesSearch;
    });



    return (
        <div className="py-10">
            {/* Mapping the filtered results into cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col bg-white border border-solid border-gray-200 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                    >
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />

                        <div className="p-5 flex flex-col grow">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
                                <span className="text-amber-600 font-bold">{item.price}</span>
                            </div>
                            <p className="text-gray-500 text-xs mb-4">{item.description}</p>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-1.5">
                                    {item.ingredients.map((ing, index) => (
                                        <span key={index} className="bg-amber-50 text-amber-800 text-[10px] px-2 py-0.5 rounded border border-solid border-amber-100">
                                            {ing}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 p-1">
                            <button className="border border-amber-400 rounded-full p-2 pl-3 pr-3 hover:bg-amber-400 font-light mb-2" onClick={() => addToCart(item)}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuCards