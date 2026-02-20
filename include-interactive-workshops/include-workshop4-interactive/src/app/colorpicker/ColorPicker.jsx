"use client"; // Enables client-side behavior (hooks, clicks)

import { useState } from "react";
import Link from "next/link";
import "./ColorPicker.scss";
import ColorButton from "./ColorButton";

export default function ColorPicker() {

  const [bg, setBg] = useState("white");

  // Step 1: Create a piece of state to track background color.
  // Example: const [bg, setBg] = useState("white");

  // Step 2: Define your palette array of colors (name + hex value).
  // Example:
  // const palette = [
  //   { name: "Red", hex: "#f87171" },
  //   { name: "Blue", hex: "#60a5fa" },
  //   { name: "Green", hex: "#34d399" },
  //   { name: "Yellow", hex: "#fbbf24" },
  // ];
  const palette = [
    { name: "Aqua", hex: "#00FFFF" },
    { name: "Maroon", hex: "#800000" },
    { name: "Amber", hex: "#FFBF00" },
  ];

  // Temporary fallback so the page runs before we fill in code.
  // You can remove these after adding your useState and palette above.

  return (
    <div className="color-picker" style={{ backgroundColor: bg }}>
      <h1 className="solution-title">Code-Along: Color Picker</h1>
      <p className="solution-subtitle">
        Follow the steps to make the background change colors!
      </p>

      {/* Step 3: Map through your palette and render a ColorButton for each color. */}
      {/* Example:
          {palette.map((c) => (
            <ColorButton key={c.name} color={c.hex} onPick={setBg} />
          ))}
      */}
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
