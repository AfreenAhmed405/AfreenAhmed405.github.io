"use client";
import React, { useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { useRouter } from "next/navigation"; // Use Next.js router for navigation

export const CardSpotlight = ({
  title,
  des,
  iconLists,
  link,
  liveLink,
}: {
  title: string;
  des: string;
  iconLists?: Array<string>;
  link?: string;
  liveLink?: string;
}) => {
  const router = useRouter(); // Next.js router for navigation
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleCardClick = () => {
    if (link) {
      router.push(link); // Navigate when clicking the card
    }
  };

  const handleLiveLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation(); // Prevent card click from triggering
  };

  return (
    <div
      ref={divRef}
      onClick={handleCardClick} // Use div click for navigation
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950 px-8 py-10 shadow-2xl cursor-pointer"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />

      <div className="w-full h-full flex flex-col justify-between">
        <div>
          <h1 className="font-bold lg:text-2xl text-lg pt-1 pb-3">{title}</h1>
          <p className="font-light lg:text-lg text-base lg:font-normal tracking-wide line-clamp-4">
            {des}
          </p>
        </div>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {iconLists?.map((icon, index) => (
              <div
                key={icon}
                className="border rounded-full border-white/[0.2] bg-black lg:w-10 lg:h-10 w-9 h-9 flex justify-center items-center"
                style={{ transform: `translateX(-${5 * index * 2}px)` }}
              >
                <img src={icon} alt={icon} className="p-2" />
              </div>
            ))}
          </div>

          {liveLink && liveLink.trim() !== "" && (
            <a
              className="flex justify-center items-center"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLiveLinkClick}
            >
              <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                Check Live Site
              </p>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
