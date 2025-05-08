// components/LayoutClientWrapper.tsx
"use client";

import SpotlightBackground from "./SpotLightBackground";
import { ReactNode } from "react";

export default function LayoutClientWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <SpotlightBackground />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
