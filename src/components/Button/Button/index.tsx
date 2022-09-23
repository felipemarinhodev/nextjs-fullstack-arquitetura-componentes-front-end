import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";
import BaseButton, { BaseButtonProps } from "../BaseButton";
import { ColorVariant, colorVariantBy, Variant } from "../colorVariantBy";

interface ButtonProps extends BaseButtonProps {
  children: React.ReactNode;
  /**
   * Use when want the Button fill all space that is possible.
   * @default false
   */
  fullWidth?: boolean;
  colorVariant?: ColorVariant;
  variant?: Variant;
}
export default function Button({
  children,
  styleSheet,
  fullWidth,
  colorVariant,
  variant,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <BaseButton
      styleSheet={{
        alignSelf: "flex-start",
        ...colorVariantBy(theme, colorVariant, variant),
        ...(fullWidth && {
          alignSelf: "initial",
        }),
        ...styleSheet,
      }}
    >
      {children}
    </BaseButton>
  );
}

Button.defaultProps = {
  fullWidth: false,
  colorVariant: "positive",
  variant: "contained",
};

Button.Base = BaseButton;
