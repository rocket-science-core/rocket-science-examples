# Basic Host Remote Example

> This example project demonstrates a host application consuming two remote [rocket-science](https://github.com/SketchLagoon/rocket-science) applications. The example includes both the traditional consumption pattern as well as consumption via dynamic remote containers.

## Usage

Clone all three applications onto your machine _(helpful to keep them in a common directory)_.

- **dev-profiles-host** (HOST)
- **dev-profile-one** (REMOTE)
- **dev-profile-two** (REMOTE)

  **Host app** can either use consumption of remotes through the `remotes:{}` field in the module federation plugin or through [dynamic remote containers](https://webpack.js.org/concepts/module-federation/#dynamic-remote-containers) to consume federated modules from **Remote app 1** and **Remote app 2**.

```bash
# dev-profile-one

# To run federated server (port 3003)
$ yarn federate

# To run storybook and federated server together
$ yarn story
```

```bash
# dev-profile-two

# To run federated server (port 3001)
$ yarn federate

# To run storybook and federated server together
$ yarn story
```

```bash
# dev-profiles-host

# To start app (port 3002)
$ yarn start
```

Running storybook and the federated server together with `$ yarn story` allows you to develop the components locally within storybook while **Host app** can consume changes with a browser refresh.
