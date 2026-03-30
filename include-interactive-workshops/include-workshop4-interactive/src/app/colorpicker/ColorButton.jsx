"use client"; // Needed for interactivity

import "./ColorButton.scss";

// ✏️ Step 4: Add props here → it should receive { color, onPick } from the parent.
export default function ColorButton({ color, onPick }) {
  return (
    // ✏️ Step 5: Add a <button> with:
    // - className="color-btn"
    // - style={{ backgroundColor: color }}
    // - onClick={() => onPick(color)}
    <button 
      className="color-btn"
      style={{ backgroundColor: color }}
      onClick={() => onPick(color)}
    >
      {color}
    </button>
  );
}
