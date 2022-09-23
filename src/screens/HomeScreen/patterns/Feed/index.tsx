import Box from "@src/components/Box";
import { Button } from "@src/components/Button";
import Icon from "@src/components/Icon";
import Image from "@src/components/Image";
import Text from "@src/components/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        width: "100%",
        marginTop: "-228px",
        maxWidth: "683px",
        borderRadius: "8px",
        paddingVertical: "40px",
        paddingHorizontal: "32px",
      }}
    >
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => (
  <Box>
    <Button>Olá pessoas!</Button>
    <Button.Base href="https://github.com/felipemarinhodev">
      <Image
        src="https://github.com/felipemarinhodev.png"
        alt="Imagem de perfil do Felipe Marinho"
        styleSheet={{
          width: "128px",
          height: "128px",
          borderRadius: "100%",
        }}
      />
    </Button.Base>
    <Icon name="youtube" />
    <Icon name="twitter" />
    <Icon name="instagram" />
    <Icon name="github" />
    <Text>Feed Header</Text>
  </Box>
);

Feed.Posts = () => (
  <Box>
    <Text>Feed Posts</Text>
  </Box>
);
