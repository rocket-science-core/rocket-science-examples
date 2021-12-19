import React from "react";
import { render } from "@testing-library/react";
import FrameB from "./FrameB";

it("FrameB renders text prop", () => {
    const { getByText } = render(
    <FrameB text={"Hello World from test"} />
    );
    expect(getByText("Hello World from test")).toBeTruthy();
});

it("FrameB renders with no prop value provided", () => {
    const { getByText } = render(<FrameB text={""} />);
    expect(getByText("no prop value provided")).toBeTruthy();
});