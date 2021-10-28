import React from "react";
import { render } from "@testing-library/react";
import Link from "./Link";

it("Button renders text prop", () => {
  const { getByText } = render(<Link text={"Hello World from test"} />);
  expect(getByText("Hello World from test")).toBeTruthy();
});

it("Button renders with no prop value provided", () => {
  const { getByText } = render(<Link text={""} />);
  expect(getByText("no prop value provided")).toBeTruthy();
});
