import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";
import Home from "./Home";
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";
import Story from "./Story";
import Cart from "./cart";
import Contact from "./ContactUs"
function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Header
        cartCount={cart.length}
        onCartClick={() => setCartOpen(true)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      {/* CART OVERLAY */}
     <AnimatePresence>
  {cartOpen && (
    <div className="fixed inset-0 z-[500] bg-black/50">
      
      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute right-0 top-0 h-full w-[400px] bg-white"
      >
        <Cart
          items={cart}
          onRemove={removeFromCart}
          onClose={() => setCartOpen(false)}
        />
      </motion.div>

    </div>
  )}
</AnimatePresence>
    </Router>
  );
}

export default App;