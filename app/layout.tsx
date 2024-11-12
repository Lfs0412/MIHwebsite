"use client";

// layout file
import './globals.css';
import { Inter } from '@next/font/google';
import { ReactNode, useState, useEffect } from 'react';
import LoadingScreen from "@/components/loading";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });
const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
];

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === 'complete') {
            setIsLoading(false);
        } else {
            window.addEventListener('load', () => {
                setIsLoading(false);
            });
        }
    }, []);

    return (
        <html lang="en">
        <body className={`${inter.className} bg-background text-foreground`}>
        {isLoading && <LoadingScreen />}
        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <Navbar navItems={navItems} />
            {children}
            <Footer />
        </div>
        </body>
        </html>
    );
}
