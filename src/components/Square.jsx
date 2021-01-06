import React from "react";
import { Rect } from "react-konva";

const Square = ({ x, y, height, width, onFill, fill = "" }) => {
  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke="#333"
      shadowBlur={1}
      onClick={onFill}
    />
  );
};

export default Square;
