'use client';

import { useState, useEffect } from "react";
import { IoDownloadOutline } from "react-icons/io5";
import dynamic from 'next/dynamic';
import MotionLines from "./MotionLines";
import MagicButton from "./MagicButton";

// Also install this npm i --save-dev @types/react-lottie
import { cn } from "@/lib/utils/cn";

// Dynamically import components with no SSR
const BackgroundGradientAnimation = dynamic(
  () => import('./GradientBg').then(mod => mod.BackgroundGradientAnimation),
  { ssr: false }
);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [isMounted, setIsMounted] = useState(false);

  // Use useEffect to ensure code only runs on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render client-side components after mounting
  if (!isMounted) {
    return (
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4",
          className
        )}
        style={{
          background: "rgba(255, 255, 255, 1)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
              />
            )}
          </div>
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgba(255, 255, 255, 1)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <MotionLines />}

          {id === 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title="Download My Resume"
                icon={<IoDownloadOutline />} // you can change the icon if you want
                position="left"
                handleClick={() => {
                  // Assuming your resume is in the public folder
                  const link = document.createElement("a");
                  link.href = "/Afreen_Ahmed_Resume_SWE.pdf"; // replace with your actual file name
                  link.download = "Afreen_Ahmed_resume.pdf";
                  link.click();
                }}
                // otherClasses="!bg-[#161A31]"
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};