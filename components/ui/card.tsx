import {motion, AnimatePresence} from "framer-motion";
import React from "react";

export const HoverCard = ({
                  title,
                  icon,
                  children,
              }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"/>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="h-full w-full absolute inset-0"
                        exit={{opacity: 0}}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                className={`relative z-20 transition-opacity duration-300 ${
                    hovered ? "opacity-0" : "opacity-100"
                }`}
            >
                <div className="text-center w-full mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white text-xl relative z-10 text-black mt-4 font-bold">
                    {title}
                </h2>
            </div>
        </div>
    );
};


export const Icon = ({className, ...rest}: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
        </svg>
    );
};