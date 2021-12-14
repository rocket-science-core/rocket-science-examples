import React from "react";

// const tests = {
//   test1: ["a", "b"],
// };

import VariantChooser from "ab-manager/VariantChooser";

const FrameA = React.lazy(() => import("Components/FrameA"));
const FrameB = React.lazy(() => import("Components/FrameB"));

// const VariantChooser = ({ test, variations, ...props }) => {
//   const [selectedVariant] = React.useState(
//     tests[test][Math.floor(Math.random() * tests[test].length)]
//   );
//   const Component = variations[selectedVariant];
//   return (
//     <React.Suspense fallback={<div>Loading variant</div>}>
//       <Component {...props} />
//     </React.Suspense>
//   );
// };

const App = () => {
  return (
    <div style={{ width: 800, margin: "auto" }}>
      <div>This is a cute dog 🐶</div>
      <VariantChooser
        test="test1"
        variations={{
          a: FrameA,
          b: FrameB,
        }}
        src="https://placedog.net/500/280/?id=5"
        style={{
          width: 500,
          height: 280,
        }}
      />
      <div>You should really adopt me!</div>
    </div>
  );
};

export default App;
