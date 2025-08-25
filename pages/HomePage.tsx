
import React from 'react';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <div>
            <Hero />
            <div className="py-12 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-text-main sm:text-4xl">
                            Featured Articles
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-text-secondary sm:mt-4">
                            Our latest and most popular reviews and comparisons.
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
                        {featuredPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                         <Link
                            to="/blog"
                            className="inline-block px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary hover:text-secondary md:py-4 md:text-lg md:px-10 transition-all duration-300"
                        >
                            View All Posts
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
