import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ecommerce",
    description: "Ecommerce website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <nav className="border-b px-6 py-4">
                    <Link href="/" className="font-semibold mr-4">
                        Home
                    </Link>
                    <Link
                        href="/products"
                        className="text-blue-600 hover:underline"
                    >
                        Products
                    </Link>
                </nav>
                {children}
            </body>
        </html>
    );
}
