"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
                                     words,
                                     className,
                                     cursorClassName,
                                 }: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    display: "inline-block",
                    opacity: 1,
                    width: "fit-content",
                },
                {
                    duration: 0.3,
                    delay: stagger(0.1),
                    ease: "easeInOut",
                }
            );
        }
    }, [isInView]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="inline whitespace-nowrap">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block mr-2"> {/* Add margin here */}
                            {word.text.map((char, index) => (
                                <motion.span
                                    key={`char-${index}`}
                                    className={cn(
                                        "dark:text-white text-black opacity-0 hidden",
                                        word.className
                                    )}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div
            className={cn(
                "text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center",
                className
            )}
        >
            {renderWords()}

        </div>
    );
};
