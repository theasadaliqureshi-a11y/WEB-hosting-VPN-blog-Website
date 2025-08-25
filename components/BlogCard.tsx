
import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <article className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-secondary transition-transform transform hover:scale-105 hover:shadow-primary/20 duration-300">
            <div className="flex-shrink-0">
                <Link to={`/blog/${post.slug}`}>
                    <img className="h-48 w-full object-cover" src={post.thumbnailUrl} alt={post.title} />
                </Link>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <div className="flex space-x-2">
                        {post.tags.slice(0, 2).map(tag => (
                             <p key={tag} className="text-sm font-medium text-primary capitalize">
                                {tag}
                            </p>
                        ))}
                    </div>
                    <Link to={`/blog/${post.slug}`} className="block mt-2">
                        <p className="text-xl font-semibold text-text-main hover:text-primary transition-colors">{post.title}</p>
                        <p className="mt-3 text-base text-text-secondary">{post.excerpt}</p>
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <span className="sr-only">{post.author}</span>
                        <img className="h-10 w-10 rounded-full" src={post.authorAvatar} alt={`Avatar of ${post.author}`} />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-text-main">{post.author}</p>
                        <div className="flex space-x-1 text-sm text-text-secondary">
                            <time dateTime={post.date}>{post.date}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{post.readingTime} min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
