import React from 'react'
import ShimmerText from '@/components/kokonutui/shimmer-text'
import { geist, inter } from '@/lib/fonts'

const Education = () => {
    const educationData = [
        {
            degree: "High School",
            institution: "High School Salempur",
            icon: "🎓",
            color: "from-blue-500 to-cyan-500"
        },
        {
            degree: "Higher Secondary (PCM – ISC)",
            institution: "MDN +2 High School",
            icon: "📚",
            color: "from-purple-500 to-pink-500"
        },
        {
            degree: "B.Sc. Mathematics (Hons)",
            institution: "Tilka Manjhi Bhagalpur University (TMBU)",
            icon: "🎯",
            color: "from-orange-500 to-red-500"
        },
        {
            degree: "AI & Machine Learning Training",
            institution: "Specialized learning in Artificial Intelligence and Machine Learning from IIT Mandi",
            icon: "🤖",
            color: "from-green-500 to-emerald-500",
            highlight: true
        }
    ]

    return (
        <div
            style={{
                background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #010133 100%)",
            }}
            className='w-full py-20 px-8'
        >
            <div className='max-w-6xl mx-auto'>
                {/* Section Title */}
                <div className="flex justify-center mb-16">
                    <ShimmerText className='text-6xl' text={"EDUCATION"} />
                </div>

                {/* Education Cards */}
                <div className='grid md:grid-cols-2 gap-6'>
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className={`relative group ${edu.highlight ? 'md:col-span-2' : ''}`}
                        >
                            <div className={`bg-gradient-to-br ${edu.highlight ? 'from-purple-900/60 to-pink-900/60 border-2 border-purple-400' : 'from-gray-900/60 to-gray-800/60 border border-gray-700'} rounded-xl p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                                {/* Icon */}
                                <div className={`text-5xl mb-4 ${edu.highlight ? 'animate-pulse' : ''}`}>
                                    {edu.icon}
                                </div>

                                {/* Degree */}
                                <h3 className={`${geist.className} text-2xl font-bold text-white mb-2`}>
                                    {edu.degree}
                                </h3>

                                {/* Institution */}
                                <p className={`${inter.className} text-gray-300 text-base leading-relaxed`}>
                                    {edu.institution}
                                </p>

                                {/* Gradient Badge */}
                                {edu.highlight && (
                                    <div className='mt-4'>
                                        <span className={`px-4 py-2 bg-gradient-to-r ${edu.color} rounded-full text-white text-sm font-semibold`}>
                                            ⭐ Specialized Training
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education
