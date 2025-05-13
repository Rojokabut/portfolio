"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#070713]">
      <img src="/progress-bar.gif" alt="loading" className="rounded-3xl"/>
    </div>
  );
}
