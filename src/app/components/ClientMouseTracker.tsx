// app/components/ClientMouseTracker.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import MouseTracker with SSR disabled
const MouseTracker = dynamic(() => import("./MouseTracker"), {
  ssr: false, // Disable SSR for MouseTracker
});

export default function ClientMouseTracker() {
  return <MouseTracker />;
}