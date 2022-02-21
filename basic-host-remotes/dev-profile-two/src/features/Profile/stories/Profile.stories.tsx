import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
const Readme = require("../README.md").default;

import Profile from "../Profile";

export default {
  title: "Atomic/Organisms/Profile/Default",
  component: Profile,
  argTypes: {
    text: { control: "text" },
  },
} as ComponentMeta<typeof Profile>;

// ==============================
// Traditional Node Render on Client Side
// ==============================

const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  readme: {
    sidebar: Readme,
  },
  jest: ["Profile.test.tsx"],
};
