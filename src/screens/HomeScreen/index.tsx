import Box from "@src/components/Box";
import Text from "@src/components/Text";
import Background from "./patterns/Background";
import Feed from "./patterns/Feed";
import Menu from "./patterns/Menu";

export default function HomeScreen() {
  return (
    <Box tag="main">
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text>Últimas Atualizações</Text>
        <Feed.Posts />
      </Feed>
    </Box>
  );
}
