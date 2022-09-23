import Box from "@src/components/Box";
import Link from "@src/components/Link";
import Text from "@src/components/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background";
import Feed from "./patterns/Feed";
import Footer from "./patterns/Footer";
import Menu from "./patterns/Menu";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.positive.x100,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Link colorVariant="negative" href="/sobre">
        Vá para a página Sobre
      </Link>
      <Link href="https://google.com">Ir para o Google</Link>
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag="h2" variant="heading2">
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  );
}
