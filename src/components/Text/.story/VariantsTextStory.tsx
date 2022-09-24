import React from "react";
import styled from "styled-components";
import Text from "..";
import { typography } from "../../../theme/defaults/typography";
import { ThemeTypographyVariants } from "../../../theme/theme";

const List = styled.ul`
  list-style-type: none;
`;
const Item = styled.li`
  margin-top: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
`;

export function VariantsTextStory() {
  const variants = Object.keys(typography.variants);

  return (
    <>
      <h1>Types of Text</h1>
      <List>
        {variants.map((variant) => {
          const myVariant: ThemeTypographyVariants =
            variant as ThemeTypographyVariants;
          return (
            <Item key={variant}>
              <Text variant={myVariant}>{`Text with ${variant} variant`}</Text>
            </Item>
          );
        })}
      </List>
    </>
  );
}
