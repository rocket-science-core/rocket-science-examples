import React from "react";
import AppWrapper from "./App.styles";

/*
 * Can also be used to lazy load remote components without needing the module
 * federation plugin (webpack 5).
 */
// import DynamicRemoteContainer from "./hooks/DynamicRemoteContainer";

// Useful for converting a package name to a camel case string for use in a scope
// const { camelCase } = require("camel-case");

// Optional but recommended pattern for handling errors in remote components
import { ErrorBoundary } from "react-error-boundary";

/*
 * Optional fallback for error boundaries, can be used to render
 * a fallback UI for the error boundary.
 */
function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

/*
 * Optional error handler for error boundaries, can be used to log errors
 * or send them to a remote logging service.
 */
const myErrorHandler = (error) => {
  // Alert team of the error
};

// Lazy load the remote components
const RemoteProfileOne = React.lazy(() => import("dev-profile-one/Profile"));
const RemoteProfileTwo = React.lazy(() => import("dev-profile-two/Profile"));

const App = () => (
  <AppWrapper>
    <h1>Developer Profiles</h1>
    <h3>Built With Micro Frontends</h3>
    <hr />
    <div className="profile-container">
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <React.Suspense fallback="Loading Profile One">
          <RemoteProfileOne />
        </React.Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <React.Suspense fallback="Loading Profile Two">
          <RemoteProfileTwo />
        </React.Suspense>
      </ErrorBoundary>

      {/*
       * webpack 4 solution for lazy loading remote components
       */}
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
