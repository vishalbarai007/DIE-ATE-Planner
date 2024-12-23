'use client'

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate
import { motion } from 'framer-motion'
import { FaDumbbell } from 'react-icons/fa'
import { GiShinyApple, GiMeal} from 'react-icons/gi'
import { LuBicepsFlexed } from "react-icons/lu";

const useLoading = (duration: number = 3000): boolean => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  return isLoading
}

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="text-white text-4xl md:text-6xl lg:text-8xl m-4"
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 1, delay: Math.random() * 0.5 }}
  >
    {children}
  </motion.div>
)

export default function SplashScreen() {
  const navigate = useNavigate() // Initialize useNavigate
  const isLoading = useLoading(3000) // 4 seconds for demo purposes

  useEffect(() => {
    if (!isLoading) {
      // Redirect to /Intro after the splash screen
      const timer = setTimeout(() => navigate('/Intro'), 2000) // Wait 2 seconds before navigating
      return () => clearTimeout(timer) // Cleanup on component unmount
    }
  }, [isLoading, navigate])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {isLoading ? (
        <motion.div
          className="flex flex-wrap justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IconWrapper><FaDumbbell /></IconWrapper>
          <IconWrapper><LuBicepsFlexed /></IconWrapper>
          <IconWrapper><GiShinyApple /></IconWrapper>
          <IconWrapper><GiMeal /></IconWrapper>

          <motion.h1
            className="w-full text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            DietPlan
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mt-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Your journey to a healthier starts here
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to DIE-ATE Planner</h1>
          <p className="text-xl">Your personalized diet planner is ready!</p>
        </motion.div>
      )}
    </div>
  )
}
