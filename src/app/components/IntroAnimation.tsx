'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const IntroAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 });

        tl.to(leftPanelRef.current, {
            x: '-100%',
            duration: 1,
            ease: 'power2.inOut',
        })
            .to(
                rightPanelRef.current,
                {
                    x: '100%',
                    duration: 1,
                    ease: 'power2.inOut',
                },
                '<'
            )
            .to(
                textRef.current,
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    duration: 1,
                    ease: 'power2.out',
                },
                '-=0.5'
            )
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 0.5,
                onComplete: () => {
                    if (containerRef.current) {
                        containerRef.current.style.display = 'none';
                    }
                },
            });
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
            {/* Panels */}
            <div className="absolute inset-0 flex">
                <div
                    ref={leftPanelRef}
                    className="w-[55%] h-full bg-black z-10"
                />
                <div
                    ref={rightPanelRef}
                    className="w-[55%] h-full bg-black z-10"
                />
            </div>

            {/* Animated Text */}
            <div
                ref={textRef}
                className="relative z-20 text-white text-[2.8rem] md:text-[4.5rem] font-bold px-4 text-center"
                style={{
                    clipPath: 'inset(100% 0% 0% 0%)',
                    fontFamily: "'Caveat', cursive",

                }}
            >
                Rao Asad Mehmood
                {/* Green glow behind using pseudo-style */}
                <div className="absolute inset-0 -z-10 rounded-full" />
            </div>
        </div>
    );
};

export default IntroAnimation;
