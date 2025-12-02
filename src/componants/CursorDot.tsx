import { useEffect, useState } from "react";

const CursorDot: React.FC = () => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] transition-transform duration-100"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
    />
  );
};

export default CursorDot;
