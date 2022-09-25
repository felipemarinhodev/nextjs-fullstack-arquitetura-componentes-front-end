import { ComponentMeta, ComponentStory } from "@storybook/react";
import Image from ".";

export default {
  title: "Components/Image",
  args: {
    src: "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
    alt: "Image of Octocat",
  },
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
