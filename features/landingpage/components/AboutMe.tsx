import React from 'react'
import ShimmerText from '@/components/kokonutui/shimmer-text'
import { geist, inter } from '@/lib/fonts'

const AboutMe = () => {
    return (
        <div
            style={{
                background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
            }}
            className='w-full py-20 px-8'
        >
            <div className='max-w-6xl mx-auto'>
                {/* Section Title */}
                <div className="flex justify-center mb-16">
                    <ShimmerText className='text-6xl' text={"ABOUT ME"} />
                </div>

                {/* Content */}
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    {/* Left Side - Main Text */}
                    <div className='space-y-6'>
                        <p className={`${inter.className} text-gray-300 text-lg leading-relaxed`}>
                            I'm a <span className='text-cyan-400 font-bold'>self-taught AI and full-stack developer</span> who learned by building real products, solving real problems, and shipping systems that actually work.
                        </p>

                        <p className={`${inter.className} text-gray-300 text-lg leading-relaxed`}>
                            My journey started from pure curiosity and open-source learning, and evolved into creating <span className='text-purple-400 font-semibold'>AI applications</span>, <span className='text-pink-400 font-semibold'>machine learning platforms</span>, and <span className='text-amber-400 font-semibold'>digital businesses</span>.
                        </p>

                        <p className={`${inter.className} text-gray-300 text-lg leading-relaxed`}>
                            I specialize in turning complex AI and data systems into <span className='text-green-400 font-bold'>usable, scalable products</span>.
                        </p>
                    </div>

                    {/* Right Side - Highlight Box */}
                    <div className='relative'>
                        <div className='bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm'>
                            <p className={`${geist.className} text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-4`}>
                                I don't just experiment with AI —
                            </p>
                            <p className={`${geist.className} text-2xl font-bold text-white`}>
                                I manipulate it, shape it, and turn it into tools people can use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
