import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import './BlogStyles.css';

const posts = [
    {
        id: 1,
        date: 'January 15, 2024',
        title: 'The Future of AI in Software Development',
        description: 'Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.',
        content: `In this fast-paced digital age, artificial intelligence is transforming how we approach software development. 
                 This article explores the latest trends and practical applications of AI in modern software engineering.`,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        date: 'January 10, 2024',
        title: 'Modern Web Development Trends 2024',
        description: 'Discover the latest frameworks, tools, and methodologies shaping the future of web development.',
        content: `Stay ahead of the curve with our comprehensive guide to web development trends. 
                 Learn about the newest frameworks and tools that are revolutionizing how we build for the web.`,
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        date: 'January 5, 2024',
        title: 'Machine Learning in Mobile Apps',
        description: 'How machine learning is transforming mobile application development and user experience.',
        content: `Mobile applications are becoming smarter with machine learning integration. 
                 Discover how ML is enhancing user experiences and enabling new possibilities in mobile development.`,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        date: 'January 15, 2024',
        title: 'The Future of AI in Software Development',
        description: 'Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.',
        content: `In this fast-paced digital age, artificial intelligence is transforming how we approach software development. 
                 This article explores the latest trends and practical applications of AI in modern software engineering.`,
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        date: 'January 10, 2024',
        title: 'Modern Web Development Trends 2024',
        description: 'Discover the latest frameworks, tools, and methodologies shaping the future of web development.',
        content: `Stay ahead of the curve with our comprehensive guide to web development trends. 
                 Learn about the newest frameworks and tools that are revolutionizing how we build for the web.`,
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        date: 'January 5, 2024',
        title: 'Machine Learning in Mobile Apps',
        description: 'How machine learning is transforming mobile application development and user experience.',
        content: `Mobile applications are becoming smarter with machine learning integration. 
                 Discover how ML is enhancing user experiences and enabling new possibilities in mobile development.`,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    }
];

const BlogCard = ({ id, date, title, description, image }) => (
    <div className="blog-card">
        <img src={image} alt={title} className="blog-image" />
        <div className="blog-content">
            <p className="blog-date">{date}</p>
            <h3 className="blog-title">{title}</h3>
            <p className="blog-description">{description}</p>
            <Link href={`/blog/${id}`} className="read-more">
                Read More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
        </div>
    </div>
);

// const LatestInsights = () => {
//     const scrollRef = useRef(null);

//     const scroll = (direction) => {
//         if (scrollRef.current) {
//             const scrollAmount = direction === 'left' ? -300 : 300;
//             scrollRef.current.scrollBy({
//                 left: scrollAmount,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     return (
//         <div className="insights-container">
//             <div className="insights-header">
//                 <h2 className="insights-title">Latest Insights & News</h2>
//                 <p className="insights-subtitle">
//                     Stay updated with the latest trends in technology and development
//                 </p>
//             </div>

//             <div className="blog-section">
//                 <button 
//                     className="scroll-button left"
//                     onClick={() => scroll('left')}
//                     aria-label="Scroll left"
//                 >
//                     <ChevronLeft className="w-6 h-6" />
//                 </button>
                
//                 <div className="blog-grid" ref={scrollRef}>
//                     {posts.map((post) => (
//                         <BlogCard key={post.id} {...post} />
//                     ))}
//                 </div>

//                 <button 
//                     className="scroll-button right"
//                     onClick={() => scroll('right')}
//                     aria-label="Scroll right"
//                 >
//                     <ChevronRight className="w-6 h-6" />
//                 </button>
//             </div>

//             <div className="view-all-container">
//                 <Link href="/blog" className="view-all-button">
//                     View All Posts
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default LatestInsights;



const LatestInsights = () => {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardWidth = 380; // Width of each card including gap
    const autoScrollInterval = 2000; // Increased time between auto-scrolls to 4 seconds

    // Create an extended array with cloned items for infinite scroll
    const extendedPosts = [...posts, ...posts, ...posts.slice(0, 3)];

    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollPosition = container.scrollLeft;
            const newIndex = Math.round(scrollPosition / cardWidth);
            
            // Reset position when reaching the second set of cloned items
            // if (scrollPosition >= ((posts.length * 2) * cardWidth)) {
            //     container.scrollLeft = scrollPosition - (posts.length * cardWidth);
            // }
            
            setCurrentIndex(newIndex % posts.length);
        }
    };

    const scrollToIndex = (index, behavior = 'smooth') => {
        if (scrollRef.current) {
            const scrollAmount = index * cardWidth;
            scrollRef.current.scrollTo({
                left: scrollAmount,
                behavior: behavior
            });
        }
    };

    const scroll = (direction) => {
        setIsPaused(true);
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        let intervalId;
        
        if (!isPaused) {
            intervalId = setInterval(() => {
                if (scrollRef.current) {
                    const container = scrollRef.current;
                    container.scrollBy({
                        left: cardWidth,
                        behavior: 'smooth'
                    });
                }
            }, autoScrollInterval);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isPaused]);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleMouseEnter = () => setIsPaused(true);
        const handleMouseLeave = () => setIsPaused(false);
        const handleTouchStart = () => setIsPaused(true);
        const handleTouchEnd = () => setIsPaused(false);

        container.addEventListener('scroll', handleScroll);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            container.removeEventListener('scroll', handleScroll);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div className="insights-container">
            <div className="insights-header">
                <h2 className="insights-title">Latest Insights & News</h2>
                <p className="insights-subtitle">
                    Stay updated with the latest trends in technology and development
                </p>
            </div>

            <div className="blog-section">
                <button 
                    className="scroll-button left"
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="blog-grid" ref={scrollRef}>
                    {extendedPosts.map((post, index) => (
                        <BlogCard key={`${post.id}-${index}`} {...post} />
                    ))}
                </div>

                <button 
                    className="scroll-button right"
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

           

            <div className="view-all-container">
                <Link href="/blog" className="view-all-button">
                    View All Posts
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default LatestInsights;