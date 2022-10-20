import JobsService from '@src/services/feeds/jobs/JobsService';
import PostsService from '@src/services/feeds/posts/PostsService';
import { withTemplateConfig } from '@src/services/template/withTemplateConfig';

export { default } from '@src/screens/HomeScreen';

export async function getStaticProps() {
  const feeds = await Promise.all([
    ...(await PostsService().getAll()),
    ...(await JobsService().getAll()),
  ]);

  const feedsSort = feeds.sort(
    (a, b) => Date.parse(b.dateInitial) - Date.parse(a.dateInitial)
  );

  return {
    props: await withTemplateConfig({
      posts: feedsSort,
    }),
  };
}
