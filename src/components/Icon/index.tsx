import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import * as icons from "./svgs/_index";

export const iconSizes = {
  xs: "12px",
  sm: "16px",
  md: "24px",
  lg: "32px",
  xl: "36px",
} as const;

export type SizeOptions = keyof typeof iconSizes;
export type IconNameOptions = keyof typeof icons;

export interface IconProps {
  name: IconNameOptions;
  styleSheet?: StyleSheet;
  size?: SizeOptions;
}

export default function Icon({ name, size, styleSheet, ...props }: IconProps) {
  const CurrentIcon = icons[name];
  if (!CurrentIcon) {
    return (
      <>
        {`"${name}" is not a valid <Icon />\n
        `}
      </>
    );
  }
  return (
    <BaseComponent
      styleSheet={{
        width: iconSizes[size],
        height: iconSizes[size],
        ...styleSheet,
      }}
      as="svg"
      color="inherit"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CurrentIcon />
    </BaseComponent>
  );
}

Icon.defaultProps = {
  size: "md",
  name: "default",
};
