import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
export const JetPlane = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateX(-100%)" },
      { transform: "translateX(1000%)", top: "40%" },
      { transform: "translateX(2000%)", top: "40%" },
      { transform: "translateX(3000%)", top: "2%" },
    ],
    timing: {
      duration: 7200,
      iterations: Infinity,
    },
  });
  return (
    <div
      ref={ref}
      style={{ top: 100, left: "2%", position: "absolute", zIndex: 25 }}
    >
      <img src="/assets/images/jet.png" alt="Jet" style={{ width: 50 }} />
    </div>
  );
};
