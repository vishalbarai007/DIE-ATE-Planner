import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BackgroundBoxesDemo from '../AceternityComponents/main/BackGroundBoxesDemo';


interface CarouselProps {
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Enter your age?",
      content: (
        <div className="h-fit w-fit flex flex-col justify-center items-center">
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Age"
            className="rounded-lg border text-xl pl-5 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-28 bg-neutral-950 placeholder:text-neutral-700 text-white"
          />
        </div>
      )
    },
    {
      title: "Select your gender?",
      content: (
        <div className="flex flex-wrap justify-center gap-8">
          {['Male', 'Female', 'Others'].map((gender) => (
            <label key={gender} className="flex items-center space-x-4 text-2xl text-white">
              {/* <input
                type="radio"
                name="gender"
                value={gender.toLowerCase()}
                className="w-5 h-5 border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950"
            //   /> */}
              <span>{gender}</span>
            </label>
          ))}
        </div>
      )
    },
    {
      title: "Do you have any chronic conditions (eg. diabetes, hypertension)?",
      content: (
        <div className="flex flex-wrap justify-center gap-8">
          {['Yes', 'No'].map((option) => (
            <label key={option} className="flex items-center space-x-4 text-2xl text-white">
              <input
                type="radio"
                name="chronic"
                value={option.toLowerCase()}
                className="w-5 h-5 border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )
    },
    {
      title: "Additional Information",
      content: (
        <div className="flex flex-col items-center space-y-4">
          <textarea
            placeholder="Enter any additional information..."
            className="w-96 h-32 rounded-lg border text-white text-xl p-4 border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className={`relative h-screen w-full overflow-hidden ${className}`}>
      {/* Background Grid */}
      <div className="absolute h-full w-full flex flex-col items-center justify-center" />
      <BackgroundBoxesDemo>
      
      {/* Slide Container */}
      <div className="h-fit w-fit">
        <div 
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >


          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full h-full flex flex-col items-center justify-center px-4"
              >
                <div className="max-w-4xl text-center space-y-8">
                  <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
                    {slide.title}
                  </h1>
                  {slide.content}
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </div>
      </BackgroundBoxesDemo>


      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;