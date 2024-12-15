'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollAnimation } from './ScrollAnimation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  "/placeholder.svg?height=400&width=600&text=Project+1",
  "/placeholder.svg?height=400&width=600&text=Project+2",
  "/placeholder.svg?height=400&width=600&text=Project+3",
  "/placeholder.svg?height=400&width=600&text=Project+4",
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Galeri Proyek</h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="relative w-full max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="aspect-w-16 aspect-h-9 md:aspect-w-3 md:aspect-h-2"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </ScrollAnimation>
        <div className="mt-4 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

