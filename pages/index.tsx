import JobsService from '@src/services/feeds/jobs/JobsService';
import PostsService from '@src/services/feeds/posts/PostsService';
import { withTemplateConfig } from '@src/services/template/withTemplateConfig';

export { default } from '@src/screens/HomeScreen';

export async function getStaticProps() {
  const posts = await PostsService().getAll();
  const jobs = await JobsService().getAll();

  return {
    props: await withTemplateConfig({
      posts,
    }),
  };
}
