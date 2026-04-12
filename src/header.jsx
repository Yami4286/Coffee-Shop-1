import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ cartCount, onCartClick }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-amber-700 w-full flex items-center justify-between px-4 py-3 relative z-50 shadow-2xs">

            {/* Logo */}
            <div className="font-bold text-black text-lg w-20">
                The Coffee Shop
            </div>

            {/* Mobile Button */}
            <button
                className="sm:hidden text-white text-xl"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            {/* NAV */}
            <nav
                className={`
          absolute sm:static top-full left-0 w-full sm:w-auto
          bg-amber-700 sm:bg-transparent
          transition-all duration-300
          ${open ? "block" : "hidden sm:block"}
        `}
            >
                <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-white p-4 sm:p-0 items-center">

                    <li>
                        <Link to="/" className="nav-icon">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/menu" className="nav-icon">
                            Menu
                        </Link>
                    </li>

                    <li>
                        <Link to="/story" className="nav-icon">
                            About Us
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" className="nav-icon">
                            Contact
                        </Link>
                    </li>

                    {/* CART BUTTON (NOT ROUTE) */}
                    <li>
                        <button
                            onClick={onCartClick}
                            className="nav-icon"
                        >
                            Cart ({cartCount})
                        </button>
                    </li>

                </ul>
            </nav>

        </header>
    );
}

export default Header;