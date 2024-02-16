import React from "react";
import BlurredCircle from "./BlurredCircle";

export default function BackgroundCircularBlur({
  circlePositions,
  children,
}: {
  circlePositions: CircleCoordinates[];
  children:
    | React.ReactElement
    | Array<React.ReactNode>
    | React.ReactPortal
    | React.ReactNode;
}) {
  return (
    <section className="relative w-full overflow-hidden">
      {circlePositions.map((pos, idx) => (
        <BlurredCircle key={`diffused_circle_${idx}`} circlePosition={pos} />
      ))}
      <section className="backdrop-filter backdrop-blur-3xl w-full">
        {children}
      </section>
    </section>
  );
}
