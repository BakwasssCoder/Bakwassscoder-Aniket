import React from 'react'
import ShimmerText from '@/components/kokonutui/shimmer-text'
import { geist, inter } from '@/lib/fonts'

const WhatIDo = () => {
    const services = [
        {
            title: "AI & MACHINE LEARNING",
            icon: "🧠",
            color: "from-blue-500 to-cyan-500",
            skills: [
                "End-to-end ML model development",
                "Data preprocessing & feature engineering",
                "Model evaluation & optimization",
                "AI system design for real-world applications",
                "Turning raw data into intelligent decision systems"
            ]
        },
        {
            title: "AI APPLICATIONS",
            icon: "🤖",
            color: "from-purple-500 to-pink-500",
            skills: [
                "AI chatbot systems",
                "LLM-powered tools",
                "AI workflow and automation design",
                "Smart digital assistants for business use"
            ]
        },
        {
            title: "FULL-STACK DEVELOPMENT",
            icon: "💻",
            color: "from-orange-500 to-red-500",
            skills: [
                "Backend systems using Python & Flask",
                "AI model integration into web apps",
                "Dashboard & analytics interfaces",
                "Interactive and intelligent product UI"
            ]
        },
        {
            title: "DATA + DECISION SYSTEMS",
            icon: "📊",
            color: "from-green-500 to-emerald-500",
            skills: [
                "Model performance visualization",
                "Business-focused AI insights",
                "Building tools that help people make better decisions"
            ]
        }
    ]

    return (
        <div
            style={{
                background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
            }}
            className='w-full py-20 px-8'
        >
            <div className='max-w-7xl mx-auto'>
                {/* Section Title */}
                <div className="flex justify-center mb-16">
                    <ShimmerText className='text-6xl' text={"WHAT I DO"} />
                </div>

                {/* Services Grid */}
                <div className='grid md:grid-cols-2 gap-8'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='group relative'
                        >
                            {/* Card */}
                            <div className='bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 h-full'>
                                {/* Icon and Title */}
                                <div className='flex items-center gap-4 mb-6'>
                                    <div className={`text-5xl p-4 bg-gradient-to-r ${service.color} rounded-xl`}>
                                        {service.icon}
                                    </div>
                                    <h3 className={`${geist.className} text-2xl font-bold text-white`}>
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <ul className='space-y-3'>
                                    {service.skills.map((skill, idx) => (
                                        <li
                                            key={idx}
                                            className={`${inter.className} text-gray-300 text-base flex items-start gap-3`}
                                        >
                                            <span className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text font-bold`}>
                                                ▸
                                            </span>
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300 -z-10`}></div>
                        </div>
                    ))}
                </div>

                {/* Project Mindset Section */}
                <div className='mt-20 bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 rounded-2xl p-10 backdrop-blur-sm'>
                    <h3 className={`${geist.className} text-4xl font-bold text-center text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-8`}>
                        PROJECT MINDSET
                    </h3>

                    <p className={`${inter.className} text-2xl text-white text-center mb-6 font-semibold`}>
                        I don't build "demo projects."
                    </p>

                    <div className='grid md:grid-cols-3 gap-6 mb-8'>
                        <div className='text-center'>
                            <div className='text-4xl mb-3'>🚀</div>
                            <p className={`${inter.className} text-lg text-gray-300`}>
                                Systems that can <span className='text-cyan-400 font-bold'>scale</span>
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='text-4xl mb-3'>💡</div>
                            <p className={`${inter.className} text-lg text-gray-300`}>
                                Products that solve <span className='text-purple-400 font-bold'>real problems</span>
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='text-4xl mb-3'>🤖</div>
                            <p className={`${inter.className} text-lg text-gray-300`}>
                                AI tools that businesses can <span className='text-pink-400 font-bold'>actually use</span>
                            </p>
                        </div>
                    </div>

                    <div className='text-center'>
                        <p className={`${geist.className} text-xl text-white font-semibold`}>
                            Every project I work on combines:
                        </p>
                        <p className={`${geist.className} text-2xl text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text font-bold mt-2`}>
                            AI Intelligence + Backend Logic + Product Experience
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIDo
