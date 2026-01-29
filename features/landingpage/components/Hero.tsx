"use client"

import React, { useState, useEffect } from 'react'
import { Skiper58, TextRoll } from '@/components/ui/skiper-ui/skiper58'
import { ColorTheme } from '@/lib/theme'
import { bodoniModa, geist, inter, notoSansDevanagari, pacifico, pixelifySans, rozhaOne, yatraOne } from '@/lib/fonts';
import { CrowdCanvas } from '@/components/ui/skiper-ui/skiper39';
import { h1 } from 'framer-motion/client';
import { SpringMouseFollow } from '@/components/ui/skiper-ui/skiper61';
import DynamicText from '@/components/kokonutui/dynamic-text';



const Hero = () => {
  const { bgPrimary, bgSecondary, textPrimary, textSecondary, border } = ColorTheme();
  const [currentText, setCurrentText] = useState('ANIKET PRASHAR');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => prev === 'ANIKET PRASHAR' ? 'BakwasssCoder' : 'ANIKET PRASHAR');
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
      }}

      className={` relative  min-h-screen  flex-col  w-full flex justify-center items-center px-8 py-20 `}>

      <div className={` px-4 max-w-6xl mx-auto  w-full  z-70   flex flex-col items-center text-center gap-8  `}>

        {/* Main Title */}
        <div className=' w-full flex flex-col items-center gap-4'>
          <TextRoll
            key={currentText}
            className={` ${textPrimary} ${geist.className} text-amber-300 font-bold text-6xl md:text-8xl transition-all duration-500`}
            center
          >
            {currentText}
          </TextRoll>

          <h2 className={` ${geist.className} text-white text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent`}>
            The Best Vibe Coder in the World
          </h2>
        </div>

        {/* Subtitle Badges */}
        <div className='flex flex-wrap justify-center gap-4 mt-4'>
          <span className='px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold text-sm md:text-base shadow-lg'>
            🤖 AI Manipulator
          </span>
          <span className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-sm md:text-base shadow-lg'>
            💻 Full-Stack Builder
          </span>
          <span className='px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white font-semibold text-sm md:text-base shadow-lg'>
            🚀 Digital Product Creator
          </span>
        </div>

        {/* Main Description */}
        <p className={` ${inter.className} text-gray-300 text-lg md:text-xl max-w-4xl leading-relaxed mt-6`}>
          I build <span className='text-cyan-400 font-bold'>intelligent systems</span>, <span className='text-purple-400 font-bold'>AI-powered tools</span>, and <span className='text-pink-400 font-bold'>real-world digital products</span> that blend machine learning, automation, and modern user experience.
        </p>

        <p className={` ${inter.className} text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed`}>
          From model training to product deployment — I don't just code features, <span className='text-amber-300 font-semibold'>I build complete working systems.</span>
        </p>

        {/* CTA Section */}
        <div className='mt-8 flex flex-col sm:flex-row gap-4'>
          <a
            href='#projects'
            className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-bold text-lg hover:scale-105 transition-transform shadow-xl'
          >
            View My Work
          </a>
          <a
            href='https://wa.me/916202815368'
            target='_blank'
            className='px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-2'
          >
            <span>💬</span> Let's Build Together
          </a>
        </div>

      </div>
      <div className="absolute bottom-0 h-96 z-10 w-full opacity-30">
        <CrowdCanvas src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png' rows={8} cols={7} />
      </div>




    </div>
  )
}

export default Hero
