import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
export const Cloud1 = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateX(-100%)" },
      { transform: "translateX(800%)" },
    ],
    timing: {
      duration: 100000,
      iterations: Infinity,
    },
  });
  return (
    <div ref={ref} style={{ top: 50, left: "10%", position: "absolute" }}>
      <img
        src="/assets/images/cloud1.png"
        alt="Cloud 1"
        style={{ width: 200 }}
      />
    </div>
  );
};
