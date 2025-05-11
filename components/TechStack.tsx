"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  
  const toggleCategory = (key: string) => {
    const row = cardPositions[key]
    
    if (selectedCategory === key) {
      // Collapse the current row
      setExpandedRows(prev => ({...prev, [row]: false}))
      setSelectedCategory(null)
    } else {
      // Expand the current row
      setExpandedRows(prev => ({...prev, [row]: true}))
      setSelectedCategory(key)
    }
  }
  
  const isInExpandedRow = (key: string) => {
    const row = cardPositions[key]
    return expandedRows[row] === true
  }

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming Languages",
      description: "Core languages for system, web, and AI development",
      skills: [
        { name: "C++", level: 90 },
        { name: "C", level: 85 },
        { name: "Java", level: 88 },
        { name: "C#", level: 80 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 92 },
        { name: "SQL", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "MATLAB", level: 70 },
      ],
    },
    concepts: {
      icon: <Binary className="h-6 w-6" />,
      title: "Engineering Concepts",
      description: "Solid foundation in software and system architecture",
      skills: [
        { name: "Data Structures", level: 95 },
        { name: "Algorithms", level: 90 },
        { name: "OOP", level: 95 },
        { name: "Design Patterns", level: 85 },
        { name: "System Design", level: 85 },
        { name: "Multithreading", level: 80 },
      ],
    },
    frontend: {
      icon: <Layout className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Modern, responsive UI development with robust tooling",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "Svelte", level: 75 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Blazor", level: 80 },
        { name: "MAUI", level: 78 },
        { name: "Figma", level: 80 },
      ],
    },
    backend: {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Efficient APIs and server-side logic",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Spring Boot", level: 82 },
        { name: "Ruby on Rails", level: 75 },
        { name: ".NET Core", level: 90 },
        { name: "GraphQL", level: 80 },
      ],
    },
    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Database Systems",
      description: "Experience with relational and NoSQL databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Redis", level: 70 },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Development Tools",
      description: "Tooling for modern development and deployment",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 90 },
        { name: "AWS", level: 85 },
        { name: "GCP", level: 80 },
        { name: "Azure", level: 80 },
        { name: "Linux/Unix", level: 85 },
        { name: "Jira", level: 80 },
        { name: "CI/CD", level: 75 },
      ],
    },
    ai: {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & Data Science",
      description: "Applied machine learning and data analysis",
      skills: [
        { name: "PyTorch", level: 70 },
        { name: "Scikit-learn", level: 75 },
        { name: "LangChain", level: 90 },
        { name: "Pandas/Numpy", level: 90 },
        { name: "RAG", level: 90 },
        { name: "Tableau", level: 85 },
      ],
    },
  }
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          {...motionProps()}
          className="text-center mb-10"
        >
          <h1 className='heading'>
            Tech <span className='text-purple'>Stack</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {Object.entries(technologies).map(([key, category], index) => (
            <motion.div
              key={key}
              {...motionProps("fadeIn", index)}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg`}
                onClick={() => toggleCategory(key)}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isInExpandedRow(key) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-purple h-1.5 rounded-full"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isInExpandedRow(key) && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm py-1">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary" className="text-sm py-1">+{category.skills.length - 3} more</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
