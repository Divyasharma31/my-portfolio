"use client";
export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { useScroll } from "framer-motion";

export default function Home() {


useEffect(() => {
  const glow = document.createElement("div");
  glow.className = "cursor-glow";

  document.body.appendChild(glow);

  const handleMouseMove = (e: MouseEvent) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    if (glow.parentNode) {
      glow.parentNode.removeChild(glow);
    }
  };
}, []);



const { scrollYProgress } = useScroll();
  return (
    <main className="bg-black text-white">
	
	<motion.div
    className="fixed top-0 left-0 h-1 bg-white z-50"
    style={{
      scaleX: scrollYProgress,
      transformOrigin: "left",
    }}
  />
	
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">

        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight 
  bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
>
  Divya Sharma
</motion.h1>

	<TypeAnimation
  sequence={[
    	"Full Stack Developer",
    	1500,
    	"AI Enthusiast",
    	1500
  	]}
  	speed={50}
	repeat={Infinity}
  	className="text-lg md:text-2xl text-gray-400 mb-8"
	/>

        <motion.a
  	href="#projects"
  	whileHover={{ scale: 1.1 }}
   	className="px-8 py-3 bg-white text-black rounded-full font-semibold 			 hover:scale-110 transition duration-300"
	>
  View Projects
</motion.a>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen py-20 flex items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I am a passionate developer focused on building modern web
            applications using React, and AI technologies.
            I enjoy creating clean, interactive, and user-friendly
            experiences that solve real-world problems.
          </p>
        </motion.div>
      </section>
      
      {/* SKILLS */}
<section
  id="skills"
  className="min-h-screen py-20 flex flex-col items-center justify-center px-6"
>
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center max-w-4xl"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-10">
      Skills
    </h2>

    <div className="flex flex-wrap justify-center gap-4">

      {[
        "C++",
        "Java",
        "Python",
        "Flask",
        "React",
        "Machine Learning",
        "GenAI",
        "AgenticAI"
      ].map((skill, index) => (
        <motion.span
          key={index}
          whileHover={{ scale: 1.1 }}
          className="px-5 py-2 bg-white/10 border border-white/20 
          rounded-full text-sm backdrop-blur-md cursor-pointer"
        >
          {skill}
        </motion.span>
      ))}

    </div>
  </motion.div>
</section>

{/* PROJECTS */}
<section
  id="projects"
  className="min-h-screen py-20 flex flex-col items-center justify-center px-6"
>
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center max-w-6xl"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-10">
      Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {[
        {
    title: "Disaster Prediction using Drone Based System",
    desc: "End-to-end disaster management system integrating drone data, ML models (Faster R-CNN, MobileNet), and a React dashboard for landslide/flood detection and rescue path optimization.",
    link: "#"
  },
  {
  title: "Cyber Doctor",
  desc: "RAG-based medical assistance system that retrieves relevant medical knowledge and generates context-aware responses for diagnosis support.",
  link: "https://github.com/Divyasharma31/Cyber_doctor"
},
       {
  title: "Blood Donation Management System",
  desc: "Flask-based web application that connects blood donors with hospitals and patients, enabling efficient donor matching and real-time availability tracking.",
  link: "https://github.com/Divyasharma31/Blood-Donation-System"
},
{
  title: "Breast Cancer Detection",
  desc: "Deep learning-based system for detecting breast cancer using medical imaging and classification models.",
  link: "https://github.com/Divyasharma31/Breast_Cancer_Detection"
}
       
        
      ].map((project, index) => (
        <motion.a
  key={index}
  href={project.link}
  target="_blank"
  whileHover={{ scale: 1.05 }}
  className="group block p-6 bg-white/10 border border-white/20 
  rounded-2xl backdrop-blur-lg text-left 
  hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] 
  transition duration-300"
>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
       
            {project.title}
          </h3>
          <p className="text-gray-400">
            {project.desc}
          </p>
        </motion.a>
      ))}

    </div>
  </motion.div>
</section>

{/* CONTACT */}
<section
  id="contact"
  className="min-h-screen py-20 flex flex-col items-center justify-center px-6 text-center"
>
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-xl"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-6">
      Contact Me
    </h2>

    <p className="text-gray-400 mb-8">
      Have a project or opportunity? Let’s connect.
    </p>

    <a
  	href="mailto:divyasharma2004.31@gmail.com"
  	className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-110 transition duration-300"
	>
  	Send Email
	</a>
  </motion.div>
</section>

{/* FOOTER */}
<footer className="text-center py-6 border-t border-white/10 text-gray-500">
  © 2026 Divya Sharma. All rights reserved.
</footer>

    </main>
  );
}
