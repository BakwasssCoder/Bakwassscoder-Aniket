"use client"

import React, { useState } from 'react'
import ShimmerText from '@/components/kokonutui/shimmer-text'
import { geist, inter } from '@/lib/fonts'
import { motion } from 'framer-motion'

const BusinessVenturesPremium = () => {
    const [activeTab, setActiveTab] = useState<'choomantar' | 'qubex'>('choomantar')

    return (
        <div
            style={{
                background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #010133 100%)",
            }}
            className='w-full py-12 md:py-20 px-4 md:px-8 relative overflow-hidden'
        >
            {/* Animated Background Elements */}
            <div className='absolute inset-0 opacity-20'>
                <div className='absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px] animate-pulse'></div>
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] animate-pulse' style={{ animationDelay: '1s' }}></div>
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12 md:mb-16"
                >
                    <ShimmerText className='text-4xl md:text-6xl mb-4 text-center' text={"ENTREPRENEURIAL WORK"} />
                    <p className={`${inter.className} text-lg md:text-2xl text-gray-300 text-center px-4 max-w-3xl`}>
                        I don't just build tech. <span className='text-cyan-400 font-bold'>I build online businesses powered by tech.</span>
                    </p>
                </motion.div>

                {/* Tab Switcher */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className='flex justify-center mb-12'
                >
                    <div className='bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-2 flex gap-2'>
                        <button
                            onClick={() => setActiveTab('choomantar')}
                            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${activeTab === 'choomantar'
                                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            🚀 Choomantar
                        </button>
                        <button
                            onClick={() => setActiveTab('qubex')}
                            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${activeTab === 'qubex'
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            📦 Qubex
                        </button>
                    </div>
                </motion.div>

                {/* Content */}
                {activeTab === 'choomantar' && <ChoomantarContent />}
                {activeTab === 'qubex' && <QubexContent />}
            </div>
        </div>
    )
}

const ChoomantarContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className='space-y-8'
        >
            {/* Hero Card */}
            <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity'></div>
                <div className='relative bg-gradient-to-br from-orange-900/60 to-red-900/60 border-2 border-orange-500/50 rounded-3xl p-8 md:p-12 backdrop-blur-xl'>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-6 mb-8'>
                        <a href="https://www.choomantar.online" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform'>
                            <img src="https://i.ibb.co/pH1GCq3/image.png" alt="Choomantar Logo" className='w-20 h-20 md:w-24 md:h-24 rounded-xl' />
                        </a>
                        <div className='flex-1'>
                            <a href="https://www.choomantar.online" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 transition-opacity'>
                                <h3 className={`${geist.className} text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text mb-3`}>
                                    Choomantar
                                </h3>
                            </a>
                            <p className={`${inter.className} text-xl md:text-2xl text-gray-200 mb-2`}>
                                Bihar ka Apna O2O Commerce System
                            </p>
                            <a href="https://www.choomantar.online" target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors'>
                                <span className='text-sm'>🌐</span>
                                <span className={`${inter.className} text-sm font-medium`}>www.choomantar.online</span>
                            </a>
                        </div>
                    </div>

                    {/* Tagline with animation */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-6 md:p-8 mb-8 shadow-2xl'
                    >
                        <p className={`${geist.className} text-2xl md:text-4xl text-white font-bold text-center`}>
                            "Ghar tak, bina jhanjhat"
                        </p>
                    </motion.div>

                    {/* Stats Row */}
                    <div className='grid grid-cols-3 gap-4 mb-8'>
                        {[
                            { number: '8+', label: 'Categories' },
                            { number: '24/7', label: 'Service' },
                            { number: '100%', label: 'Local' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className='bg-gray-900/60 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 text-center'
                            >
                                <div className={`${geist.className} text-3xl md:text-4xl font-bold text-orange-400 mb-2`}>
                                    {stat.number}
                                </div>
                                <div className={`${inter.className} text-sm text-gray-300`}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Problem & Solution Cards */}
                    <div className='grid md:grid-cols-2 gap-6 mb-8'>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className='bg-gradient-to-br from-red-900/40 to-pink-900/40 border-2 border-red-500/50 rounded-2xl p-6 backdrop-blur-sm'
                        >
                            <div className='flex items-center gap-3 mb-4'>
                                <span className='text-4xl'>❌</span>
                                <h4 className={`${geist.className} text-2xl font-bold text-red-400`}>
                                    Problem
                                </h4>
                            </div>
                            <ul className='space-y-3'>
                                {[
                                    "No online presence for local shops",
                                    "Travel needed for small purchases",
                                    "Big apps ignore small towns",
                                    "Local markets losing digital race"
                                ].map((item, idx) => (
                                    <li key={idx} className={`${inter.className} text-gray-300 flex items-start gap-2`}>
                                        <span className='text-red-400 mt-1'>•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className='bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-2 border-green-500/50 rounded-2xl p-6 backdrop-blur-sm'
                        >
                            <div className='flex items-center gap-3 mb-4'>
                                <span className='text-4xl'>✅</span>
                                <h4 className={`${geist.className} text-2xl font-bold text-green-400`}>
                                    Solution
                                </h4>
                            </div>
                            <p className={`${inter.className} text-gray-300 mb-4 leading-relaxed`}>
                                Single digital gateway connecting local markets to customers' phones
                            </p>
                            <div className='bg-green-500/20 border border-green-400/30 rounded-lg p-4'>
                                <p className={`${inter.className} text-green-400 font-semibold text-center`}>
                                    Convenience + Digital Business
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Categories Grid */}
                    <div className='mb-8'>
                        <h4 className={`${geist.className} text-3xl font-bold text-white mb-6 text-center`}>
                            📦 What We Deliver
                        </h4>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                            {[
                                { icon: "🥦", text: "Fruits & Veggies" },
                                { icon: "🛒", text: "Groceries" },
                                { icon: "🥛", text: "Dairy" },
                                { icon: "🍪", text: "Snacks" },
                                { icon: "💄", text: "Beauty" },
                                { icon: "🍛", text: "Foods" },
                                { icon: "💊", text: "Medicines" },
                                { icon: "🧾", text: "Custom" }
                            ].map((cat, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className='bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-orange-500/30 rounded-xl p-4 text-center hover:border-orange-400 transition-all cursor-pointer'
                                >
                                    <div className='text-4xl mb-2'>{cat.icon}</div>
                                    <p className={`${inter.className} text-sm text-gray-300 font-medium`}>{cat.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mission */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className='bg-gradient-to-r from-orange-900/80 to-red-900/80 border-2 border-orange-400 rounded-2xl p-8 text-center backdrop-blur-sm'
                    >
                        <div className='text-5xl mb-4'>🎯</div>
                        <h4 className={`${geist.className} text-2xl font-bold text-orange-400 mb-4`}>
                            Mission
                        </h4>
                        <p className={`${inter.className} text-xl text-white font-semibold`}>
                            "Local dukandaron ko digital banana aur small towns ko modern convenience dena."
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

const QubexContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className='space-y-8'
        >
            {/* Hero Card */}
            <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity'></div>
                <div className='relative bg-gradient-to-br from-blue-900/60 to-purple-900/60 border-2 border-blue-500/50 rounded-3xl p-8 md:p-12 backdrop-blur-xl'>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-6 mb-8'>
                        <a href="https://www.qubexdeliver.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform'>
                            <img src="https://i.ibb.co/XrGVgHSs/image.png" alt="Qubex Logo" className='w-20 h-20 md:w-24 md:h-24 rounded-xl' />
                        </a>
                        <div className='flex-1'>
                            <a href="https://www.qubexdeliver.com" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 transition-opacity'>
                                <h3 className={`${geist.className} text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text mb-3`}>
                                    Qubex Deliver
                                </h3>
                            </a>
                            <p className={`${inter.className} text-xl md:text-2xl text-gray-200 mb-2`}>
                                Your Personal Shopper Across India
                            </p>
                            <a href="https://www.qubexdeliver.com" target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors'>
                                <span className='text-sm'>🌐</span>
                                <span className={`${inter.className} text-sm font-medium`}>www.qubexdeliver.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Tagline */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 md:p-8 mb-8 shadow-2xl'
                    >
                        <p className={`${geist.className} text-2xl md:text-4xl text-white font-bold text-center`}>
                            "We buy, verify, and deliver anything you need"
                        </p>
                    </motion.div>

                    {/* Stats Row */}
                    <div className='grid grid-cols-3 gap-4 mb-8'>
                        {[
                            { number: 'Pan', label: 'India' },
                            { number: '100%', label: 'Verified' },
                            { number: '24/7', label: 'Support' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className='bg-gray-900/60 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center'
                            >
                                <div className={`${geist.className} text-3xl md:text-4xl font-bold text-blue-400 mb-2`}>
                                    {stat.number}
                                </div>
                                <div className={`${inter.className} text-sm text-gray-300`}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* How It Works */}
                    <div className='mb-8'>
                        <h4 className={`${geist.className} text-3xl font-bold text-white mb-6 text-center`}>
                            🔄 How It Works
                        </h4>
                        <div className='grid md:grid-cols-3 gap-6'>
                            {[
                                { step: "1", title: "You Tell Us", desc: "Send product details via WhatsApp", icon: "📱", color: "blue" },
                                { step: "2", title: "We Buy", desc: "Verified assistant buys with video proof", icon: "🛍️", color: "purple" },
                                { step: "3", title: "We Deliver", desc: "Ship with live tracking updates", icon: "🚚", color: "pink" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    className='bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-2 border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden'
                                >
                                    <div className='absolute top-0 right-0 text-9xl opacity-5'>{item.icon}</div>
                                    <div className='relative z-10'>
                                        <div className='text-5xl mb-4'>{item.icon}</div>
                                        <div className='flex items-center gap-3 mb-3'>
                                            <span className='bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg'>
                                                {item.step}
                                            </span>
                                            <h5 className={`${geist.className} text-xl font-bold text-white`}>
                                                {item.title}
                                            </h5>
                                        </div>
                                        <p className={`${inter.className} text-gray-300`}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className='mb-8'>
                        <h4 className={`${geist.className} text-3xl font-bold text-white mb-6 text-center`}>
                            🎯 Our Services
                        </h4>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                            {[
                                "💊 Medicines",
                                "🛒 Groceries",
                                "🛠 Spare Parts",
                                "🎁 Gifts",
                                "📄 Documents",
                                "🏭 Bulk Orders",
                                "🛍 Rare Items",
                                "🧵 Custom Goods"
                            ].map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    className='bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-blue-500/30 rounded-xl p-4 text-center hover:border-blue-400 transition-all cursor-pointer'
                                >
                                    <p className={`${inter.className} text-sm text-gray-300 font-medium`}>{service}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Vision & Mission */}
                    <div className='grid md:grid-cols-2 gap-6'>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className='bg-gradient-to-br from-blue-900/80 to-purple-900/80 border-2 border-blue-400 rounded-2xl p-8 text-center backdrop-blur-sm'
                        >
                            <div className='text-5xl mb-4'>🔮</div>
                            <h4 className={`${geist.className} text-2xl font-bold text-blue-400 mb-4`}>
                                Vision
                            </h4>
                            <p className={`${inter.className} text-white font-semibold`}>
                                India's largest human-assisted buying network connecting every village through real people
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className='bg-gradient-to-br from-purple-900/80 to-pink-900/80 border-2 border-purple-400 rounded-2xl p-8 text-center backdrop-blur-sm'
                        >
                            <div className='text-5xl mb-4'>🎯</div>
                            <h4 className={`${geist.className} text-2xl font-bold text-purple-400 mb-4`}>
                                Mission
                            </h4>
                            <p className={`${inter.className} text-white font-semibold`}>
                                Make anything available to anyone, regardless of location or marketplace limitations
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default BusinessVenturesPremium
