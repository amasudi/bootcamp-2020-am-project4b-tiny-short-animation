import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
export const Cloud2 = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateX(300%)" },
      { transform: "translateX(-1000%)" },
    ],
    timing: {
      duration: 150000,
      iterations: Infinity,
    },
  });
  return (
    <div ref={ref} style={{ top: 100, right: "20%", position: "absolute" }}>
      <img
        src="/assets/images/cloud2.png"
        alt="Cloud 2"
        style={{ width: 125 }}
      />
    </div>
  );
};
