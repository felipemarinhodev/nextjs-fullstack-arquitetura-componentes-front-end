import Box from '@src/components/Box';
import { IFeed } from '@src/services/feeds/Fetch';
import templatePageHOC from '@src/services/template/templatePageHOC';
import { useTheme } from '@src/theme/ThemeProvider';
import Background from './patterns/Background';
import Feed from './patterns/Feed';
import Footer from './patterns/Footer';
import Menu from './patterns/Menu';

interface HomeScreenProps {
  posts: IFeed[];
}

function HomeScreen(props: HomeScreenProps) {
  const theme = useTheme();
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Feed.Posts posts={props.posts} />
      </Feed>
      <Footer />
    </Box>
  );
}

export default templatePageHOC(HomeScreen, {
  title: 'Home',
});
