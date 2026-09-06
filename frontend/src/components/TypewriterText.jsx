import React, { useState, useEffect, useRef } from "react";

const TypewriterText = ({
  text = "",
  speed = 75,
  delay = 0,
  showCursor = true,
  cursorClassName = "text-[#d89626]",
  className = "",
  triggerOnView = true,
  as: Tag = "span",
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [inView, setInView] = useState(!triggerOnView);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!triggerOnView) {
      setInView(true);
      return;
    }
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    if (!inView || !text) return;

    let currentIndex = 0;
    setDisplayedText("");

    const timeout = setTimeout(() => {
      setIsTyping(true);
      const interval = setInterval(() => {
        currentIndex++;
        setDisplayedText(text.slice(0, currentIndex));

        if (currentIndex >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [inView, text, speed, delay, onComplete]);

  return (
    <Tag
      ref={containerRef}
      className={`inline-flex items-baseline ${className}`}
      aria-label={text}
    >
      <span>{displayedText}</span>
      {showCursor && isTyping && (
        <span
          className={`inline-block font-normal ml-[1px] animate-pulse select-none ${cursorClassName}`}
          aria-hidden="true"
        >
          |
        </span>
      )}
    </Tag>
  );
};

export default TypewriterText;
