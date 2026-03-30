"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 
      bg-white/10 backdrop-blur-xl border border-white/20 
      px-6 py-3 rounded-full flex gap-6 text-sm z-50"
    >
      <a href="#about" className="hover:text-gray-300">About</a>
      <a href="#skills" className="hover:text-gray-300">Skills</a>
      <a href="#projects" className="hover:text-gray-300">Projects</a>
      <a href="#contact" className="hover:text-gray-300">Contact</a>
      
        <button
  	onClick={() => document.body.classList.toggle("light")}
  	className="ml-4 px-3 py-1 border rounded-full"
	>
  	Toggle
	</button>
      
    </motion.nav>
  );
}
