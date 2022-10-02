import { withTemplateConfig } from "@src/services/template/withTemplateConfig";

export { default } from "@src/screens/HomeScreen";

export async function getStaticProps() {
  return {
    props: await withTemplateConfig({}),
  };
}
