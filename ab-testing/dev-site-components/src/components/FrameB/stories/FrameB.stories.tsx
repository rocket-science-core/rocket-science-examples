import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
const Readme = require("../README.md").default;

import FrameB from "../FrameB";

export default {
  title: "Newly Generated/FrameB/Default",
  component: FrameB,
  argTypes: {
    text: { control: "text" },
  },
} as ComponentMeta<typeof FrameB>;

// ==============================
// Traditional Node Render on Client Side
// ==============================

const Template: ComponentStory<typeof FrameB> = (args) => <FrameB {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Hello World",
};
Primary.parameters = {
  readme: {
    sidebar: Readme,
  },
};
