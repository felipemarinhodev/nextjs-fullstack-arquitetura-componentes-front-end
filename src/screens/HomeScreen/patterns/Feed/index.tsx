// TODO: remove eslint-disable
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import Box from '@src/components/Box';
import { Button } from '@src/components/Button';
import Image from '@src/components/Image';
import Text from '@src/components/Text';
import { useTheme } from '@src/theme/ThemeProvider';
import { useTemplateConfig } from '@src/services/template/TemplateConfigContext';
import Link from '@src/components/Link';
import Icon from '@src/components/Icon';
import type { Post } from '@src/services/feeds/posts/PostsService';
import { FeedPost } from './patterns/FeedPost';

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        width: '100%',
        marginTop: '-228px',
        maxWidth: '900px',
        borderRadius: '8px',
        paddingTop: '40px',
        paddingHorizontal: '32px',
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
        marginBottom: '24px',
        paddingBottom: '24px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <Image
          src={templateConfig?.personal?.avatar}
          alt="Imagem de perfil do Felipe Marinho"
          styleSheet={{
            width: { xs: '100px', md: '128px' },
            height: { xs: '100px', md: '128px' },
            borderRadius: '100%',
          }}
        />

        <Box
          styleSheet={{
            justifyContent: 'space-between',
          }}
        >
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: 'space-between',
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            {/* <Button fullWidth colorVariant="primary" size="xl" href="/">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xl" href="/">
              Bora beber um café?
            </Button> */}
            <Box
              styleSheet={{
                flex: 'auto',
                padding: '10px',
                backgroundColor: '#f6f6',
              }}
            >
              <Text
                tag="p"
                variant="heading5"
                styleSheet={{
                  overflowWrap: 'break-word',
                  textAlign: 'justify',
                  maxWidth: '650px',
                }}
              >
                Uma característica me acompanha desde de que me lembro é de ser
                uma pessoa curiosa, desmontando e remontando objetos ou
                perguntando para outras pessoas como as coisas funcionam. Quando
                comecei a usar computadores, personalizava meu mIRC e
                compartilhava com amigos. Quando iniciei meus estudos na área de
                TI essa característica de querer entender as coisas só aumentou.
                A curiosidade funciona com um combustível para ir me
                aprofundando algo novo. Um bom exemplo foi o Javascript, mesmo
                com alguns anos trabalhando com Java decidi que era a hora de
                aprender JS. Iniciei essa jornada de conhecimento aprendendo
                sobre Angular, Node.js e depois React.js. Alguns meses após
                iniciar os estudos com React.js consegui minha primeira
                oportunidade de trabalho e desde então esse é o meu foco, me
                aprimorar em ser um referência em React.js.
              </Text>
            </Box>
          </Box>
          <Box
            styleSheet={{
              flex: 1,
              justifyContent: 'space-between',
              display: {
                xs: 'flex',
                md: 'none',
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
          flexDirection: 'row',
          gap: '4px',
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
      <Text tag="h3" variant="heading3" styleSheet={{ marginBottom: '27px' }}>
        Últimas Atualizações
      </Text>
      {posts.map(
        ({
          slug,
          title,
          image,
          dateInitial,
          tags,
          type,
          metadata: { excerpt, url },
        }) => {
          return (
            <FeedPost
              key={slug}
              title={title}
              date={dateInitial}
              excerpt={excerpt}
              url={url}
              tags={tags}
              image={image}
              type={type}
            />
          );
        }
      )}
    </Box>
  );
};
