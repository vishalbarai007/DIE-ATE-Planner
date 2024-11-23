"use client";
import React from "react";
import { BackgroundBeams } from "../support/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full absolute z-0 rounded-md bg-neutral-950 flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
      </div>
      <BackgroundBeams />
    </div>
  );
}
