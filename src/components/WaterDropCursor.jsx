import React, { useEffect, useState, useCallback } from 'react';

const WaterDropCursor = () => {
  const [drops, setDrops] = useState([]);

  const addDrop = useCallback((e) => {
    const newDrop = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };
    
    setDrops((prev) => [...prev, newDrop]);

    // Remove drop after animation completes
    setTimeout(() => {
      setDrops((prev) => prev.filter((drop) => drop.id !== newDrop.id));
    }, 1000); 
  }, []);

  useEffect(() => {
    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime > 60) { // Create a drop every 60ms while moving
        addDrop(e);
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [addDrop]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute border border-secondary rounded-full animate-ripple"
          style={{
            left: drop.x,
            top: drop.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default WaterDropCursor;
