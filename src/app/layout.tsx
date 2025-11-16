// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientMouseTracker from "../app/components/ClientMouseTracker";
import WhatsAppButton from "./components/WhatsAppButton";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rao Asad Mehmood ",
  description: "A website showcasing my skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <ClientMouseTracker />
        {children}
        
        {/* WhatsApp Button: Ab yeh button aapki website ke har page par float karega */}
        <WhatsAppButton /> 
        
      </body>
    </html>
  );
}
