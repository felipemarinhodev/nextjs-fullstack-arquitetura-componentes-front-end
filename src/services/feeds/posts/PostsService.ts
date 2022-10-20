import { Fetch, IFeed, PopulateProps } from '../Fetch';

export interface Post extends IFeed {
  metadata: {
    url: string;
    excerpt: string;
  };
  image?: string;
  title: string;
  slug: string;
  content: string;
}

export default function PostsService() {
  return {
    async getAll(): Promise<IFeed[]> {
      const populate = ({ data, content, fileName }: PopulateProps): Post => ({
        metadata: {
          excerpt: data.excerpt,
          url: data.url,
        },
        tags: data.tags,
        dateInitial: new Date(data.dateInitial).toISOString(),
        image: data.image || '',
        title: data.title,
        slug: fileName.replace('.md', ''),
        type: data.type || 'default',
        content,
      });

      const fetch = new Fetch<Post>();
      return await fetch.getAll('posts', populate);
    },
  };
}
