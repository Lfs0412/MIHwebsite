"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
                                     className,
                                     children,
                                     showRadialGradient = true,
                                     ...props
                                 }: AuroraBackgroundProps) => {


    return (
        <div className="relative flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg">
            <div className="absolute inset-0 overflow-hidden">
                {/* Conditionally render the background effect only on non-mobile devices */}
                    <div
                        className={cn(
                            `
              [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
              [background-image:var(--aurora)]
              dark:[background-image:var(--aurora)]
              [background-size:200%]
          
             
              absolute -inset-[5px] opacity-50 will-change-transform`,
                            showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
                            className
                        )}
                    ></div>
            </div>
            {children}
        </div>
    );
};
