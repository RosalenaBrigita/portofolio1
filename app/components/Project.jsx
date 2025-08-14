import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Project = ({isDarkMode}) => {
  const categories = ["All", "Game Dev", "Web Dev", "Mobile App", "Other"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All"
    ? workData
    : workData.filter(project => project.category === selectedCategory)

  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='projects' 
      className='w-full px-[12%] py-10 scroll-mt-20'
    >

      <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-ovo'
      >
        My Portfolio
      </motion.h4>

      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-ovo'
      >
        My Latest Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-10 mt-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm transition
              ${selectedCategory === cat
                ? isDarkMode 
                  ? "bg-[#2a004a] text-white border-white" 
                  : "bg-gray-800 text-white border-gray-800"
                : isDarkMode 
                  ? "border-white text-white hover:bg-[#2a004a]/50" 
                  : "border-gray-800 text-gray-800 hover:bg-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.a
            whileHover={{scale: 1.03}}
            transition={{duration: 0.3}}
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block border rounded-xl overflow-hidden shadow-md hover:shadow-lg duration-300
              ${isDarkMode ? "bg-[#1a1a1a] border-white/20" : "bg-white border-gray-200"}`}
          >
            {/* Gambar */}
            <div 
              className="w-full h-48 bg-cover bg-center" 
              style={{backgroundImage: `url(${project.bgImage})`}}
            ></div>
            
            {/* Konten */}
            <div className="flex items-start justify-between p-5">
              <div>
                <h2 className="font-semibold mb-2">{project.title}</h2>
                <p className={`text-sm ${isDarkMode ? "text-white/70" : "text-gray-700"}`}>
                  {project.description}
                </p>
              </div>
            </div>
          </motion.a>

        ))}
      </motion.div>
    </motion.div>
  )
}

export default Project
