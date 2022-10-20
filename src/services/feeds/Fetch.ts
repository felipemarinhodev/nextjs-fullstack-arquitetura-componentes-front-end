import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';

export interface IFeed {
  metadata: object;
  slug: string;
  type: 'jobs' | 'projects' | 'articles' | 'studies';
  title: string;
  tags: string[];
  dateInitial: string;
  dateFinal?: string;

  content: string;
}

export interface PopulateProps {
  data: {
    [key: string]: any;
  };
  content: string;
  fileName: string;
}

export class Fetch<T> {
  async getAll<T>(
    folder: string,
    populate: ({ data, content }: PopulateProps) => T
  ): Promise<T[]> {
    const PATH = path.resolve('.', '_data', folder);

    const files = await fs.readdir(PATH, { encoding: 'utf-8' });

    const resultPromise = files.map(async (fileName) => {
      const filePath = path.join(PATH, fileName);
      const postFile = await fs.readFile(filePath, { encoding: 'utf-8' });
      const { data, content } = matter(postFile);
      const result: T = populate({ data, content, fileName });
      return result;
    });

    const result = Promise.all(resultPromise);
    return result;
  }
}
