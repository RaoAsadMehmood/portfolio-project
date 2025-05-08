"use client";
import { useRef, useEffect } from "react";

const SpotlightBackground = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const bounds = ref.current?.getBoundingClientRect();
      if (!ref.current || !bounds) return;

      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      ref.current.style.backgroundImage = `
        radial-gradient(600px circle at ${x}px ${y}px,
        rgba(20, 184, 166, 0.2), rgba(0, 0, 0, 0.95))
      `;
    };

    const el = ref.current;
    el?.addEventListener("mousemove", handleMouseMove);

    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 -z-10 bg-black transition-all duration-1000"
    />
  );
};

export default SpotlightBackground;
