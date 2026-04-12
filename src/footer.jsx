import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      className="bg-amber-900 text-white px-8 py-12"
    >
      <div className="grid md:grid-cols-4 gap-10">

        {/* SHOP INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-3">
            The Coffee Shop ☕
          </h2>

          <p className="text-sm text-amber-200 mb-4">
            Serving rich coffee and warm moments daily.
          </p>

          <div className="flex gap-4 text-xl">
            <FaInstagram className="hover:text-amber-300 cursor-pointer" />
            <FaFacebook className="hover:text-amber-300 cursor-pointer" />
            <FaTwitter className="hover:text-amber-300 cursor-pointer" />
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-amber-200">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-bold mb-3">Contact</h3>
          <p className="text-sm text-amber-200">Rawalpindi, Pakistan</p>
          <p className="text-sm text-amber-200">+92 300 1234567</p>
          <p className="text-sm text-amber-200">coffee@shop.com</p>
        </motion.div>

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-bold mb-3">Newsletter</h3>

          <input
            type="email"
            placeholder="Enter email"
            className="p-2 rounded text-black w-full mb-2 bg-white"
          />

          <button className="bg-amber-500 hover:bg-amber-600 w-full p-2 rounded">
            Subscribe
          </button>
        </motion.div>

      </div>

      {/* BOTTOM TEXT */}
      <motion.p
        className="text-center text-xs text-amber-300 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        © 2026 The Coffee Shop. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}

export default Footer;