import Box from "@src/components/Box";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background";
import Feed from "./patterns/Feed";
import Footer from "./patterns/Footer";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Background />
      <Feed>
        <Feed.Header />
      </Feed>
      <Footer />
    </Box>
  );
}
