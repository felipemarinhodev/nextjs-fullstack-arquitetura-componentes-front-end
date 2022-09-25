import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link, { LinkProps } from ".";

export default {
  title: "Components/Link",
  args: {
    href: "https://felipemarinho.dev",
    children: "Felipe Marinho web site",
  },
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  colorVariant: "primary",
  colorVariantEnabled: true,
} as LinkProps;
