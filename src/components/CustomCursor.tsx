
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "global-liquid-cursor";
    document.body.appendChild(glow);

    let frame = 0;
    let targetX = -300;
    let targetY = -300;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      glow.style.transform =
        `translate3d(${currentX - 140}px, ${currentY - 140}px, 0)`;

      frame = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    frame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(frame);
      glow.remove();
    };
  }, []);

  return null;
}
