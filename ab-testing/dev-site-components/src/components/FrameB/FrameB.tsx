import React from "react";
import { FrameProps } from "../types";

const FrameB = ({ src, style, ...props }: FrameProps) => {
  return (
    <div>
      <div>Variant B</div>
      <div>
        <img
          src={src}
          alt="🐕"
          style={{
            ...style,
            padding: "1em",
            border: "10px dashed blue",
          }}
        />
      </div>
    </div>
  );
};

export default FrameB;
