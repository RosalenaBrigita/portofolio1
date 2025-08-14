"use client";

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

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
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 
      bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>

      <h4 className='text-center mb-2 text-lg font-ovo'>Connect wiht me</h4>
      <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        hubungin yah
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>
            <input type='text' placeholder='Enter your name' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
            <input type='email' placeholder='Enter your email' required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>
        </div>
        <textarea rows='6' placeholder='Enter your message' required
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>
        <button type='submit'
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white 
        rounded-full mx-auto hover:bg-black duration-500'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className='fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg'>
          {popupMessage}
        </div>
      )}

    </div>
  )
}

export default Contact
