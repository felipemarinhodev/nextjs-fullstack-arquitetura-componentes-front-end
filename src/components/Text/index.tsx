import theme from "@src/theme/theme";
import React from "react";
import Box from "../Box";

interface TextProps {
  tag?: "p" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  children?: React.ReactNode;
}

export default function Text(props: TextProps) {
  return (
    <Box styleSheet={{ fontFamily: theme.typography.fontFamily }} {...props} />
  );
}

Text.defaultProps = {
  tag: "p",
};
