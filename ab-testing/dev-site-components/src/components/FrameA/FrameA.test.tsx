import React from "react";
import { render } from "@testing-library/react";
import FrameA from "./FrameA";

it("FrameA renders text prop", () => {
    const { getByText } = render(
    <FrameA text={"Hello World from test"} />
    );
    expect(getByText("Hello World from test")).toBeTruthy();
});

it("FrameA renders with no prop value provided", () => {
    const { getByText } = render(<FrameA text={""} />);
    expect(getByText("no prop value provided")).toBeTruthy();
});