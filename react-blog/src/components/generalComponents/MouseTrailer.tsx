import React, { useRef, useEffect } from "react";
import "./MouseTrailer.css";

interface Coords {
  x: number;
  y: number;
}

interface Circle extends HTMLDivElement {
  x: number;
  y: number;
}

const MouseTrailer: React.FC = () => {
    const circlesRef = useRef<NodeListOf<Circle> | null>(null);
    const coordsRef = useRef<Coords>({ x: 0, y: 0 });
  
    const handleMouseMove = (e: MouseEvent) => {
      coordsRef.current.x = e.clientX;
      coordsRef.current.y = e.clientY;
    };
  
    useEffect(() => {
      circlesRef.current = document.querySelectorAll(".circle");
  
      const circles = circlesRef.current;
      if (circles) {
        circles.forEach((circle) => {
          circle.x = 0;
          circle.y = 0;
        });
  
        window.addEventListener("mousemove", handleMouseMove);
  
        const animateCircles = () => {
          let x = coordsRef.current.x;
          let y = coordsRef.current.y;
  
          circles.forEach((circle, index) => {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";
  
            circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
  
            circle.x = x;
            circle.y = y;
  
            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.7;
            y += (nextCircle.y - y) * 0.7;
          });
  
          requestAnimationFrame(animateCircles);
        };
  
        animateCircles();
      }
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    return (
      <>
        <div className="circle" style={{ position: "absolute" }}></div>
        <div className="circle" style={{ position: "absolute" }}></div>
        <div className="circle" style={{ position: "absolute" }}></div>
        <div className="circle" style={{ position: "absolute" }}></div>
        <div className="circle" style={{ position: "absolute" }}></div>
      </>
    );
  };

export default MouseTrailer;
  
