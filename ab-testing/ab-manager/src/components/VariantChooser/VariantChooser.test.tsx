import React from "react";
import { render } from "@testing-library/react";

import VariantChooser from "./VariantChooser";

it("Should render the A variant", () => {
  const VariantA = () => <div>Variant A</div>;
  const VariantB = () => <div>Variant B</div>;
  const tree = render(
    <VariantChooser
      variant="a"
      variations={{
        a: VariantA,
        b: VariantB,
      }}
      test="test1"
    />
  );
  expect(tree.getByText("Variant A")).toBeInTheDocument();
});
