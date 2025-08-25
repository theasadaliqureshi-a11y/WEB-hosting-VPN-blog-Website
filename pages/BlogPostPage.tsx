
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/404" replace />;
    }

    // Split content to insert images
    const contentParts = post.content.split('<!-- section-break -->');

    return (
        <div className="bg-background py-16 sm:py-24">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="max-w-prose mx-auto">
                    <div className="text-center">
                        <div className="flex justify-center space-x-2 mb-2">
                             {post.tags.map(tag => (
                                <Link key={tag} to="/blog" className="text-base font-semibold text-primary tracking-wide uppercase">{tag}</Link>
                            ))}
                        </div>
                        <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-text-main sm:text-4xl">
                            {post.title}
                        </h1>
                        <div className="mt-6 flex items-center justify-center">
                            <div className="flex-shrink-0">
                                <img className="h-12 w-12 rounded-full" src={post.authorAvatar} alt={`Avatar of ${post.author}`} />
                            </div>
                            <div className="ml-3 text-left">
                                <p className="text-sm font-medium text-text-main">{post.author}</p>
                                <div className="flex space-x-1 text-sm text-text-secondary">
                                    <time dateTime={post.date}>{post.date}</time>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{post.readingTime} min read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <figure className="mt-8">
                        <img
                            className="w-full rounded-lg"
                            src={post.thumbnailUrl}
                            alt={post.title}
                        />
                    </figure>
                    
                    <div className="mt-8 prose prose-invert lg:prose-xl mx-auto text-text-secondary">
                         <p className="lead">{post.excerpt}</p>

                        <div dangerouslySetInnerHTML={{ __html: contentParts[0] }} />

                        {post.images[0] && (
                             <figure className="my-8">
                                <img className="w-full rounded-lg" src={post.images[0]} alt="Blog post illustration 1" />
                                <figcaption className="text-center text-sm text-gray-500 mt-2">Illustration relevant to the topic.</figcaption>
                            </figure>
                        )}
                        
                        {contentParts[1] && <div dangerouslySetInnerHTML={{ __html: contentParts[1] }} />}

                        {post.images[1] && (
                             <figure className="my-8">
                                <img className="w-full rounded-lg" src={post.images[1]} alt="Blog post illustration 2" />
                                <figcaption className="text-center text-sm text-gray-500 mt-2">Another supporting image.</figcaption>
                            </figure>
                        )}

                         {contentParts[2] && <div dangerouslySetInnerHTML={{ __html: contentParts[2] }} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;