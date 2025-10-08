"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent } from "@/components/ui/Card"
import { Code2, Layout, Server, Database, Wrench, Binary, Brain } from "lucide-react"
import { motionProps } from "@/lib/utils/animation"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [expandedRows, setExpandedRows] = useState<{[key: number]: boolean}>({})
  const [cardPositions, setCardPositions] = useState<{[key: string]: number}>({})
  
  const cardsPerRow = {
    lg: 3,
    md: 2,
    sm: 1
  }
  
  // Update card positions when window resizes
  useEffect(() => {
    const updateCardPositions = () => {
      const positions: {[key: string]: number} = {}
      const width = window.innerWidth
      let cardsInRow = cardsPerRow.sm
      
      if (width >= 1024) {
        cardsInRow = cardsPerRow.lg
      } else if (width >= 768) {
        cardsInRow = cardsPerRow.md
      }
      
      Object.keys(technologies).forEach((key, index) => {
        positions[key] = Math.floor(index / cardsInRow)
      })
      
      setCardPositions(positions)
    }
    
    updateCardPositions()
    window.addEventListener('resize', updateCardPositions)
    
    return () => {
      window.removeEventListener('resize', updateCardPositions)
    }
  }, [])


  const technologies = {
  languages: {
    icon: <Code2 className="h-6 w-6 text-pink-400" />,
    title: "Programming Languages",
    description: "Core languages for system, web, and AI development",
    skills: [
      { name: "Python", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 90 },
      { name: "PHP", level: 70 },
    ].sort((a, b) => b.level - a.level),
  },
  concepts: {
    icon: <Binary className="h-6 w-6 text-pink-400" />,
    title: "Engineering Concepts",
    description: "Solid foundation in software and system architecture",
    skills: [
      { name: "Data Structures", level: 95 },
      { name: "OOP", level: 95 },
      { name: "Algorithms", level: 90 },
      { name: "System Design", level: 70 },
      { name: "Design Patterns", level: 65 },
      { name: "Multithreading", level: 60 },
    ].sort((a, b) => b.level - a.level),
  },
  frontend: {
    icon: <Layout className="h-6 w-6 text-pink-400" />,
    title: "Frontend Development",
    description: "Modern, responsive UI development with robust tooling",
    skills: [
      { name: "React", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Bootstrap", level: 80 },
      { name: "Figma", level: 70 }
    ].sort((a, b) => b.level - a.level),
  },
  backend: {
    icon: <Server className="h-6 w-6 text-pink-400" />,
    title: "Backend Development",
    description: "Efficient APIs and server-side logic",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "Spring Boot", level: 75 },
      { name: "JUnit", level: 75 },
      { name: "Flask", level: 75 }, 
      { name: "Spark SQL", level: 75 }
    ].sort((a, b) => b.level - a.level),
  },
  database: {
    icon: <Database className="h-6 w-6 text-pink-400" />,
    title: "Database Systems",
    description: "Experience with relational and NoSQL databases",
    skills: [
      { name: "MongoDB", level: 95 },
      { name: "MySQL", level: 85 },
      { name: "NoSQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Oracle DB", level: 70 },
    ].sort((a, b) => b.level - a.level),
  },
  tools: {
    icon: <Wrench className="h-6 w-6 text-pink-400" />,
    title: "Development Tools",
    description: "Tooling for modern development and deployment",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 95 },
      { name: "AWS", level: 85 },
      { name: "Jira", level: 80 },
      { name: "Postman", level: 80 },
      { name: "Maven", level: 80 },
      { name: "Splunk", level: 80 },
      { name: "Grafana", level: 80 },
      { name: "CI/CD", level: 75 },
    ].sort((a, b) => b.level - a.level),
  },
  ai: {
    icon: <Brain className="h-6 w-6 text-pink-400" />,
    title: "AI & Data Science",
    description: "Applied machine learning and data analysis",
    skills: [
      { name: "LangChain", level: 90 },
      { name: "Pandas/Numpy", level: 90 },
      { name: "RAG", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "PyTorch", level: 70 },
      { name: "Scikit-learn", level: 65 },
    ].sort((a, b) => b.level - a.level),
  },
}
  
  return (
    <section id="tech-stack" className="w-full py-20 bg-[conic-gradient(at_top_left,_#fce7f3,_#f3e8ff,_#fde68a,_#fce7f3)]">
      <div className="container mx-auto">
        <motion.div
          {...motionProps()}
          className="text-center mb-10"
        >
          <h1 className="heading">
            Tech <span className="text-pink-500">Stack</span>
          </h1>
          <p className="pt-2 text-muted-foreground max-w-2xl mx-auto">
            Technical Skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {Object.entries(technologies).map(([key, category], index) => (
            <motion.div
              key={key}
              {...motionProps("fadeIn", index)}
            >
              <Card className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/5 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  {/* Display skills as pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
