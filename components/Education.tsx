import React from 'react'
import { motion } from 'framer-motion'
import { education } from "@/data";
import { Card, CardContent } from "@/components/ui/Card"
import { motionProps } from '@/lib/utils/animation'
import { Badge } from "@/components/ui/Badge"
import Link from "next/link";

const Education = () => {
  return (
    <section id="Education" className="w-full py-20 bg-[conic-gradient(at_top_left,_#fce7f3,_#f3e8ff,_#fde68a,_#fce7f3)]">
      <div className="container mx-auto px-4">
        <motion.div {...motionProps()} className="text-center mb-10">
          <h1 className="heading">
            My <span className="text-pink-500">Education</span>
          </h1>
        </motion.div>

    {/* Education Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {education.map((degree, idx) => (
        <Card
          key={idx}
          className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg border border-pink-200"
        >
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-pink-50 p-3 rounded-full">
                <span className="text-pink-400 font-bold">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{degree.title}</h3>
                <p className="text-sm text-muted-foreground">{degree.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">
                {degree.duration} | GPA: {degree.gpa}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {degree.courses.map((course, i) => (
                  <Badge key={i} variant="secondary" className="text-sm py-1 px-3">
                    {course}
                  </Badge>
                ))}
              </div>

              {degree.awards && (
                <p className="mt-2 text-sm text-muted-foreground">{degree.awards}</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Buttons below the cards */}
    <div className="flex justify-center gap-6 mt-10">
      <Link
        href="/certificates"
        className="px-6 py-2 rounded-lg bg-pink-200 text-black hover:bg-pink-300 transition-colors duration-200 font-medium"
      >
        Certificates
      </Link>
      <Link
        href="/publications"
        className="px-6 py-2 rounded-lg bg-pink-200 text-black hover:bg-pink-300 transition-colors duration-200 font-medium"
      >
        Publications
      </Link>
    </div>
  </div>
</section>

  );
};

export default Education;
