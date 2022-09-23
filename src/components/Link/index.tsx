import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeColorsVariants, ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";
import NextLink from "next/link";
import React from "react";
import Text from "../Text";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: ThemeColorsVariants;
  colorVariantEnabled?: boolean;
}

const Link = React.forwardRef(
  (
    {
      href,
      children,
      colorVariant,
      styleSheet,
      colorVariantEnabled,
      ...props
    }: LinkProps,
    ref
  ) => {
    const theme = useTheme();
    const isIExternalLink = href.startsWith("http");

    const currentColorSet = {
      color: theme.colors[colorVariant].x500,
      hover: {
        color: theme.colors[colorVariant].x400,
      },
      focus: {
        color: theme.colors[colorVariant].x600,
      },
    };

    const linkProps = {
      ref,
      children,
      href,
      tag: "a",
      styleSheet: {
        textDecoration: "none",
        ...(colorVariantEnabled && {
          color: currentColorSet.color,
        }),
        ...styleSheet,
        hover: {
          ...styleSheet?.hover,
          ...(colorVariantEnabled && {
            color: currentColorSet.hover.color,
          }),
        },
        focus: {
          ...styleSheet?.focus,
          ...(colorVariantEnabled && {
            color: currentColorSet.focus.color,
          }),
        },
      },
      ...props,
    };

    if (isIExternalLink) {
      return <Text {...{ target: "_blank", ...linkProps }} />;
    }
    return (
      <NextLink href={href} passHref>
        <Text {...linkProps} />
      </NextLink>
    );
  }
);

Link.defaultProps = {
  colorVariant: "primary",
  colorVariantEnabled: true,
};

export default Link;
