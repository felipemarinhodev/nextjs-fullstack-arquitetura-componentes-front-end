import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";
import BaseButton, { BaseButtonProps } from "../BaseButton";
import { buttonSize, ButtonSize } from "../buttonSize";
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
  size?: ButtonSize;
}
export default function Button({
  children,
  styleSheet,
  fullWidth,
  colorVariant,
  variant,
  size,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <BaseButton
      styleSheet={{
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size],
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
  variant: "contained",
  colorVariant: "positive",
  size: "sm",
};

Button.Base = BaseButton;
