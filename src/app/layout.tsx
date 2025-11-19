// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientMouseTracker from "../app/components/ClientMouseTracker";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rao Asad Mehmood",
  description: "My personal portfolio website showcasing my skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      {/* CALENDLY WIDGET CODE - Placed in the head for proper loading
        NOTE: Next.js <Head> is replaced by metadata/root layout elements. 
        We use the standard <head> equivalent elements directly in the html structure.
      */}
      <head>
        {/* Calendly CSS */}
        <link 
          href="https://assets.calendly.com/assets/external/widget.css" 
          rel="stylesheet" 
        />
        {/* Calendly JS - Async loading */}
        <script 
          src="https://assets.calendly.com/assets/external/widget.js" 
          type="text/javascript" 
          async 
        />
      </head>

      <body className={`${inter.className} bg-black text-white`}>
        {/* <ClientMouseTracker /> */}
        <main>
          {children}
        </main>
        
        {/* WhatsApp Button */}
        <WhatsAppButton /> 
        
        {/* Footer Component */}
        <Footer />

        {/* CALENDLY INITIALIZATION SCRIPT 
          This script initializes the badge widget after the page loads. 
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                Calendly.initBadgeWidget({ 
                  url: 'https://calendly.com/asadrao2489/30min', 
                  // Custom text for smaller button, same color as your indigo buttons
                  text: 'Book a Call', 
                  color: '#4f46e5', // Tailwind indigo-600 ke qareeb color
                  textColor: '#ffffff', 
                  branding: true 
                }); 
              }
            `,
          }}
        />
        
      </body>
    </html>
  );
}