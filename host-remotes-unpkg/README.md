# Host Remotes Unpkg Example

> This example demonstrates 2 [rocket-science](https://github.com/rocket-science-core/rocket-science) remote apps publishing federated modules to npm with a host app consuming those modules from the [unpkg](https://unpkg.com/) cdn.

- **dev-profile-one** (REMOTE)
- **dev-profile-two** (REMOTE)
- **dev-profiles-host** (HOST)

## Usage

**To run the local development environment to consume modules from the local running remote apps:**

1. Start up each REMOTE app

```bash
# dev-profile-one

yarn story # to start federated server and storybook

# or

yarn federate # to only start the federated server
```

```bash
# dev-profile-two

yarn story # to start federated server and storybook

# or

yarn federate # to only start the federated server
```

2. Start up the HOST app with environment variable to use local modules

```bash
# dev-profiles-host

LOCAL_MODULES=true yarn start
```

**To run the local development environment to consume published modules from unpkg:**

1. Start the HOST app

```bash
# dev-profiles-host

yarn start
```

## How it works

### Host webpack configuration

The webpack configuration for HOST is set up to either consume published remotes or local remotes determined by an environment variable.

```js
// Production remotes from unpkg content delivery network (or your cdn of choice)

const federatedRemotes = {
  "dev-profile-one": "^1.0.2",
  "dev-profile-two": "^1.0.0",
};

const deps = {
  ...federatedRemotes,
  ...require("./package.json").dependencies,
};

const unpkgRemote = (name) =>
  `${camelCase(name)}@https://unpkg.com/${name}@${
    deps[name]
  }/dist/browser/remote-entry.js`;

const remotes = Object.keys(federatedRemotes).reduce(
  (remotes, lib) => ({
    ...remotes,
    [lib]: unpkgRemote(lib),
  }),
  {}
);
```

```js
// Local remotes for development

const localRemotes = {
  "dev-profile-one": `${camelCase(
    "dev-profile-one"
  )}@http://localhost:3003/browser/remote-entry.js`,
  "dev-profile-two": `${camelCase(
    "dev-profile-two"
  )}@http://localhost:3001/browser/remote-entry.js`,
};
```

Ideally with this setup, you could use the `LOCAL_MODULES=true` environment variable to develop the remote apps in tandem with the host application.

```js
// Plugin setup in HOST app

new ModuleFederationPlugin({
      name: "dev-profiles-host",
      remotes: process.env.LOCAL_MODULES === "true" ? localRemotes : remotes, // <-- which remotes to use
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "styled-components": {
          singleton: true,
          requiredVersion: deps["styled-components"],
        },
      },
    }),
```

### Lazy loading remote react components into host

```js
// Loading remote react components with React.lazy and React.suspense
const RemoteComponent = React.lazy(() =>
  import("remote-package-name/Component")
);

<React.Suspense fallback="Loading Remote Component">
  <RemoteComponent />
</React.Suspense>;
```

### Use error boundaries when loading a remote

To avoid having a REMOTE crash the entire page, create a class component like the suggestions
from the [Error Boundaries React docs](https://reactjs.org/docs/error-boundaries.html) or use the [`react-error-boundary`](https://www.npmjs.com/package/react-error-boundary) npm package.

```js
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

<ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
  <React.Suspense fallback="Loading Remote Component">
    <RemoteComponent />
  </React.Suspense>
</ErrorBoundary>;
```

### Publishing changes to a remote

Once you're ready to publish some changes in one of the remote apps, you can just publish a new version to npm with `yarn publish` and after some time, unpkg will have the new published version. Versions of the remote apps are referenced in `webpack.config.js` with a caret version so the new published versions will be taken optimistically.

Otherwise you can set an exact version but you'd have to update the host app manually to increment the version.
