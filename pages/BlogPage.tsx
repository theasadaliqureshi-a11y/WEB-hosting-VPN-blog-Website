
import React from 'react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
    return (
        <div className="bg-background pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl tracking-tight font-extrabold text-text-main sm:text-4xl">
                        The AI Host Hub Blog
                    </h2>
                    <p className="mt-3 text-xl text-text-secondary sm:mt-4">
                        All our latest articles, reviews, and comparisons in one place. Your ultimate guide to web hosting, VPNs, and more.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 pt-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;