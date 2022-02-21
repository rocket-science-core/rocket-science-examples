import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";
it("Profile renders", () => {
  const { getByText } = render(<Profile />);
  expect(getByText("Austin Howard")).toBeTruthy();
});
