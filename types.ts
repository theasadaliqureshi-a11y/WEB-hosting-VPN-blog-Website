
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: string;
  readingTime: number;
  thumbnailUrl: string;
  tags: string[];
  content: string; 
  images: string[];
}
