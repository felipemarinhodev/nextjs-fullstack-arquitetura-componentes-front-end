import PostsService from "@src/services/posts/PostsService";
import { withTemplateConfig } from "@src/services/template/withTemplateConfig";

export { default } from "@src/screens/HomeScreen";

export async function getStaticProps() {
  const posts = await PostsService().getAll();
  return {
    props: await withTemplateConfig({
      posts,
    }),
  };
}
