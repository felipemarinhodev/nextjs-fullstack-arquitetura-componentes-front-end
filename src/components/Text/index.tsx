import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";

export interface TextProps {
  tag?:
    | "p"
    | "li"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "a"
    | string;
  children?: React.ReactNode;
  variant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  ref?: any;
}

const Text = React.forwardRef(
  ({ styleSheet, variant, tag, ...props }: TextProps, ref) => {
    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];

    return (
      <BaseComponent
        as={tag}
        ref={ref}
        styleSheet={{
          fontFamily: theme.typography.fontFamily,
          ...textVariant,
          ...styleSheet,
        }}
        {...props}
      />
    );
  }
);

Text.defaultProps = {
  tag: "p",
  variant: "body2",
};

export default Text;
