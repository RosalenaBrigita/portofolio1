import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}} >
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-ovo'>Introduction</motion.h4>
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-ovo'>About me</motion.h2>

      <motion.div 
      initial={{opacity: 0,}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-center 
      gap-20 my-10'> 
        <motion.div 
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_img} alt='user' className='h-[450px] w-auto rounded-3xl'/>
        </motion.div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className='flex-1'>
          <p className='mb-10 max-2xl font-ovo'>
            Informatics graduate passionate about game development, mobile apps, and web platforms. Always eager to learn and improve in the tech industry, with strong communication and teamwork skills. Dedicated to delivering positive contributions to every project.
          </p>

          <motion.ul 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8, delay: 1}}
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index)=>(
              <motion.li 
              whileHover={{scale: 1.05}}
              className={`border-[0.5px] rounded-xl p-6 cursor-pointer 
              hover:-translate-y-1 duration-500 ${isDarkMode ? "border-white hover:shadow-[4px_4px_0_#fff] hover:bg-[#2a004a]/50" : 
              "border-gray-400 hover:shadow-[4px_4px_0_#000] hover:bg-[#fcf4ff]"}`} 
              key={index}>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                <h3 className={`my-4 font-semibold ${isDarkMode ? "text-white" : "text-gray-700"}`}>{title}</h3>
                <p className={`text-sm ${isDarkMode ? "text-white/80" : "text-gray-600"}`}>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 
          initial={{y: 20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 1.3}}
          className={`my-6 font-ovo ${isDarkMode ? "text-white/80" : "text-gray-700" }`}>
            Tools I use
          </motion.h4>

          <motion.ul 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 1.5}}
          className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index)=>(
              <motion.li 
              whileInView={{scale: 1.1}}
              className='flex items-center justify-center w-12 sm:w-14 aspect-square
              border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
              key={index}>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
