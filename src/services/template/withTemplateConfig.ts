import path from "path";
import readYamlFile from "read-yaml-file/index";

interface TemplateConfig {
  site?: {
    title?: string;
    description?: string;
  };
  personal?: {
    name?: string;
    avatar?: string;
    socialNetworks?: {
      youtube?: string;
      github?: string;
    };
  };
}

/**
 * This decorator is responsible for getting info on the template of the project.
 * @param props
 * @returns
 */
export const withTemplateConfig = async (props = {}) => {
  const PATH_TEMPLATE_CONFIG = path.resolve(".", "template-config.yml");
  const templateConfig = await readYamlFile<TemplateConfig>(
    PATH_TEMPLATE_CONFIG
  );

  return {
    templateConfig,
    ...props,
  };
};
