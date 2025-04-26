"use client";
import React, { useEffect, useState } from 'react';

export default function Back() {
  const [matrix, setMatrix] = useState<number[][]>([]);

  useEffect(() => {
    const columns = 500;
    const rows = 50;

    const newMatrix = Array.from({ length: columns }, () =>
      Array.from({ length: rows }, () => Math.round(Math.random()))
    );

    setMatrix(newMatrix);
  }, []);

  return (
    <div className="absolute z-9 overflow-hidden">
      <div className="w-full h-full flex flex-wrap opacity-10 text-green-400 text-xs font-mono leading-none select-none pointer-events-none">
        {matrix.map((column, i) => (
          <div key={i} className="flex flex-col space-y-1 px-1 animate-bounce-slow">
            {column.map((bit, j) => (
              <span key={j}>{bit}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
