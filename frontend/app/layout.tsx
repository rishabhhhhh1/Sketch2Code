import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "./context/AuthContext"; 


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sketch2Code - AI UI Generator",
  description: "Convert sketches to code instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 🔴 Added 'antialiased' for sharper text */}
      <body className={`${inter.className} bg-[#020617] text-white antialiased`}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}