import { BaseComponent } from "@src/theme/BaseComponent";
import { variantsTypes } from "@src/theme/defaults/typography";
import { StyleSheet } from "@src/theme/StyleSheet";
import theme from "@src/theme/theme";
import React from "react";

interface TextProps {
  tag?: "p" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  children?: React.ReactNode;
  variant?: variantsTypes;
  styleSheet?: StyleSheet;
}

export default function Text({ styleSheet, variant, ...props }: TextProps) {
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        styleSheet,
      }}
      {...props}
    />
  );
}

Text.defaultProps = {
  tag: "p",
};
