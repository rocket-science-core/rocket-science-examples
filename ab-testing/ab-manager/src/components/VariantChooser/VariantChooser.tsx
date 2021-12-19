import React from "react";

import tests from "../../tests";

const VariantChooser = ({ test, variant, variations, ...props }) => {
  const [selectedVariant] = React.useState(
    variant || tests[test][Math.floor(Math.random() * tests[test].length)]
  );
  const Component = variations[selectedVariant];
  return (
    <React.Suspense fallback={<div>Loading variant</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default VariantChooser;
