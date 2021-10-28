import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
const Readme = require("../README.md").default;

import Link from "../Link";

export default {
  title: "Atomic/Atoms/Link/Default",
  component: Link,
  argTypes: {
    text: { control: "text" },
  },
} as ComponentMeta<typeof Link>;

// ==============================
// Traditional Node Render on Client Side
// ==============================

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Hello World",
};
Primary.parameters = {
  readme: {
    sidebar: Readme,
  },
  jest: ["Link.test.tsx"],
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "",
};
Secondary.parameters = {
  readme: {
    sidebar: Readme,
  },
  jest: ["Link.test.tsx"],
};
