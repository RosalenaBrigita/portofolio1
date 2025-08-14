import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Services = ({isDarkMode}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleOpenModal = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  // Konten detail untuk modal berdasarkan title
  const serviceDetails = {
    "Game Developer": {
      intro: "I design and develop engaging games using Unity and C# to deliver interactive and enjoyable experiences for players.",
      points: [
        "Develop gameplay mechanics and core systems.",
        "Implement interactive storytelling elements.",
        "Optimize game performance for smooth play.",
        "Integrate audio, animations, and special effects."
      ]
    },
    "Web Developer": {
      intro: "I build responsive, modern, and user-friendly websites using the latest web technologies.",
      points: [
        "Develop dynamic user interfaces with React/Next.js.",
        "Integrate backend APIs for seamless data flow.",
        "Ensure cross-browser and mobile responsiveness.",
        "Optimize performance for fast loading."
      ]
    },
    "Mobile app": {
      intro: "I create mobile applications that run smoothly on both Android and iOS platforms.",
      points: [
        "Design and develop cross-platform mobile apps.",
        "Implement intuitive navigation and interactions.",
        "Integrate push notifications and in-app features.",
        "Ensure high performance and low resource usage."
      ]
    },
    "UI/UX design": {
      intro: "I design and develop consumer products with creative ability and hands-on approach to satisfy customer and market needs.",
      points: [
        "Develop intuitive and attractive user interfaces.",
        "Design and build responsive web pages.",
        "Create engaging UX element interactions.",
        "Position and enhance your company brand."
      ]
    }
  }

  return (
    <>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        id="services" className='w-full px-[12%] py-10 scroll-mt-20'
      >
        <motion.h4 
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.3}}
          className='text-center mb-2 text-lg font-ovo'
        >
          What I offer
        </motion.h4>
        
        <motion.h2 
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.5}}
          className='text-center text-5xl font-ovo'
        >
          My Services
        </motion.h2>

        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.9}}
          className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'
        >
          {serviceData.map((service, index) => (
            <motion.div 
              whileHover={{scale: 1.05}}
              key={index} 
              className={`border rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500
              ${isDarkMode ? "border-white hover:shadow-[4px_4px_0_#fff] hover:bg-[#2a004a]/50" : 
                "border-gray-400 hover:shadow-[4px_4px_0_#000] hover:bg-[#fcf4ff]"}`}
              onClick={() => handleOpenModal(service)}
            >
              <Image src={service.icon} alt='' className='w-10 '/>
              <h3 className={`text-lg my-4 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-5 ${isDarkMode ? "text-white/80" : "text-gray-600"}`}>
                {service.description}
              </p>
               <a
                className="flex items-center gap-2 text-sm mt-5 cursor-pointer"
                onClick={() => handleOpenModal(service)}
              >
                Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
              </a>
            </motion.div>
          ))}  
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <motion.div 
            initial={{scale: 0.8, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration: 0.3}}
            className={`max-w-lg w-full p-6 rounded-2xl relative 
              ${isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-black"}`}
          >
            <button 
              className="absolute top-4 right-4 text-2xl font-bold"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
            <p className="mb-4">
              {serviceDetails[selectedService.title]?.intro}
            </p>
            <ul className="list-disc pl-5 space-y-1">
              {serviceDetails[selectedService.title]?.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Services
