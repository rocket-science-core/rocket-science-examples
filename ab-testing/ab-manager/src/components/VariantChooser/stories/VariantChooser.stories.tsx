import React from "react";
  import { ComponentStory, ComponentMeta } from "@storybook/react";
  const Readme = require("../README.md").default;
  
  import VariantChooser from "../VariantChooser";
  
  export default {
    title: "Newly Generated/VariantChooser/Default",
    component: VariantChooser,
    argTypes: {
      text: { control: "text" },
    },
  } as ComponentMeta<typeof VariantChooser>;
  
  // ==============================
  // Traditional Node Render on Client Side
  // ==============================
  
  const Template: ComponentStory<typeof VariantChooser> = (args) => (
    <VariantChooser {...args} />
  );
  
  export const Primary = Template.bind({});
  Primary.args = {
    text: "Hello World",
  };
  Primary.parameters = {
    readme: {
      sidebar: Readme,
    },
  };
  
  export const Secondary = Template.bind({});
  Secondary.args = {
    text: "",
  };
  Secondary.parameters = {
    readme: {
      sidebar: Readme,
    },
  };