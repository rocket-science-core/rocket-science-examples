import React from "react";
// Can consume the modules also from a dynamic remote container
// import DynamicRemoteContainer from "./hooks/DynamicRemoteContainer";
import AppWrapper from "./App.styles";
const RemoteProfileOne = React.lazy(() => import("DevProfileOne/Profile"));
// const RemoteProfileTwo = React.lazy(() => import("DevProfileTwo/Profile"));
const Hello = React.lazy(() => import("DevProfileOne/Hello"));
const World = React.lazy(() => import("DevProfileOne/World"));

const App = () => (
  <AppWrapper>
    <h1>Developer Profiles</h1>
    <h3>Built With Micro Frontends</h3>
    <hr />
    <div className="profile-container">
      <React.Suspense fallback="Loading Profile One">
        <RemoteProfileOne />
      </React.Suspense>
      {/* <React.Suspense fallback="Loading Profile Two">
        <RemoteProfileTwo />
      </React.Suspense> */}
      <React.Suspense fallback="Loading Hello">
        <Hello />
      </React.Suspense>
      <React.Suspense fallback="Loading World">
        <World />
      </React.Suspense>

      {/* <DynamicRemoteContainer
        componentProps={{}}
        url="http://localhost:3003/remoteEntry.js"
        scope="DevProfileOne"
        module="./Profile"
      />
      <DynamicRemoteContainer
        componentProps={{}}
        url="http://localhost:3001/remoteEntry.js"
        scope="DevProfileTwo"
        module="./Profile"
      /> */}
    </div>
  </AppWrapper>
);

export default App;
