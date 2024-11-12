"use client";

import { motion } from "framer-motion";
import { ArrowDown, Brain, Cpu, LineChart } from "lucide-react";
import Image from "next/image";
import { HoverCard } from "@/components/ui/card";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };
    const words = [
        {
            text: "MAKE ",
            className: "text-gray-200 text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-bold",
        },
        {
            text: "IT ",
            className: "text-gray-200 text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-bold",
        },
        {
            text: "HAPPEN",
            className:
                "bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-bold",
        },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative flex min-h-screen overflow-visible">
                {/* Left Div */}
                <BackgroundGradientAnimation
                    className="w-full md:w-1/2 flex flex-col justify-center"
                    containerClassName="w-full md:w-1/2"
                    firstColor="234, 20, 29"
                    secondColor="255, 255, 255"
                    thirdColor="81, 173, 218"
                    fourthColor="81, 173, 218"
                    fifthColor="234, 20, 29"
                    pointerColor="234, 20, 29"
                    size="80%"
                >
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none overflow-hidden px-4"
                    >
                        {/* Typewriter Text */}
                        <TypewriterEffect className="text-center mb-10 sm:mb-12" words={words} />

                        {/* Slogan */}
                        <p className=" font-light text-lg md:text-xl lg:text-2xl text-white text-center max-w-xl mt-10 sm:mt-16">
                            Empowering businesses with AI solutions that complement and elevate the{' '}
                            human workforce
                        </p>

                        {/* Scroll Down Indicator */}
                        <motion.div
                            className="absolute bottom-10 sm:bottom-12 cursor-pointer"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
                        >
                            <ArrowDown className="w-10 h-10 sm:w-12 sm:h-12 text-white animate-bounce" />
                        </motion.div>
                    </div>
                </BackgroundGradientAnimation>

                {/* Right Div */}
                <div className="hidden md:block w-1/2 relative">
                    <Image
                        src="/images/ai.jpg" // Replace with your image path
                        alt="luxembourg"
                        layout="fill"
                        objectFit="cover"
                        className="filter grayscale"
                    />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-muted/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Our AI Solutions</h2>
                        <p className="text-lg text-muted-foreground">
                            Transformative technologies that drive business growth
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Cognitive Analytics",
                                description: "Advanced data analysis powered by machine learning",
                                icon: Brain,
                            },
                            {
                                title: "Process Automation",
                                description: "Streamline operations with intelligent automation",
                                icon: Cpu,
                            },
                            {
                                title: "Predictive Insights",
                                description: "Data-driven forecasting for informed decisions",
                                icon: LineChart,
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <HoverCard
                                    title={service.title}
                                    icon={<service.icon className="w-12 h-12 text-black dark:text-white" />}
                                >
                                    <CanvasRevealEffect
                                        animationSpeed={5}
                                        containerClassName="bg-sky-600"
                                        colors={[[125, 211, 252]]}
                                        dotSize={3}
                                    />
                                    {/* Radial gradient for the fade effect */}
                                    <div
                                        className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90"
                                    />

                                    {/* Display the description inside the Card on hover */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <p className="text-white text-center p-4">
                                            {service.description}
                                        </p>
                                    </div>
                                </HoverCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
