// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import Image from 'next/image';
// import './BlogPost.css';
// import Footer from '@/app/components/Footer/Footer';
// import Navbar from '@/app/components/Navbar/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// const posts = [
//     {
//         id: 1,
//         date: '22 January 2024 • 08:45 AM',
//         title: 'How to Use Message Apps to Communicate, and Share',
//         description: 'Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.',
//         content: {
//             introduction: `In the fast-paced digital age, messaging apps have become an integral part of our daily communication. Whether you're keeping in touch with friends, family, or colleagues, mastering the art of using messaging apps effectively can enhance your communication experience. Here are some tips on how to make the most out of message apps to communicate and share seamlessly:`,
//             sections: [
//                 {
//                     id: 'organize-contacts',
//                     title: 'Organize Your Contacts',
//                     content: `Keep your messaging app organized by categorizing your contacts into groups or creating lists. This makes it easier to find specific contacts and ensures that your conversations are streamlined and efficient.`
//                 },
//                 {
//                     id: 'group-chats',
//                     title: 'Master the Art of Group Chats',
//                     content: `Group chats are excellent for coordinating plans, discussions, or sharing updates with multiple people. However, it's important to be mindful of the group's purpose and not overwhelm it with unrelated messages. Mute notifications if needed to avoid unnecessary distractions.`
//                 },
//                 {
//                     id: 'multimedia',
//                     title: 'Utilize Multimedia Features',
//                     content: `Modern messaging apps offer various multimedia features that can enhance your communication. Make use of voice messages, video calls, file sharing, and emoji reactions to make your conversations more engaging and expressive.`
//                 }
//             ]
//         }
//     },
// ];

// const BlogPost = () => {
//     const { id } = useParams();
//     const router = useRouter();
//     const [activeSection, setActiveSection] = useState('');

//     const post = posts.find(p => p.id === parseInt(id));

//     useEffect(() => {
//         const handleScroll = () => {
//             post?.content.sections.forEach(section => {
//                 const el = document.getElementById(section.id);
//                 if (el) {
//                     const rect = el.getBoundingClientRect();
//                     if (rect.top <= 150 && rect.bottom >= 150) {
//                         setActiveSection(section.id);
//                     }
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [post]);

//     if (!post) {
//         return (
//             <div className="not-found">
//                 <h1>Post not found</h1>
//                 <button onClick={() => router.push('/')}>Return to Home</button>
//             </div>
//         );
//     }

//     return (
//         <div className="blog-post-wrapper"> 
//             <Navbar/>
//             <div className="blog-container">
//                 {/* Sidebar Navigation */}
//                 <aside className="sidebar">
//                     <ul>
//                         {post.content.sections.map(section => (
//                             <li key={section.id}>
//                                 <a 
//                                     href={`#${section.id}`} 
//                                     className={activeSection === section.id ? 'active-link' : ''}
//                                 >
//                                     {section.title}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                     {/* Social Share Icons */}
//                     <div className="share-icons">
//                         <p>Share Article</p>
//                         <div className="social-icons">
//                             <a href="#" className="social-icon instagram">
//                                 <FontAwesomeIcon icon={faInstagram} />
//                             </a>
//                             <a href="#" className="social-icon facebook">
//                                 <FontAwesomeIcon icon={faFacebook} />
//                             </a>
//                             <a href="#" className="social-icon linkedin">
//                                 <FontAwesomeIcon icon={faLinkedin} />
//                             </a>
//                         </div>
//                     </div>
//                 </aside>

//                 {/* Main Content */}
//                 <main className="main-content">
//                     <h1>{post.title}</h1>
//                     <p className="post-date">{post.date}</p>

//                     <div className="post-image">
//                         <Image
//                             src="/blog1.png"
//                             alt={post.title}
//                             layout="fill"
//                             objectFit="cover"
//                             priority
//                         />
//                     </div>

//                     <p className="introduction">{post.content.introduction}</p>

//                     {post.content.sections.map(section => (
//                         <section key={section.id} id={section.id} className="post-section">
//                             <h2>{section.title}</h2>
//                             <p>{section.content}</p>
//                         </section>
//                     ))}
//                 </main>
//             </div>
//             <Footer/>
//         </div>
//     );
// };

// export default BlogPost;

'use client'
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import './BlogPost.css';
import Footer from '@/app/components/Footer/Footer';
import Navbar from '@/app/components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const posts = [
    {
        id: 1,
        date: '22 January 2024 • 08:45 AM',
        title: 'How to Use Message Apps to Communicate, and Share',
        description: 'Exploring how artificial intelligence is revolutionizing the software development lifecycle and improving code quality.',
        content: {
            introduction: 'In the fast-paced digital age, messaging apps have become an integral part of our daily communication. Whether you\'re keeping in touch with friends, family, or colleagues, mastering the art of using messaging apps effectively can enhance your communication experience. Here are some tips on how to make the most out of message apps to communicate and share seamlessly:',
            sections: [
                {
                    id: 'organize-contacts',
                    title: 'Organize Your Contacts',
                    content: 'Keep your messaging app organized by categorizing your contacts into groups or creating lists. This makes it easier to find specific contacts and ensures that your conversations are streamlined and efficient.'
                },
                {
                    id: 'group-chats',
                    title: 'Master the Art of Group Chats',
                    content: 'Group chats are excellent for coordinating plans, discussions, or sharing updates with multiple people. However, it\'s important to be mindful of the group\'s purpose and not overwhelm it with unrelated messages. Mute notifications if needed to avoid unnecessary distractions.'
                },
                {
                    id: 'multimedia',
                    title: 'Utilize Multimedia Features',
                    content: 'Modern messaging apps offer various multimedia features that can enhance your communication. Make use of voice messages, video calls, file sharing, and emoji reactions to make your conversations more engaging and expressive.'
                }
            ]
        }
    },
];

const BlogPost = () => {
    const { id } = useParams();
    const router = useRouter();
    const [activeSection, setActiveSection] = useState('');

    const post = posts.find(p => p.id === parseInt(id));

    useEffect(() => {
        const handleScroll = () => {
            post?.content.sections.forEach(section => {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [post]);

    if (!post) {
        return (
            <div className="not-found">
                <h1>Post not found</h1>
                <button onClick={() => router.push('/')}>Return to Home</button>
            </div>
        );
    }

    return (
        <div className="blog-post-wrapper"> 
            <Navbar/>
            <div className="blog-container">
                {/* Sidebar Navigation */}
                <aside className="sidebar">
                    <ul>
                        {post.content.sections.map(section => (
                            <li key={section.id} className={activeSection === section.id ? 'active-section' : ''}>
                                <a 
                                    href={`#${section.id}`} 
                                    className={activeSection === section.id ? 'active-link' : ''}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    {section.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Social Share Icons */}
                    <div className="share-icons">
                        <p>Share Article</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" className="social-icon facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" className="social-icon linkedin">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="main-content">
                    <h1>{post.title}</h1>
                    <p className="post-date">{post.date}</p>

                    <div className="post-image">
                        <Image
                            src="/blog1.png"
                            alt={post.title}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    <p className="introduction">{post.content.introduction}</p>

                    {post.content.sections.map(section => (
                        <section key={section.id} id={section.id} className="post-section">
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                        </section>
                    ))}
                </main>
            </div>
            <Footer/>
        </div>
    );
};

export default BlogPost;
