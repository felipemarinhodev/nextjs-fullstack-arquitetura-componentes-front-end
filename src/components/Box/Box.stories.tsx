import { colors } from "@src/theme/defaults/colors";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Box, { BoxProps } from ".";
import Text from "../Text";

export default {
  title: "Components/Box",
  args: {},
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <Text>Felipe Marinho</Text>
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  styleSheet: {
    backgroundColor: colors.neutral.x500,
    flex: 1,
    alignItems: "center",
  },
} as BoxProps;
