"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleClick = () => {
    window.open("https://wa.me/+6285198185903", "_blank")
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-primary-dark rounded-lg w-12 h-12 flex items-center justify-center cursor-pointer shadow-lg transition-colors duration-300 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </button>
  )
}

export default WhatsAppButton

