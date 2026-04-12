import { FaSearch } from "react-icons/fa";
import MenuCards from "./assets/Pages/MenuCards"
import { useState } from "react";

function Menu( props) {
    const [active, NotActive] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="w-full min-h-screen">
      {/* Header Section */}
      <div className="bg-amber-700 font-bold text-2xl md:text-4xl lg:text-6xl text-center text-white p-4">
        <div>Our Gallery</div>
        <div className="text-center text-amber-400 bg-amber-700 text-2xl p-1">
          Crafted with premium ingredients and care
        </div>
      </div>

      {/* Controls Section Wrapper */}
      <div className="shadow-2xl">
        {/* Added px-10 for outer space and items-center for alignment */}
        <div className="p-4 px-10 flex flex-col md:flex-row  gap-6 items-center">
          
          {/* Search Bar Container */}
          <div className="border border-gray-200 rounded-lg flex items-center gap-2 hover:border-amber-700 p-2 transition-colors flex-grow">
            <FaSearch className="text-gray-400" />
            <input 
              type="text" 
              id="search" 
              className="p-1 w-full pl-4 focus:outline-none" // Changed w-80 to w-full to fill the space
              placeholder="Search your favorite coffee..." 
              value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Buttons Section */}
          <div className="flex gap-3">
            <button className="btn px-4 py-2 border rounded hover:bg-amber-50" onClick={()=>NotActive("all")}>All Items</button>
            <button className="btn px-4 py-2 border rounded hover:bg-amber-50 " onClick={()=>NotActive("cake")}>Pastries</button>
            <button className="btn px-4 py-2 border rounded hover:bg-amber-50" onClick={()=> NotActive("coffee")}>Coffees</button>
          </div>
        </div>
      </div>
      <MenuCards filterType={active} searchTerm={searchQuery}  addToCart={props.addToCart}/>
    </div>
  );
}

export default Menu;