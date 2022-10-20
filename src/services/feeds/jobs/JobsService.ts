import { Fetch, IFeed, PopulateProps } from './../Fetch';
export interface Job extends IFeed {
  metadata: {
    logoCompany: string;
    position: string;
    company: string;
    url: string;
  };
  tags: string[];
  title: string;
  type: 'jobs';
  dateInitial: string;
  dateFinal: string | undefined;
  content: string;
  slug: string;
}

export default function JobsService() {
  return {
    async getAll(): Promise<IFeed[]> {
      const populate = ({ data, content, fileName }: PopulateProps): Job => ({
        metadata: {
          logoCompany: data.logoCompany,
          position: data.position,
          company: data.company,
          url: data.url,
        },
        tags: data.tags,
        title: data.position,
        type: 'jobs',
        dateInitial: new Date(data.dateInitial).toISOString(),
        dateFinal: data.dateFinal
          ? new Date(data.dateFinal).toISOString()
          : undefined,
        content,
        slug: fileName.replace('.md', ''),
      });

      const fetch = new Fetch<Job>();
      return await fetch.getAll('jobs', populate);
    },
  };
}
