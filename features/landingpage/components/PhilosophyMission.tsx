import React from 'react'
import ShimmerText from '@/components/kokonutui/shimmer-text'
import { geist, inter } from '@/lib/fonts'

const PhilosophyMission = () => {
    return (
        <div
            style={{
                background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
            }}
            className='w-full py-20 px-8'
        >
            <div className='max-w-6xl mx-auto space-y-16'>
                {/* Learning Philosophy */}
                <div>
                    <div className="flex justify-center mb-12">
                        <ShimmerText className='text-6xl' text={"LEARNING PHILOSOPHY"} />
                    </div>

                    <div className='bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-2 border-cyan-500/50 rounded-3xl p-10 backdrop-blur-sm'>
                        <div className='text-center mb-8'>
                            <p className={`${geist.className} text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-4`}>
                                I am proudly self-taught from the open-source world.
                            </p>
                        </div>

                        <div className='grid md:grid-cols-2 gap-8'>
                            <div className='space-y-4'>
                                <h4 className={`${geist.className} text-2xl font-bold text-white mb-4`}>
                                    📚 Everything I know comes from:
                                </h4>
                                <ul className='space-y-3'>
                                    {[
                                        "Building real systems",
                                        "Experimenting with AI models",
                                        "Studying modern technologies hands-on",
                                        "Learning by execution, not just theory"
                                    ].map((item, idx) => (
                                        <li key={idx} className={`${inter.className} text-lg text-gray-300 flex items-start gap-3`}>
                                            <span className='text-cyan-400 font-bold text-xl'>▸</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='flex items-center justify-center'>
                                <div className='bg-gradient-to-br from-blue-900/60 to-cyan-900/60 border border-cyan-400 rounded-2xl p-8 text-center'>
                                    <p className={`${geist.className} text-2xl font-bold text-white`}>
                                        That's why I focus on
                                    </p>
                                    <p className={`${geist.className} text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mt-3`}>
                                        Practical Intelligence
                                    </p>
                                    <p className={`${inter.className} text-xl text-gray-300 mt-3`}>
                                        not just certificates
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission */}
                <div>
                    <div className="flex justify-center mb-12">
                        <ShimmerText className='text-6xl' text={"MY MISSION"} />
                    </div>

                    <div className='bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 rounded-3xl p-10 backdrop-blur-sm'>
                        <p className={`${inter.className} text-2xl text-gray-300 text-center leading-relaxed mb-8`}>
                            To create powerful <span className='text-purple-400 font-bold'>AI-driven digital systems</span> that help businesses <span className='text-pink-400 font-bold'>grow, automate, and make smarter decisions.</span>
                        </p>

                        <div className='bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-purple-400 rounded-2xl p-8 text-center'>
                            <p className={`${geist.className} text-2xl font-bold text-white mb-4`}>
                                I'm here to build the future where:
                            </p>
                            <p className={`${geist.className} text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text`}>
                                AI is not complicated — it's usable.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div>
                    <div className="flex justify-center mb-12">
                        <ShimmerText className='text-6xl' text={"LET'S BUILD SOMETHING POWERFUL"} />
                    </div>

                    <div className='bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-2 border-green-500/50 rounded-3xl p-10 backdrop-blur-sm text-center'>
                        <p className={`${inter.className} text-2xl text-gray-300 mb-8`}>
                            Want to work together, build an AI product, or create a smart digital system?
                        </p>

                        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                            <a
                                href='https://wa.me/916202815368'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='group relative px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white font-bold text-2xl hover:scale-110 transition-all duration-300 shadow-2xl flex items-center gap-3'
                            >
                                <span className='text-3xl'>💬</span>
                                <span>Contact Me on WhatsApp</span>
                                <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity'></div>
                            </a>
                        </div>

                        <p className={`${inter.className} text-lg text-gray-400 mt-6`}>
                            📲 +91 6202815368
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhilosophyMission
