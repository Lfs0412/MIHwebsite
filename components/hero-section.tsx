"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, Brain, Cpu, Network } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Geometric patterns */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                We enhance your{" "}
                <span className="text-primary">human workforce</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-lg sm:text-xl">
                Empower your business with intelligent AI solutions that work
                alongside your team to achieve extraordinary results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="space-y-2"
                >
                  <h4 className="text-2xl font-bold">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:pl-16"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-72 w-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -right-4 -bottom-4 h-72 w-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-2xl border bg-card p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const stats = [
  {
    value: "98%",
    label: "Task Automation",
  },
  {
    value: "24/7",
    label: "AI Support",
  },
  {
    value: "500+",
    label: "Clients Worldwide",
  },
]

const features = [
  {
    title: "Smart Automation",
    description: "Automate repetitive tasks with intelligent workflows",
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    title: "Neural Networks",
    description: "Advanced AI models for complex problem-solving",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    title: "Deep Learning",
    description: "Continuous improvement through machine learning",
    icon: <Network className="h-6 w-6" />,
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights",
    icon: <Brain className="h-6 w-6" />,
  },
]