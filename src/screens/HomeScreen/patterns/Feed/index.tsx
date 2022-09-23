import Box from "@src/components/Box";
import { Button } from "@src/components/Button";
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
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: "24px",
      }}
    >
      <Box
        styleSheet={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
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
        <Box
          styleSheet={{
            justifyContent: "space-between",
          }}
        >
          <Button fullWidth colorVariant="primary" size="xl" href="/">
            Newsletter
          </Button>
          <Button fullWidth colorVariant="neutral" size="xl" href="/">
            Bora beber um café?
          </Button>
        </Box>
      </Box>
      <Text tag="h1" variant="heading4">
        Felipe Marinho
      </Text>
    </Box>
  );
};

Feed.Posts = () => (
  <Box>
    <Text>Feed Posts</Text>
  </Box>
);
