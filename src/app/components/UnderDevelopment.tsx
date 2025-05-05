// components/UnderDevelopment.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const UnderDevelopment: React.FC = () => {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(
      headingRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1 }
    )
      .fromTo(
        subtextRef.current,
        { opacity: 0 },
        { opacity: 1 },
        "-=0.5" // overlap animation
      )
      .fromTo(
        linkRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0 },
        "-=0.5"
      );
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1
        ref={headingRef}
        className="text-white text-4xl md:text-6xl font-bold text-center relative"
      >
        This Page is Under Development
        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-1/2 h-1 bg-[#ff4040] rounded-full" />
      </h1>

      <p
        ref={subtextRef}
        className="text-white/70 text-lg md:text-xl mt-6 text-center"
      >
        We&apos;re working hard to bring this page to life. Check back soon!
      </p>

      <div ref={linkRef} className="mt-8">
        <Link href="/">
          <span className="text-[#ff4040] hover:underline text-lg md:text-xl transition-all duration-300">
            Go Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default UnderDevelopment;
