"use client"; // Enables client-side behavior (hooks, clicks)

import { useState } from "react";
import Link from "next/link";
import "./ColorPicker.scss";
import ColorButton from "./ColorButton";

export default function ColorPicker() {
  // Step 1: Create a piece of state to track background color.
  const [bg, setBg] = useState("white");

  // Step 2: Define your palette array of colors (name + hex value).
  const palette = [
    { name: "Red", hex: "#f87171" },
    { name: "Blue", hex: "#60a5fa" },
    { name: "Green", hex: "#34d399" },
    { name: "Yellow", hex: "#fbbf24" },
  ];

  return (
    <div className="color-picker" style={{ backgroundColor: bg }}>
      <h1 className="solution-title">Code-Along: Color Picker</h1>
      <p className="solution-subtitle">
        Follow the steps to make the background change colors!
      </p>

      {/* Step 3: Map through your palette and render a ColorButton for each color. */}
      {palette.map((c) => (
        <ColorButton key={c.name} color={c.hex} onPick={setBg} />
      ))}

      <div className="nav-links">
        <Link href="/" className="nav-btn home">
          Back to Home
        </Link>
        <Link href="/colorpicker/solution" className="nav-btn back">
          View Solution
        </Link>
      </div>
    </div>
  );
}
