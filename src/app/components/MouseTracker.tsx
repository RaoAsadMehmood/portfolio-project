// // components/MouseTracker.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const MouseTracker: React.FC = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicking, setIsClicking] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => setIsHovering(false);
//     const handleMouseDown = () => setIsClicking(true);
//     const handleMouseUp = () => setIsClicking(false);

//     window.addEventListener("mousemove", updateMousePosition);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     document.querySelectorAll("a, button").forEach((el) => {
//       el.addEventListener("mouseenter", handleMouseEnter);
//       el.addEventListener("mouseleave", handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener("mousemove", updateMousePosition);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);

//       document.querySelectorAll("a, button").forEach((el) => {
//         el.removeEventListener("mouseenter", handleMouseEnter);
//         el.removeEventListener("mouseleave", handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Main dot cursor */}
//       <motion.div
//         className="fixed pointer-events-none z-[9999]"
//         animate={{
//           x: mousePosition.x - 4,
//           y: mousePosition.y - 4,
//           scale: isClicking ? 0.5 : 1,
//         }}
//         transition={{ type: "spring", stiffness: 500, damping: 28 }}
//         style={{
//           width: "8px",
//           height: "8px",
//           borderRadius: "50%",
//           backgroundColor: "#00ffff",
//           boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff",
//         }}
//       />

//       {/* Circle ring */}
//       <motion.div
//         className="fixed pointer-events-none z-[9998]"
//         animate={{
//           x: mousePosition.x - 20,
//           y: mousePosition.y - 20,
//           scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
//           opacity: 1,
//           borderColor: isHovering ? "#00ffaa" : "#00ffff",
//         }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         style={{
//           width: "40px",
//           height: "40px",
//           borderRadius: "50%",
//           border: "1px solid #00ffff",
//           boxShadow: "0 0 5px rgba(0, 255, 255, 0.5)",
//         }}
//       />

//       {/* Outer glow ring */}
//       <motion.div
//         className="fixed pointer-events-none z-[9997]"
//         animate={{
//           x: mousePosition.x - 30,
//           y: mousePosition.y - 30,
//           scale: isHovering ? 1.3 : 1,
//           opacity: isHovering ? 0.8 : 0.3,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 200,
//           damping: 30,
//           delay: 0.05,
//         }}
//         style={{
//           width: "60px",
//           height: "60px",
//           borderRadius: "50%",
//           border: "1px solid rgba(0, 255, 255, 0.3)",
//           filter: "blur(1px)",
//         }}
//       />

//       {/* Floating particles */}
//       {[...Array(3)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="fixed pointer-events-none z-[9996]"
//           animate={{
//             x: mousePosition.x - 3 + Math.sin(Date.now() * 0.001 + i * 2) * 20,
//             y: mousePosition.y - 3 + Math.cos(Date.now() * 0.001 + i * 2) * 20,
//             opacity: isHovering ? 0.7 : 0.3,
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 100 + i * 50,
//             damping: 15,
//             mass: 0.8 + i * 0.2,
//           }}
//           style={{
//             width: "6px",
//             height: "6px",
//             borderRadius: "50%",
//             backgroundColor: "#00ffaa",
//             boxShadow: "0 0 8px #00ffaa",
//           }}
//         />
//       ))}

//       {/* Motion trail effect */}
//       <motion.div
//         className="fixed pointer-events-none z-[9995]"
//         animate={{
//           x: mousePosition.x - 25,
//           y: mousePosition.y - 25,
//           opacity: isClicking ? 0.7 : 0.2,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 150,
//           damping: 30,
//           delay: 0.1,
//         }}
//         style={{
//           width: "50px",
//           height: "50px",
//           borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, rgba(0, 255, 170, 0) 70%)",
//           filter: "blur(8px)",
//         }}
//       />
//     </>
//   );
// };

// export default MouseTracker;






// app/components/MouseTracker.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Pulse = {
  id: number;
  x: number;
  y: number;
};

const MouseTracker: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [pulses, setPulses] = useState<Pulse[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const handleClick = (e: MouseEvent) => {
      const newPulse: Pulse = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setPulses((prev) => [...prev, newPulse]);

      // Remove after 500ms
      setTimeout(() => {
        setPulses((prev) => prev.filter((p) => p.id !== newPulse.id));
      }, 500);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("click", handleClick);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("click", handleClick);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Click Pulses */}
      {pulses.map((pulse) => (
        <motion.div
          key={pulse.id}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed pointer-events-none z-[9995]"
          style={{
            top: pulse.y - 20,
            left: pulse.x - 20,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(255, 64, 64, 0.6)",
          }}
        />
      ))}

      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1 : 1.3,
          opacity: isHovering ? 0.8 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: isHovering
            ? "radial-gradient(circle, rgba(255, 64, 64, 0.7) 0%, rgba(255, 64, 64, 0) 70%)"
            : "radial-gradient(circle, rgba(255, 64, 64, 0.4) 0%, rgba(255, 64, 64, 0) 70%)",
          boxShadow: isHovering
            ? "0 0 25px rgba(255, 64, 64, 0.9), 0 0 45px rgba(255, 64, 64, 0.5)"
            : "0 0 20px rgba(255, 64, 64, 0.6), 0 0 35px rgba(255, 64, 64, 0.3)",
        }}
      />

      {/* Blurred Trail */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.1 : 1.4,
          opacity: isHovering ? 0.3 : 0.15,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 64, 64, 0.3) 0%, rgba(255, 64, 64, 0) 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Orbiting Dots */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[9996]"
          animate={{
            x:
              mousePosition.x -
              3 +
              Math.sin(Date.now() * 0.001 + i * 2) * (isHovering ? 10 : 18),
            y:
              mousePosition.y -
              3 +
              Math.cos(Date.now() * 0.001 + i * 2) * (isHovering ? 10 : 18),
            opacity: isHovering ? 0.9 : 0.4,
          }}
          transition={{
            type: "spring",
            stiffness: 100 + i * 50,
            damping: 15,
            mass: 0.8 + i * 0.2,
          }}
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 64, 64, 0.8)",
            boxShadow: "0 0 8px rgba(255, 64, 64, 0.5)",
          }}
        />
      ))}
    </>
  );
};

export default MouseTracker;
