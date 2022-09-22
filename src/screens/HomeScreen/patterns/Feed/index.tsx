// import * as S from "./styles";

import Box from "@src/components/Box";
import Text from "@src/components/Text";
import React from "react";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => (
  <Box>
    <Text>Feed Header</Text>
  </Box>
);

Feed.Posts = () => (
  <Box>
    <Text>Feed Posts</Text>
  </Box>
);
