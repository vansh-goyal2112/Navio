"use client";

import { useEffect, useRef, useState } from "react";

export default function MapCanvas({ nodes, edges, path }) {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 1, height: 1 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[700px] border bg-white"
    >
      {/* Floorplan */}
      <img
        src="/image/testplan.jpeg"
        className="absolute w-full h-full object-contain"
      />

      {/* SVG Layer */}
      <svg className="absolute w-full h-full">
        {/* Edges */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#bbb"
            strokeWidth="2"
          />
        ))}

        {/* Path */}
        {path.map((node, i) => {
          if (i === 0) return null;
          const prev = path[i - 1];

          return (
            <line
              key={`path-${i}`}
              x1={nodes[prev].x}
              y1={nodes[prev].y}
              x2={nodes[node].x}
              y2={nodes[node].y}
              stroke="red"
              strokeWidth="4"
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {Object.entries(nodes).map(([key, node]) => (
        <div
          key={key}
          className="absolute w-3 h-3 bg-blue-500 rounded-full"
          style={{
            left: node.x,
            top: node.y,
            transform: "translate(-50%, -50%)"
          }}
          title={node.label}
        />
      ))}
    </div>
  );
}