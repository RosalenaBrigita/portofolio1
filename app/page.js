"use client";

import Image from "next/image";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  })

  return (
  <>
  <Navbar/>
  <Header/>
  <About/>
  <Services/>
  <Projects/>
  <Contact/>
  <Footer/>
  </>
  );
}
