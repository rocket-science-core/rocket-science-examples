import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DynamicRemoteContainer from "../../../util/hooks/DynamicRemoteContainer";
const Readme = require("../README.md").default;

export default {
  title: "Atomic/Organisms/Profile/Federated",
  component: DynamicRemoteContainer,
} as ComponentMeta<typeof DynamicRemoteContainer>;

// ==============================
// Module Federation MFE Render on Client Side
//
// Notes:
// - This is a special case where we are using the DynamicRemoteContainer
// - This is a special case where we are not following the steps below
//   because this default component is already configured in the
//   ModuleFederationComponent
//
// Directions:
// 1. Make Sure you add the component to the "exposes"
//    in webpack.config.js ModuleFederationPlugin
//
// 2. Uncomment the code below
//
// 3. Run $ yarn story
//
// ==============================

const ModFedTemplate: ComponentStory<typeof DynamicRemoteContainer> = ({
  url,
  scope,
  module: targetModule,
  componentProps,
}) => (
  <DynamicRemoteContainer
    url={url}
    scope={scope}
    module={targetModule}
    componentProps={componentProps}
  />
);

export const ModFedPrimary = ModFedTemplate.bind({});
ModFedPrimary.args = {
  componentProps: {},
  url: "http://localhost:3001/remoteEntry.js",
  scope: "DevProfileTwo",
  module: "./Profile",
};
ModFedPrimary.parameters = {
  readme: {
    sidebar: Readme,
  },
  jest: ["Profile.test.tsx"],
};
