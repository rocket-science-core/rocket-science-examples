# A/B Testing Example

> This example project demonstrates a host application consuming two [rocket-science](https://github.com/SketchLagoon/rocket-science) applications, one which provides two variants of a component, and the other which impliments a A/B testing system for said variants.

## Usage

- **dev-site-host** (HOST)
- **dev-site-components** (REMOTE)
- **ab-manager** (REMOTE)

```bash
# dev-site-components

# To run federated server (port 3001)
$ yarn build
$ yarn federate

# To run storybook and federated server together
$ yarn launch
```

```bash
# ab-manager

# To run build and run federated server (port 3002)
$ yarn build
$ yarn federate
```

```bash
# dev-site-host

# To start app (port 3003)
$ yarn start
```

Running storybook and the federated server together with `$ yarn launch` allows you to develop the components locally within storybook while **Host app** can consume changes with a browser refresh.
