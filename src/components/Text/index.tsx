import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";

interface TextProps {
  tag?: "p" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  children?: React.ReactNode;
  variant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
}

export default function Text({
  styleSheet,
  variant,
  tag,
  ...props
}: TextProps) {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        styleSheet,
      }}
      as={tag}
      {...props}
    />
  );
}

Text.defaultProps = {
  tag: "p",
};
