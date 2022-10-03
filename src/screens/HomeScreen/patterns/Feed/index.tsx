// TODO: remove eslint-disable
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import Box from "@src/components/Box";
import { Button } from "@src/components/Button";
import Image from "@src/components/Image";
import Text from "@src/components/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import Link from "@src/components/Link";
import Icon from "@src/components/Icon";
import type { Post } from "@src/services/posts/PostsService";
import { FeedPost } from "./patterns/FeedPost";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        width: "100%",
        marginTop: "-228px",
        maxWidth: "683px",
        borderRadius: "8px",
        paddingTop: "40px",
        paddingHorizontal: "32px",
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: "24px",
        paddingBottom: "24px",
      }}
    >
      <Box
        styleSheet={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Image
          src={templateConfig?.personal?.avatar}
          alt="Imagem de perfil do Felipe Marinho"
          styleSheet={{
            width: { xs: "100px", md: "128px" },
            height: { xs: "100px", md: "128px" },
            borderRadius: "100%",
          }}
        />

        <Box
          styleSheet={{
            justifyContent: "space-between",
          }}
        >
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: "space-between",
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Button fullWidth colorVariant="primary" size="xl" href="/">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xl" href="/">
              Bora beber um café?
            </Button>
          </Box>
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: "space-between",
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <Button fullWidth colorVariant="primary" size="xs" href="/">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xs" href="/">
              Partiu um café?
            </Button>
          </Box>
        </Box>
      </Box>
      <Button.Base href="https://github.com/felipemarinhodev">
        <Text tag="h1" variant="heading4">
          {templateConfig?.personal?.name}
        </Text>
      </Button.Base>

      <Box
        styleSheet={{
          flexDirection: "row",
          gap: "4px",
        }}
      >
        {templateConfig.personal?.socialNetworks &&
          Object.keys(templateConfig.personal.socialNetworks).map((network) => (
            <Link
              key={network}
              href={templateConfig.personal.socialNetworks[network]}
              target="_blank"
            >
              <Icon name={network as any} />
            </Link>
          ))}
      </Box>
    </Box>
  );
};

interface FeedPostsProps {
  posts: Post[];
}

Feed.Posts = ({ posts }: FeedPostsProps) => {
  return (
    <Box>
      <Text tag="h3" variant="heading3" styleSheet={{ marginBottom: "27px" }}>
        Últimas Atualizações
      </Text>
      {posts.map(
        ({ slug, title, image, metadata: { date, excerpt, url, tags } }) => {
          return (
            <FeedPost
              key={slug}
              title={title}
              date={date}
              excerpt={excerpt}
              url={url}
              tags={tags}
              image={image}
            />
          );
        }
      )}
    </Box>
  );
};
