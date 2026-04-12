import { motion, AnimatePresence } from "framer-motion";

function Cart({ items, onRemove, onClose }) {
    return (
        <div className="p-3 flex flex-col gap-3">
            <div className="CartHeader">


                <button onClick={onClose}>     <h3 className="font-bold text-amber-700">Cart ({items.length})</h3> </button>
            </div>

            {items.length === 0 ? (
                <p className="font-light text-amber-400 text-2xl">Your cart is empty… suspiciously empty.</p>
            ) : (
                <AnimatePresence>
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.25 }}
                            className="flex gap-3 p-3 sm:p-4 border border-gray-200 rounded-xl bg-amber-400 items-center"
                        >
                            <img
                                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                                src={item.image}
                                alt={item.name}
                            />

                            <div className="flex-1 flex flex-col gap-1">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm">Price: {item.price}</p>
                            </div>

                            <button
                                className="px-2 py-1 bg-red-500 text-white rounded-md text-sm"
                                onClick={() => onRemove(i)}
                            >
                                Delete
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            )}
        </div>
    );
}

export default Cart;