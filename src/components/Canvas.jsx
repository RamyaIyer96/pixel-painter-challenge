import React, { useState, useEffect } from "react";
import { Stage, Layer } from "react-konva";
import Square from "./Square";
import { CanvasContainer } from "./Canvas.styles";

const Canvas = ({ canvasHeight, canvasWidth, tool, color }) => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const response = [];
    for (let x = 0; x < canvasWidth; x += 15) {
      for (let y = 0; y < canvasHeight; y += 15) {
        response.push({
          id: `${x}-${y}`,
          x: x + 10,
          y: y + 10,
          height: 15,
          width: 15,
        });
      }
    }
    setSquares(response);
  }, [canvasHeight, canvasWidth, setSquares]);

  const fillColor = (sqareIdx) => {
    const existingColor = squares?.[sqareIdx]?.fill || "";
    const newSquares = squares.map((square, idx) => {
      if (
        (tool === "pencil" && idx === sqareIdx) ||
        (tool === "floodFill" && (square.fill || "") === existingColor)
      ) {
        square.fill = color;
      }
      return square;
    });
    setSquares(newSquares);
  };

  return (
    <CanvasContainer>
      <Stage width={canvasWidth} height={canvasHeight}>
        <Layer>
          {squares.map((square, idx) => (
            <Square
              key={square.id}
              idx={idx}
              onFill={() => {
                fillColor(idx);
              }}
              {...square}
            />
          ))}
        </Layer>
      </Stage>
    </CanvasContainer>
  );
};

export default Canvas;
