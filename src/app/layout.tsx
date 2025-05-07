// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientMouseTracker from "../app/components/ClientMouseTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rao Asad Mehmood ",
  description: "A wesbite showcasing my skills and projects",
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
      </body>
    </html>
  );
}