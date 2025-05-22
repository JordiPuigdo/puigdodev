export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};
