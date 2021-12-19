import React from "react";
import { FrameProps } from "../types";

const FrameA = ({ src, style, ...props }: FrameProps) => {
  return (
    <div>
      <div>Variant A</div>
      <div>
        <img
          src={src}
          alt="🐕"
          style={{
            ...style,
            padding: "1em",
            border: "10px solid purple",
          }}
        />
      </div>
    </div>
  );
};

export default FrameA;
