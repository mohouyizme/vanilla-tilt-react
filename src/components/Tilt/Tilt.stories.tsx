import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tilt from "./Tilt";

const meta: Meta<typeof Tilt> = {
  component: Tilt,
  title: "Tilt",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tilt>;

export const Default: Story = (args) => (
  <Tilt data-testId="InputField-id" {...args}>
    Test
  </Tilt>
);

Default.args = {
  options: {
    scale: 1.2,
    speed: 1000,
    max: 30,
    glare: true,
    "max-glare": 0.5,
  },
  style: {
    width: "100px",
    height: "100px",
    background: "red",
  },
};
