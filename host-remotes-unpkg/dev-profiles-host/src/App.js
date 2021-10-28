import React from "react";
// Can consume the modules also from a dynamic remote container
// import DynamicRemoteContainer from "./hooks/DynamicRemoteContainer";
// const { camelCase } = require("camel-case");

import AppWrapper from "./App.styles";
const RemoteProfileOne = React.lazy(() => import("dev-profile-one/Profile"));
const RemoteProfileTwo = React.lazy(() => import("dev-profile-two/Profile"));

const App = () => (
  <AppWrapper>
    <h1>Developer Profiles</h1>
    <h3>Built With Micro Frontends</h3>
    <hr />
    <div className="profile-container">
      <React.Suspense fallback="Loading Profile One">
        <RemoteProfileOne />
      </React.Suspense>
      <React.Suspense fallback="Loading Profile Two">
        <RemoteProfileTwo />
      </React.Suspense>

      {/* <DynamicRemoteContainer
        componentProps={{}}
        url="https://unpkg.com/dev-profile-one@1.0.4/dist/browser/remote-entry.js"
        scope={camelCase("dev-profile-one")}
        module="./Profile"
      />
      <DynamicRemoteContainer
        componentProps={{}}
        url="https://unpkg.com/dev-profile-two@1.0.0/dist/browser/remote-entry.js"
        scope={camelCase("dev-profile-two")}
        module="./Profile"
      /> */}
    </div>
  </AppWrapper>
);

export default App;
