import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, testimonialsIntro } from "../../mock/mock";
import Reveal from "../Reveal";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Auto-play interval (slides automatically every 3.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-[#d89626] font-bold tracking-[0.22em] text-xs sm:text-sm uppercase mb-3 inline-block">
            {testimonialsIntro.eyebrow}
          </p>
          <h2 className="font-display font-extrabold text-[#0b1f3a] text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight">
            {testimonialsIntro.title}
          </h2>
        </Reveal>

        {/* Carousel Container with Side Arrows & Auto-play */}
        <div
          className="relative max-w-[1240px] mx-auto px-6 sm:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white border border-slate-200/80 shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#0b1f3a] hover:text-[#d89626] hover:border-[#d89626] hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white border border-slate-200/80 shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#0b1f3a] hover:text-[#d89626] hover:border-[#d89626] hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Cards Slider Track */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-[0_8px_30px_rgba(11,31,58,0.06)] border border-slate-100 flex flex-col justify-between h-full min-h-[340px] hover:shadow-[0_16px_36px_rgba(11,31,58,0.1)] hover:-translate-y-1 transition-all duration-300">
                    <div>
                      {/* Gold Quote Mark */}
                      <div className="text-[#d89626] font-serif text-5xl leading-none select-none mb-3 opacity-85">
                        “
                      </div>

                      {/* Testimonial Quote */}
                      <p className="text-slate-600 text-sm leading-relaxed font-normal line-clamp-6">
                        {t.quote}
                      </p>
                    </div>

                    {/* Bottom Author Section */}
                    <div className="mt-6 pt-5 border-t border-slate-50">
                      <div className="flex items-center gap-3.5 mb-2.5">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-11 h-11 rounded-full object-cover border border-slate-100 shadow-xs shrink-0"
                          loading="lazy"
                        />
                        <div>
                          <div className="font-display font-bold text-[#0b1f3a] text-sm sm:text-[15px] leading-tight">
                            {t.name}
                          </div>
                          <div className="text-xs text-slate-400 font-medium mt-0.5">
                            {t.role}
                          </div>
                        </div>
                      </div>

                      {/* 5 Gold Stars */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className="h-4 w-4 text-[#d89626] fill-[#d89626]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 h-1.5 bg-[#d89626]"
                    : "w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
