"use client";
import React, { useRef, useEffect } from "react";

const HeroAnimation = () => {
  interface Particle {
    x: number;
    y: number;
    z: number;
    size: number;
    opacity: number;
  }
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const radius = 150;
  const particleCount = 800;

  const angleRef = useRef(0);
  const smoothRotationRef = useRef(0);
  const isInteractingRef = useRef(false);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    // Create particles on sphere surface
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      particles.push({
        x,
        y,
        z,
        size: Math.random() * 2 + 2,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    particlesRef.current = particles;

    // --- Interaction Handlers ---
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseXRef.current = e.clientX - rect.left;
      mouseYRef.current = e.clientY - rect.top;
      isInteractingRef.current = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseXRef.current = touch.clientX - rect.left;
      mouseYRef.current = touch.clientY - rect.top;
      isInteractingRef.current = true;
    };

    const stopInteraction = () => {
      isInteractingRef.current = false;
    };

    // --- Event Listeners ---
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", stopInteraction);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", stopInteraction);

    // --- Draw Functions ---
    const drawBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const drawSphere = () => {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Faster rotation for small screens
      const rotationSpeed = window.innerWidth < 768 ? 0.0001 : 0.00005;
      angleRef.current += rotationSpeed * 60;
      smoothRotationRef.current +=
        (angleRef.current - smoothRotationRef.current) * 0.05;
      const rotation = smoothRotationRef.current;

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        const cosY = Math.cos(rotation);
        const sinY = Math.sin(rotation);

        const x = p.x * cosY - p.z * sinY;
        const z = p.x * sinY + p.z * cosY;

        const scale = 300 / (300 + z);
        const px = cx + x * scale;
        const py = cy + p.y * scale;

        let size = p.size * scale;
        let opacity = p.opacity;

        // Touch/hover glow
        if (isInteractingRef.current) {
          const dx = px - mouseXRef.current;
          const dy = py - mouseYRef.current;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const intensity = (100 - dist) / 100;
            size += intensity * 4;
            opacity = Math.min(1, 0.3 + intensity * 0.8);
          }
        }

        const grd = ctx.createRadialGradient(px, py, 0, px, py, size * 2);
        grd.addColorStop(0, `rgba(255, 215, 0, ${opacity})`);
        grd.addColorStop(0.5, `rgba(255, 215, 0, ${opacity * 0.5})`);
        grd.addColorStop(1, "rgba(255, 215, 0, 0)");

        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      drawBackground();
      drawSphere();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", stopInteraction);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", stopInteraction);
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center relative z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          backgroundColor: "transparent",
          touchAction: "none",
        }}
      />
    </div>
  );
};

export default HeroAnimation;
