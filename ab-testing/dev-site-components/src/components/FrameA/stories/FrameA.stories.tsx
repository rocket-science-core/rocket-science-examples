import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
const Readme = require("../README.md").default;

import FrameA from "../FrameA";

export default {
  title: "Newly Generated/FrameA/Default",
  component: FrameA,
  argTypes: {
    text: { control: "text" },
  },
} as ComponentMeta<typeof FrameA>;

// ==============================
// Traditional Node Render on Client Side
// ==============================

const Template: ComponentStory<typeof FrameA> = (args) => <FrameA {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Hello World",
};
Primary.parameters = {
  readme: {
    sidebar: Readme,
  },
};
