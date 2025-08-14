import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = ({isDarkMode}) => {

  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false); // state untuk popup
  const [popupMessage, setPopupMessage] = useState(""); // isi popup

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "d948f25a-e1e4-4551-a5cc-a39fdbeb2e06");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setPopupMessage("Form Submitted Successfully!");
        setShowPopup(true);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        setPopupMessage("Oops! Something went wrong.");
        setShowPopup(true);
      }

      // sembunyikan popup otomatis setelah 3 detik
      setTimeout(() => setShowPopup(false), 3000);

    } catch (error) {
      console.error(error);
      setResult("Error sending form");
      setPopupMessage("Oops! Something went wrong.");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='contact' className={`w-full px-[12%] py-10 scroll-mt-20 
      bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]
      ${isDarkMode ? "bg-none" : ""}`}>

      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-ovo'>Connect with me</motion.h4>
      
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-ovo'>Get in touch</motion.h2>

      <motion.form 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.9}}
      onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>
            <motion.input 
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.1}}
            type='text' placeholder='Enter your name' required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md  
            ${isDarkMode ? "bg-[#2a004a]/30 border-white/90" : "bg-white border-gray-400"}`} name='name'/>
            
            <motion.input 
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            type='email' placeholder='Enter your email' required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md
            ${isDarkMode ? "bg-[#2a004a]/30 border-white/90" : "bg-white border-gray-400"}`} name='email'/>
        </div>
        <motion.textarea 
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1.3}}
        rows='6' placeholder='Enter your message' required
        className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6
          ${isDarkMode ? "bg-[#2a004a]/30 border-white/90" : "bg-white border-gray-400"}`}
        name='message'></motion.textarea>

        <motion.button 
        whileHover={{scale: 1.05}}
        transition={{duration: 0.3}}
        type='submit'
        className={`py-3 px-8 w-max flex items-center justify-between gap-2 text-white 
        rounded-full mx-auto duration-500
        ${isDarkMode ? "bg-transparent border-[0.5px] hover:bg-[#2a004a]" : "bg-black/80 hover:bg-black"}`}>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.button>
      </motion.form>

      {/* Popup */}
      {showPopup && (
        <div className='fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg'>
          {popupMessage}
        </div>
      )}

    </motion.div>
  )
}

export default Contact
