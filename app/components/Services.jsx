import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-ovo'>What I offer</motion.h4>
      
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-ovo'>My Services</motion.h2>

      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I am a software engineer pengen kerja banget pls hire me dan gaji 2 digit, thx lop
      </motion.p>

      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.9}}
      className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index)=>(
            <motion.div 
            whileHover={{scale: 1.05}}
            key={index} 
            className={`border rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500
            ${isDarkMode ? "border-white hover:shadow-[4px_4px_0_#fff] hover:bg-[#2a004a]/50" : 
              "border-gray-400 hover:shadow-[4px_4px_0_#000] hover:bg-[#fcf4ff]"}`}>
                <Image src={icon} alt='' className='w-10 '/>
                <h3 className={`text-lg my-4  ${isDarkMode ? "text-white" : "text-gray-700"}`}>{title}</h3>
                <p className={`text-sm leading-5  ${isDarkMode ? "text-white/80" : "text-gray-600"}`}>
                    {description}
                </p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
                </a>
            </motion.div>
        ))}  
      </motion.div>

    </motion.div>
  )
}

export default Services
