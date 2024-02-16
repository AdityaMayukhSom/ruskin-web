import React from "react";

export default function BlurredCircle({
  circlePosition,
}: {
  circlePosition: CircleCoordinates;
}) {
  let circlePositionCSS: React.CSSProperties = {};

  if (circlePosition.top && circlePosition.left) {
    circlePositionCSS = {
      top: `${circlePosition.top}rem`,
      left: `${circlePosition.left}rem`,
    };
  } else if (circlePosition.top && circlePosition.right) {
    circlePositionCSS = {
      top: `${circlePosition.top}rem`,
      right: `${circlePosition.right}rem`,
    };
  } else if (circlePosition.bottom && circlePosition.left) {
    circlePositionCSS = {
      bottom: `${circlePosition.bottom}rem`,
      left: `${circlePosition.left}rem`,
    };
  } else if (circlePosition.bottom && circlePosition.right) {
    circlePositionCSS = {
      bottom: `${circlePosition.bottom}rem`,
      right: `${circlePosition.right}rem`,
    };
  }

  return (
    <div
      className="absolute flex items-center justify-center"
      style={circlePositionCSS}
    >
      <div className="absolute w-120 h-120 rounded-full bg-secondary-font-color bg-opacity-15 "></div>
    </div>
  );
}
