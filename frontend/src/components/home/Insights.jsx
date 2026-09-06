import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen, Clock, Calendar, MoveHorizontal } from "lucide-react";
import { insights as fallbackInsights, insightsIntro } from "../../mock/mock";
import { blogApi } from "../../lib/api";
import Reveal from "../Reveal";

const Insights = () => {
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sliderRef = useRef(null);

  // Mouse drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const hasMoved = useRef(false);

  useEffect(() => {
    blogApi
      .list("All")
      .then((res) => {
        if (res?.data && res.data.length > 0) {
          setPosts(res.data);
        }
      })
      .catch(() => setPosts([]));
  }, []);

  // Merge API posts with fallback if fewer than 4
  const items = (() => {
    if (posts.length >= 4) {
      return posts.map((p) => ({
        id: p.id || p.slug,
        slug: p.slug,
        category: p.category,
        title: p.title,
        date: p.date,
        readTime: p.read_time || "5 min read",
        image: p.image,
        excerpt: p.excerpt,
      }));
    }
    if (posts.length > 0) {
      const apiItems = posts.map((p) => ({
        id: p.id || p.slug,
        slug: p.slug,
        category: p.category,
        title: p.title,
        date: p.date,
        readTime: p.read_time || "5 min read",
        image: p.image,
        excerpt: p.excerpt,
      }));
      // append fallback items not in api
      const existingTitles = new Set(apiItems.map((a) => a.title.toLowerCase()));
      const extra = fallbackInsights.filter(
        (f) => !existingTitles.has(f.title.toLowerCase())
      );
      return [...apiItems, ...extra];
    }
    return fallbackInsights;
  })();

  const checkScroll = React.useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate approx active index based on card width
    const firstCard = el.querySelector("[data-slide-card]");
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 20; // 20px gap
      const index = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, items.length - 1));
    }
  }, [items.length]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollToCard = (index) => {
    const el = sliderRef.current;
    if (!el) return;
    const cards = el.querySelectorAll("[data-slide-card]");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handleScroll = (direction) => {
    const el = sliderRef.current;
    if (!el) return;
    const scrollAmount = Math.min(el.clientWidth * 0.85, 380);
    el.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    const el = sliderRef.current;
    if (!el) return;
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeftStart.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const el = sliderRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.3;
    if (Math.abs(walk) > 5) {
      hasMoved.current = true;
    }
    el.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    const el = sliderRef.current;
    if (!el) return;
    isDragging.current = false;
    el.style.cursor = "grab";
    el.style.removeProperty("user-select");
  };

  return (
    <section className="bg-[#FAF9F5] py-16 md:py-24 border-t border-slate-200/60 overflow-hidden relative">
      {/* Background subtle accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-semibold tracking-wider uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              {insightsIntro.eyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
              {insightsIntro.titleLine1}{" "}
              <span className="text-gold italic font-normal">{insightsIntro.titleLine2}</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-xl leading-relaxed">
              {insightsIntro.description}
            </p>
          </Reveal>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition-colors py-2 px-3 rounded-lg border border-slate-200 hover:border-gold/50 bg-white shadow-sm"
            >
              <span>{insightsIntro.cta}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("prev")}
                disabled={!canScrollLeft}
                aria-label="Previous article"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 shadow-sm ${
                  canScrollLeft
                    ? "bg-white border-slate-200 text-navy hover:bg-gold hover:text-white hover:border-gold cursor-pointer"
                    : "bg-slate-100/70 border-slate-200 text-slate-300 cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("next")}
                disabled={!canScrollRight}
                aria-label="Next article"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 shadow-sm ${
                  canScrollRight
                    ? "bg-white border-slate-200 text-navy hover:bg-gold hover:text-white hover:border-gold cursor-pointer"
                    : "bg-slate-100/70 border-slate-200 text-slate-300 cursor-not-allowed"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-slate-500 mb-3 px-1">
          <span className="flex items-center gap-1.5 text-gold font-medium">
            <MoveHorizontal className="w-4 h-4 animate-pulse" />
            Swipe cards to explore
          </span>
          <span className="text-slate-400">
            {activeIndex + 1} of {items.length}
          </span>
        </div>

        {/* Swipeable Track */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory py-2 pb-6 -mx-4 px-4 md:mx-0 md:px-0 cursor-grab active:cursor-grabbing select-none scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {items.map((post, i) => (
            <div
              key={post.id || i}
              data-slide-card
              className="w-[82vw] sm:w-[320px] md:w-[360px] lg:w-[370px] shrink-0 snap-start flex flex-col"
            >
              <Link
                to={post.slug ? `/blog/${post.slug}` : "/blog"}
                onClick={(e) => {
                  // Prevent navigation if dragged
                  if (hasMoved.current) e.preventDefault();
                }}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-gold/50 shadow-[0_4px_20px_rgba(11,31,58,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(11,31,58,0.18)] transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image header */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 bg-navy/90 backdrop-blur-md text-gold text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-gold/30 shadow-sm">
                    {post.category}
                  </span>

                  {/* Read time badge */}
                  <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold" />
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-display text-lg md:text-xl font-bold text-navy leading-snug group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="mt-2.5 text-xs md:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                  </div>

                  {/* Read Link */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-navy group-hover:text-gold transition-colors">
                    <span className="flex items-center gap-1.5">
                      Read Full Guide
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gold/10 group-hover:text-gold transition-colors text-slate-400">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-8 bg-gold"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
