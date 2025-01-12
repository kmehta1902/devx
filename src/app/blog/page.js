// app/page.js
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './BlogGrid.css';
import Footer from '@/app/components/Footer/Footer';
import Navbar from '@/app/components/Navbar/Navbar';

const posts = [
    {
        id: 1,
        date: '22 January 2024 • 08:45 AM',
        title: 'How to Use Message Apps to Communicate, and Share',
        description: 'Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.',
        image: '/blog1.png',
        tags: ['Communication', 'Technology']
    },
    
    {
        id: 2,
        date: '21 January 2024 • 10:30 AM',
        title: 'The Future of Digital Design',
        description: 'Discover the latest trends and innovations shaping the future of digital design and user experience.',
        image: '/blog2.jpg',
        tags: ['Design', 'Innovation']
    },
    {
        id: 3,
        date: '20 January 2024 • 02:15 PM',
        title: 'Understanding Modern Web Architecture',
        description: 'A deep dive into contemporary web architecture patterns and best practices for scalable applications.',
        image: '/blog3.jpg',
        tags: ['Web Development', 'Architecture']
    },
    // Additional posts to demonstrate load more functionality
    {
        id: 4,
        date: '19 January 2024 • 09:20 AM',
        title: 'Mastering User Research',
        description: 'Learn effective techniques for conducting user research and applying insights to your design process.',
        image: '/blog1.png',
        tags: ['UX Research', 'Design']
    },
    {
        id: 5,
        date: '18 January 2024 • 11:45 AM',
        title: 'The Power of Design Systems',
        description: 'How design systems can streamline your workflow and improve consistency across products.',
        image: '/blog2.jpg',
        tags: ['Design Systems', 'UI']
    },
    {
        id: 6,
        date: '17 January 2024 • 03:30 PM',
        title: 'Responsive Design Best Practices',
        description: 'Essential guidelines for creating responsive designs that work seamlessly across all devices.',
        image: '/blog3.jpg',
        tags: ['Responsive', 'Web Design']
    }
];

const BlogGrid = () => {
    const postsPerPage = 3;
    const [visiblePosts, setVisiblePosts] = useState(postsPerPage);
    
    const loadMore = () => {
        setVisiblePosts(prevVisible => 
            Math.min(prevVisible + postsPerPage, posts.length)
        );
    };

    return (
        <div className="blog-wrapper">
            <Navbar />
            <div className="blog-container">
                <h1>All blog posts</h1>
                <div className="blog-grid">
                    {posts.slice(0, visiblePosts).map((post) => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-image-container">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="blog-image"
                                />
                            </div>
                            <div className="blog-content">
                                <p className="blog-date">{post.date}</p>
                                <h2 className="blog-title">{post.title}</h2>
                                <p className="blog-description">{post.description}</p>
                                <div className="blog-tags">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="blog-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link href={`/blog/${post.id}`} className="read-more">
                                    Read More
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                {visiblePosts < posts.length && (
                    <div className="load-more-container">
                        <button onClick={loadMore} className="load-more-button">
                            Load More
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default BlogGrid;