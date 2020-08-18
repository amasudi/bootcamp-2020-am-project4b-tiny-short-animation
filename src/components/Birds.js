import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
export const Birds = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateX(500%)" },
      { transform: "translateX(-500%)" },
    ],
    timing: {
      duration: 36000,
      iterations: Infinity,
    },
  });
  return (
    <div
      ref={ref}
      style={{ top: 25, left: "40%", position: "absolute", zIndex: 100 }}
    >
      <img src="/assets/images/birds.gif" alt="Birds" style={{ width: 200 }} />
    </div>
  );
};
