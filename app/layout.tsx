"use client"

// layout file
import './globals.css';
import { Inter } from '@next/font/google';
import { useState, useEffect } from 'react';
import LoadingScreen from "@/components/loading";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';


const inter = Inter({ subsets: ['latin'] });
const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact"},
];

export default function RootLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if the document is already loaded
        if (document.readyState === 'complete') {
            setIsLoading(false);
        } else {
            // Listen for the window load event
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
