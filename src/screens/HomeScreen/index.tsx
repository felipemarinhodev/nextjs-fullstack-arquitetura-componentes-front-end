import Box from "@src/components/Box";
import Background from "./patterns/Background";
import Menu from "./patterns/Menu";

export default function HomeScreen() {
  return (
    <Box tag="main">
      <Background />
      <Menu />
    </Box>
  );
}
