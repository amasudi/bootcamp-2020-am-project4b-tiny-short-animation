import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
export const Train = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateX(500%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      duration: 12000,
      iterations: Infinity,
    },
  });
  return (
    <div
      style={{
        position: "absolute",
        top: "68%",
        zIndex: 50,
        width: "100%",
        height: 200,
        backgroundPosition: "center",
        backgroundImage: "url('/assets/images/railway-track.png')",
      }}
    >
      <img ref={ref} src="/assets/images/train.gif" alt="Train" height="100" />
    </div>
  );
};
