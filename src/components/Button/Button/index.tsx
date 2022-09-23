import React from "react";
import BaseButton, { BaseButtonProps } from "../BaseButton";

interface ButtonProps extends BaseButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}
export default function Button({
  children,
  styleSheet,
  fullWidth,
}: ButtonProps) {
  return (
    <BaseButton
      styleSheet={{
        alignSelf: "flex-start",
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
};

Button.Base = BaseButton;
