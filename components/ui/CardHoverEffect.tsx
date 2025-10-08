import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp, Building2, Calendar, Award, ExternalLink } from 'lucide-react';
import { Badge } from "./Badge";
import { animations, motionProps, withStagger } from '@/lib/utils/animation'

// Basic hover effect card for general use
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    subtitle: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[70vw] md:w-[90vw] py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardSubTitle>{item.subtitle}</CardSubTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

// Enhanced version for Experience cards with expandable details
export const ExperienceCardEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    duration: string;
    type: string;
    responsibilities: string[];
    technologies: string[];
  }[];
  className?: string;
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleExpanded = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <div className={cn("space-y-8", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          {...motionProps("fadeIn", idx)}
          className="relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full dark:bg-slate-800/[0.15] block rounded-xl z-0"
                layoutId={`hoverBg-${idx}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <div 
            className={cn(
              "rounded-xl border-pink-300 border-8 overflow-hidden relative z-10 transition-all duration-300",
              hoveredIndex === idx 
                ? "border-pink-300/50 shadow-lg shadow-pink/10 border-8" 
                : "border-border bg-card shadow-sm"
            )}  
          >
            <div 
              className="flex flex-col md:flex-row md:items-center justify-between p-6 cursor-pointer"
              onClick={() => toggleExpanded(idx)}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-pink-400" />
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                </div>
                <h4 className="text-lg font-semibold text-foreground/80 mb-2">{item.subtitle}</h4>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    <span>{item.type}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                {expandedIndex === idx ? 
                  <ChevronUp className="h-6 w-6 text-pink-400" /> : 
                  <ChevronDown className="h-6 w-6 text-pink-400" />
                }
              </div>
            </div>
            
            <AnimatePresence>
              {expandedIndex === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-border/50 mt-2">
                    <p className="text-foreground/80 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">Key Responsibilities</h5>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                        {item.responsibilities.map((responsibility, respIdx) => (
                          <li key={respIdx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {item.link !== "#" && (
                      <div className="flex justify-end">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-purple hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Learn more <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Base card component
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 h-[18rem]">{children}</div>
      </div>
    </div>
  );
};

// Title component for cards
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("lg:text-2xl md:text-xl text-base line-clamp-2 font-bold tracking-wide mt-3", className)}>
      {children}
    </h4>
  );
};

// Subtitle component for cards
export const CardSubTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("lg:text-lg md:text-base text-sm line-clamp-2 font-semibold tracking-wide mt-1", className)}>
      {children}
    </h4>
  );
};

// Description component for cards
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "font-light lg:text-base lg:font-normal lg:line-clamp-7 line-clamp-6 mt-8 tracking-wide leading-relaxed text-sm mb-2",
        className
      )}
    >
      {children}
    </p>
  );
};
