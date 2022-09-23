import Text from "@src/components/Text";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useRouter } from "next/router";
import React from "react";
import { useRipple } from "react-use-ripple";
import styled from "styled-components";

export interface BaseButtonProps {
  children: React.ReactNode;
  href?: string;
  /**
   * For change the style of the Typography of the Button use this element.
   * @default 'body2'
   */
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled(Text)<any>``;

export default function BaseButton({
  children,
  textVariant,
  styleSheet,
  href,
  ...props
}: BaseButtonProps) {
  const ref = React.useRef();
  useRipple(ref, {
    animationLength: 600,
    rippleColor: "rgba(255, 255, 255, 0.7)",
  });
  const router = useRouter();

  const isLink = Boolean(href);

  const Tag = isLink ? "a" : "button";
  return (
    <StyledButton
      ref={ref}
      tag={Tag}
      href={href}
      {...props}
      styleSheet={{
        border: 0,
        backgroundColor: "transparent",
        color: "inherit",
        outline: "0",
        cursor: "pointer",
        textDecoder: "none",
        ...styleSheet,
      }}
      onClick={(event) => {
        isLink && event.preventDefault();
        isLink && router.push(href);
      }}
    >
      {children}
    </StyledButton>
  );
}

BaseButton.defaultProps = {
  textVariant: "body2",
};
