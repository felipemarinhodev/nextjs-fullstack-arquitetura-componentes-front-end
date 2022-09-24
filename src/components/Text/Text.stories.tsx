import { ComponentMeta, ComponentStory } from "@storybook/react";

import { colors } from "@src/theme/defaults/colors";
import Text, { TextProps } from ".";
import { VariantsTextStory } from "./.story/VariantsTextStory";

export default {
  title: "Components/Text",
  args: {
    children: "Text",
  },
  component: Text,
} as ComponentMeta<typeof Text>;

// const theme = useTheme();

const Template: ComponentStory<typeof Text> = () => <VariantsTextStory />;
const TryYourselfTemplate: ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const Variants = Template.bind({});
export const TryYourself = TryYourselfTemplate.bind({});

TryYourself.args = {
  tag: "h1",
  variant: "heading1",
  styleSheet: {
    color: colors.negative.x400,
  },
} as TextProps;
