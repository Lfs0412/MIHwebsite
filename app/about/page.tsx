"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { GoRocket, GoLightBulb, GoOrganization } from "react-icons/go";
import { Card } from "@/components/blocks/cards-demo-1";
import {
    CardDescription,
    CardTitle,
} from "@/components/blocks/cards-demo-3";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero and Vision/Mission/Values Section */}
            <div className="relative">
                <AuroraBackground className="z-50">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col gap-4 items-center justify-center text-center px-4 py-8 md:py-16"
                    >
                        <h1 className="text-3xl md:text-6xl font-bold dark:text-white">
                            Our Story
                        </h1>
                        <p className="font-light text-lg md:text-2xl dark:text-neutral-200">
                            Pioneering the future of AI-enhanced workforce solutions
                        </p>
                    </motion.div>

                    {/* Vision, Mission & Values Section */}
                    <div className="mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                            {[
                                {
                                    title: "Our Vision",
                                    description:
                                        "To create a world where human potential is maximized through AI collaboration. We strive to empower individuals and businesses to achieve their goals by harnessing the power of advanced AI technology.",
                                    icon: (
                                        <GoRocket className="text-4xl text-gray-400 mb-4" />
                                    ),
                                },
                                {
                                    title: "Our Mission",
                                    description:
                                        "Delivering innovative AI solutions that enhance and empower the workforce. Our mission is to develop tools that streamline processes and unlock new possibilities for growth and success.",
                                    icon: (
                                        <GoLightBulb className="text-4xl text-gray-400 mb-4" />
                                    ),
                                },
                                {
                                    title: "Our Values",
                                    description:
                                        "Excellence, Innovation, and Human-Centric Development. We prioritize the people behind the technology, ensuring our solutions are as intuitive as they are impactful.",
                                    icon: (
                                        <GoOrganization className="text-4xl text-gray-400 mb-4" />
                                    ),
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-center flex flex-col items-center p-6"
                                >
                                    <Card className="flex flex-col items-center max-w-xs mx-auto">
                                        {item.icon}
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDescription className="text-lg text-gray-700 dark:text-neutral-300">
                                            {item.description}
                                        </CardDescription>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AuroraBackground>
            </div>

            {/* Team Section */}
            <section className="py-8 md:py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Team
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Meet the experts behind our innovative solutions
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                name: "Dr. Sarah Chen",
                                role: "Chief AI Officer",
                                bio: "Leading AI researcher with over 15 years of experience in AI technology and development.",
                                image: "https://via.placeholder.com/150",
                            },
                            {
                                name: "Michael Rodriguez",
                                role: "Head of Innovation",
                                bio: "Former Silicon Valley executive and tech pioneer with a focus on innovative solutions.",
                                image: "https://via.placeholder.com/150",
                            },
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}>
                                <Card>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4"
                                />
                                <CardTitle>{member.name}</CardTitle>
                                <p className="text-gray-500 dark:text-neutral-400 mb-2">
                                    {member.role}
                                </p>
                                <CardDescription className="text-base text-gray-700 dark:text-neutral-300">
                                    {member.bio}
                                </CardDescription>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
