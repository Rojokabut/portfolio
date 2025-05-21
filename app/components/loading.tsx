"use client";

import React from "react";
import Image from "next/image";

export default function Loading({ onImageError }: { onImageError?: () => void }) {
  return (
    <div className="flex items-center justify-center h-screen bg-[#070713]">
      <Image
        src="/progress-bar.gif"
        width={500}
        height={500}
        alt="loading"
        className="rounded-3xl"
        onError={onImageError}
      />
    </div>
  );
}
