import React from 'react'
import {
  AnimatedNumber_002,
  AnimatedNumber_003,

} from '@/components/ui/skiper-ui/skiper37'
import { div } from 'framer-motion/client'
import { cormorant_garamond, geist, inter, pacifico, playfair_Display, poppins, yatraOne } from '@/lib/fonts'
import { SlidingNumber } from '@/components/motion-primitives/sliding-number'
import CardFlip from '@/components/kokonutui/card-flip'
import ShimmerText from '@/components/kokonutui/shimmer-text'
const MyDetails = () => {
  const data = [
    {
      title: "Frameworks Mastered",
      subtitle: "Building modern web & AI apps",
      value: 5,
      numberIn: 10,
      emptyRgba: "rgba(255, 99, 132, 0.5)",
      halfRgba: "rgba(255, 99, 132, 0.5)",
      fullRgba: "rgba(255, 99, 132, 0)",
      features: ["React", "Next.js", "Flask", "Node.js", "TensorFlow"]
    },
    {
      title: "Cloud Platforms",
      subtitle: "Deploying across the galaxy",
      value: 5,
      numberIn: 10,
      emptyRgba: "rgba(255, 159, 64, 0.5)",
      halfRgba: "rgba(255, 159, 64, 0.5)",
      fullRgba: "rgba(255, 159, 64, 0)",
      features: ["AWS", "Firebase", "Vercel", "Netlify", "Spheron"]

    },
    {
      title: "AI/ML Projects",
      subtitle: "LLM tools & automation pipelines",
      value: 8,
      numberIn: 10,
      emptyRgba: "rgba(255, 205, 86, 0.5)",
      halfRgba: "rgba(255, 205, 86, 0.5)",
      fullRgba: "rgba(255, 205, 86, 0)",
      features: ["OpenAI API", "TensorFlow", "PyTorch", "Pandas", "Fine-tuning"]
    },
    {
      title: "Dev Tools Arsenal",
      subtitle: "My daily coding weapons",
      value: 6,
      numberIn: 10,
      emptyRgba: "rgba(57, 255, 20, 0.9)  ",
      halfRgba: "rgba(57, 255, 20, 0.9)  ",
      fullRgba: "rgba(57, 255, 20, 0)  ",
      features: ["VS Code", "Docker", "Postman", "Git CLI", "Figma", "Tailwind"]
    },
    {
      title: "Projects Deployed",
      subtitle: "Live across the universe",
      value: 12,
      numberIn: 15,
      emptyRgba: "rgba(153, 102, 255, 0.5)",
      halfRgba: "rgba(153, 102, 255, 0.5)",
      fullRgba: "rgba(153, 102, 255, 0)",
      features: ["SaaS apps", "AI tools", "E-commerce", "Dashboards"]
    }

  ]
  return (
    <div

      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
      }}


      className=' pb-15 pt-10'>
      <div className=" flex justify-center flex-col mt-30 mb-15 ">
        <ShimmerText className='  text-6xl' text={"MY STATS"} />
        {/* <ShimmerText className=' text-5xl' text={"THIS YEAR"} /> */}
      </div>
      <div className=' grid grid-cols-3 gap-4'>
        {
          data.map((item, i) => (
            <div className=' text-white flex flex-col items-center  '>

              {/* <h1 className={` ${geist.className} text-center  font-medium text-5xl`}>{item.title}</h1>
               <AnimatedNumber_003  data={item.value} des={item.numberIn} />
               <SlidingNumber value={10000}/> */}
              <CardFlip description={`${item.value}`} title={item.title} key={i} subtitle={item.subtitle} features={item.features} />



            </div>

          ))
        }


      </div>

      {/* <AnimatedNumber_002/> */}
    </div>
  )
}

export default MyDetails
