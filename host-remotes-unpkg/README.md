# Host Remotes Unpkg Example

> This example demonstrates 2 [rocket-science](https://github.com/rocket-science-core/rocket-science) remote apps publishing federated modules to npm with a host app consuming those modules from the [unpkg](https://unpkg.com/) cdn.

- **dev-profile-one** (REMOTE)
- **dev-profile-two** (REMOTE)
- **dev-profiles-host** (HOST)

## Usage

**To run the local development environment to consume modules from the local running remote apps:**

1. Clone this repository and open a separate terminal session for each of the three apps.

```bash
git clone https://github.com/ahoward2/host-remotes-unpkg.git
```

2. Start up each REMOTE app

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

3. Start up the HOST app with environment variable to use local modules

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

## General explanation

The webpack configuration is set up to either consume published remotes or local remotes determined by an environment variable.

```js
// Published Remotes Setup

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
// Local Remotes Setup

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

Once you're ready to publish some changes in one of the remote apps, you can just publish a new version to npm with `yarn publish` and after some time, unpkg will have the new published version. Versions of the remote apps are referenced in `webpack.config.js` with a caret version so the new published versions will be taken optimistically.

Otherwise you can set an exact version but you'd have to update the host app manually to increment the version.
