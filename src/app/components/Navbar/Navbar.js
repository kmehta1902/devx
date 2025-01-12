'use client'
import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
// Import FontAwesome icons for hamburger menu
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
    // State management for different menu states
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [animationDirection, setAnimationDirection] = useState('right');
    const lastMouseX = useRef(0);
    const closeTimeoutRef = useRef(null);

    const dropdownContent = {
        services: [
            {
                title: 'Customised Software Development',
                description: 'Tailored solutions for your unique business needs',

            },
            {
                title: 'Enterprise Solutions',
                description: 'Scalable solutions for large organizations'
            },
            {
                title: 'Cloud Solutions',
                description: 'Modern cloud infrastructure and services'
            },
            {
                title: 'IT Consultancy',
                description: 'Expert guidance for digital transformation'
            },
            {
                title: 'Web Application Development',
                description: 'Building dynamic and responsive web apps'
            },
            {
                title: 'IOS/Android App Development',
                description: 'Developing high-quality apps for mobile platforms'
            },
            {
                title: 'MVP Product Development',
                description: 'Rapid development of minimum viable products'
            },
            {
                title: 'UI/UX Design',
                description: 'Creating intuitive and user-friendly interfaces'
            },
            {
                title: 'Tech Resources',
                description: 'Providing skilled professionals for tech projects'
            }
        ],
        products: [
            {
                title: 'LMS',
                description: 'Learning Management System for educational institutions'
            },
            {
                title: 'ERP',
                description: 'Enterprise Resource Planning solutions'
            },
            {
                title: 'CRM',
                description: 'Customer Relationship Management tools'
            },
            {
                title: 'E-Commerce',
                description: 'Complete online retail solutions'
            }
        ],
        industries: [
            {
                title: 'BFSI',
                description: 'Banking, Financial Services and Insurance'
            },
            {
                title: 'Manufacturing',
                description: 'Smart manufacturing solutions'
            },
            {
                title: 'Pharmaceuticals',
                description: 'Healthcare and pharma technology'
            },
            {
                title: 'Education',
                description: 'EdTech and learning solutions'
            }
        ],
        company: [
            {
                title: "Leadership",
                description: "Meet the visionary leaders driving our company towards success"
            },
            {
                title: "Testimonials",
                description: "Hear from our satisfied clients and partners"
            },
            {
                title: "About Us",
                description: "Learn more about our mission, values, and vision"
            },
            {
                title: "Career",
                description: "Explore exciting career opportunities with our team"
            }
        ]
    };

    // Handle mobile menu toggle
    const handleHamburgerClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Handle mobile dropdown toggles
    const handleMobileDropdown = (key) => {
        setActiveMobileDropdown(activeMobileDropdown === key ? null : key);
    };

    // Desktop dropdown hover handlers
    const handleMouseEnter = (dropdown, e) => {
        if (window.innerWidth > 1200) {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
            const currentMouseX = e.clientX;
            setAnimationDirection(currentMouseX > lastMouseX.current ? 'right' : 'left');
            lastMouseX.current = currentMouseX;
            setActiveDropdown(dropdown);
        }
    };

    const handleMouseLeave = useCallback((e) => {
        if (window.innerWidth > 1200) {
            const currentMouseX = e.clientX;
            setAnimationDirection(currentMouseX > lastMouseX.current ? 'right' : 'left');
            lastMouseX.current = currentMouseX;
            closeTimeoutRef.current = setTimeout(() => {
                setActiveDropdown(null);
            }, 300);
        }
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                {/* Logo Section */}
                <div className={styles.navbarBrand}>
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Company Logo"
                            width={170}
                            height={50}
                            priority
                            className={styles.logo}
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className={styles.navLinksWrapper}>
                    <div className={styles.navLinks}>
                        <Link href="/" className={styles.navLink}>
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className={styles.dropdownContainer}
                            onMouseEnter={(e) => handleMouseEnter('services', e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className={styles.navLink}>Services</span>
                            {activeDropdown === 'services' && (
                                <div className={styles.dropdown}>
                                    <div className={`${styles.dropdownContent} ${styles[animationDirection]}`}>
                                        {dropdownContent.services.map((item) => (
                                            <Link
                                            key={item.title}
                                            href={`/Services/${item.title
                                                .toLowerCase() // Convert to lowercase
                                                .replace(/\s+/g, '-') // Replace spaces with hyphens
                                                .replace(/[^\w-]/g, '') // Remove special characters except hyphens
                                            }`}
                                                className={styles.dropdownItem}
                                            >
                                                <div className={styles.dropdownTitle}>{item.title}</div>
                                                <div className={styles.dropdownDescription}>{item.description}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Products Dropdown */}
                        <div
                            className={styles.dropdownContainer}
                            onMouseEnter={(e) => handleMouseEnter('products', e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className={styles.navLink}>Products</span>
                            {activeDropdown === 'products' && (
                                <div className={styles.dropdown}>
                                    <div className={`${styles.dropdownContent} ${styles[animationDirection]}`}>
                                        {dropdownContent.products.map((item) => (
                                            <Link
                                            key={item.title}
<<<<<<< HEAD
                                            href={`/Products/${item.title.toLowerCase()}`}
                                            className={styles.dropdownItem}
                                        >
                                            <div className={styles.dropdownTitle}>{item.title}</div>
                                            <div className={styles.dropdownDescription}>{item.description}</div>
                                        </Link>
=======
                                            href={`/Products/${item.title
                                                .toLowerCase() // Convert to lowercase
                                                .replace(/\s+/g, '-') // Replace spaces with hyphens
                                                .replace(/[^\w-]/g, '') // Remove special characters except hyphens
                                            }`}
                                            className={styles.dropdownItem}
                                            >
                                                <div className={styles.dropdownTitle}>{item.title}</div>
                                                <div className={styles.dropdownDescription}>{item.description}</div>
                                            </Link>
>>>>>>> 1b04f56d25a0187f0ea002f618081342944803d5
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/Portfolio" className={styles.navLink}>
                            Portfolio
                        </Link>

                        {/* Industries Dropdown */}
                        <div
                            className={styles.dropdownContainer}
                            onMouseEnter={(e) => handleMouseEnter('industries', e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className={styles.navLink}>Industries</span>
                            {activeDropdown === 'industries' && (
                                <div className={styles.dropdown}>
                                    <div className={`${styles.dropdownContent} ${styles[animationDirection]}`}>
                                        {dropdownContent.industries.map((item) => (
                                            <Link
                                            key={item.title}
                                            href={`/Industries/${item.title
                                                .toLowerCase() // Convert to lowercase
                                                .replace(/\s+/g, '-') // Replace spaces with hyphens
                                                .replace(/[^\w-]/g, '') // Remove special characters except hyphens
                                            }`}
                                            className={styles.dropdownItem}
                                            >
                                                <div className={styles.dropdownTitle}>{item.title}</div>
                                                <div className={styles.dropdownDescription}>{item.description}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Company Dropdown */}
                        <div
                            className={styles.dropdownContainer}
                            onMouseEnter={(e) => handleMouseEnter('company', e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className={styles.navLink}>Company</span>
                            {activeDropdown === 'company' && (
                                <div className={styles.dropdown}>
                                    <div className={`${styles.dropdownContent} ${styles[animationDirection]}`}>
                                        {dropdownContent.company.map((item) => (
                                            <Link
                                            key={item.title}
                                            href={`/Company/${item.title
                                                .toLowerCase() // Convert to lowercase
                                                .replace(/\s+/g, '-') // Replace spaces with hyphens
                                                .replace(/[^\w-]/g, '') // Remove special characters except hyphens
                                            }`}
                                            className={styles.dropdownItem}
                                            >
                                                <div className={styles.dropdownTitle}>{item.title}</div>
                                                <div className={styles.dropdownDescription}>{item.description}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className={styles.actionButtons}>
                    <Link href="/GetaQuote" className={styles.quoteBtn}>
                        Get a Quote
                    </Link>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={handleHamburgerClick}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className={`${styles.mobileMenu} ${styles.open}`}>
                        <Link href="/" className={styles.mobileNavLink}>
                            Home
                        </Link>

                        {/* Mobile Services Dropdown */}
                        <div className={styles.mobileDropdownContainer}>
                            <div
                                className={styles.mobileNavLink}
                                onClick={() => handleMobileDropdown('services')}
                            >
                                <span>Services</span>
                                {activeMobileDropdown === 'services' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {activeMobileDropdown === 'services' && (
                                <div className={styles.mobileDropdown}>
                                    {dropdownContent.services.map((item) => (
                                        <Link
<<<<<<< HEAD
                                            key={item.title}
                                            href={`/Services/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
=======
                                        key={item.title}
                                        href={`/Services/${item.title
                                            .toLowerCase() // Convert to lowercase
                                            .replace(/\s+/g, '-') // Replace spaces with hyphens
                                            .replace(/[^\w-]/g, '') // Remove special characters except hyphens
                                        }`}
>>>>>>> 1b04f56d25a0187f0ea002f618081342944803d5
                                            className={styles.mobileDropdownItem}
                                        >
                                            <div className={styles.dropdownTitle}>{item.title}</div>
                                            <div className={styles.dropdownDescription}>{item.description}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Products Dropdown */}
                        <div className={styles.mobileDropdownContainer}>
                            <div
                                className={styles.mobileNavLink}
                                onClick={() => handleMobileDropdown('products')}
                            >
                                <span>Products</span>
                                {activeMobileDropdown === 'products' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {activeMobileDropdown === 'products' && (
                                <div className={styles.mobileDropdown}>
                                    {dropdownContent.products.map((item) => (
                                        <Link
<<<<<<< HEAD
                                            key={item.title}
                                            href={`/Products/${item.title.toLowerCase()}`}
=======
                                        key={item.title}
                                        href={`/Products/${item.title
                                            .toLowerCase() // Convert to lowercase
                                            .replace(/\s+/g, '-') // Replace spaces with hyphens
                                            .replace(/[^\w-]/g, '') // Remove special characters except hyphens
                                        }`}
>>>>>>> 1b04f56d25a0187f0ea002f618081342944803d5
                                            className={styles.mobileDropdownItem}
                                        >
                                            <div className={styles.dropdownTitle}>{item.title}</div>
                                            <div className={styles.dropdownDescription}>{item.description}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/Portfolio" className={styles.mobileNavLink}>
                            Portfolio
                        </Link>

                        {/* Mobile Industries Dropdown */}
                        <div className={styles.mobileDropdownContainer}>
                            <div
                                className={styles.mobileNavLink}
                                onClick={() => handleMobileDropdown('industries')}
                            >
                                <span>Industries</span>
                                {activeMobileDropdown === 'industries' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {activeMobileDropdown === 'industries' && (
                                <div className={styles.mobileDropdown}>
                                    {dropdownContent.industries.map((item) => (
                                        <Link
                                        key={item.title}
                                        href={`/Industries/${item.title
                                            .toLowerCase() // Convert to lowercase
                                            .replace(/\s+/g, '-') // Replace spaces with hyphens
                                            .replace(/[^\w-]/g, '') // Remove special characters except hyphens
                                        }`}
                                            className={styles.mobileDropdownItem}
                                        >
                                            <div className={styles.dropdownTitle}>{item.title}</div>
                                            <div className={styles.dropdownDescription}>{item.description}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Company Dropdown */}
                        <div className={styles.mobileDropdownContainer}>
                            <div
                                className={styles.mobileNavLink}
                                onClick={() => handleMobileDropdown('company')}
                            >
                                <span>Company</span>
                                {activeMobileDropdown === 'company' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {activeMobileDropdown === 'company' && (
                                <div className={styles.mobileDropdown}>
                                    {dropdownContent.company.map((item) => (
                                        <Link
                                        key={item.title}
                                        href={`/Company/${item.title
                                            .toLowerCase() // Convert to lowercase
                                            .replace(/\s+/g, '-') // Replace spaces with hyphens
                                            .replace(/[^\w-]/g, '') // Remove special characters except hyphens
                                        }`}
                                            className={styles.mobileDropdownItem}
                                        >
                                            <div className={styles.dropdownTitle}>{item.title}</div>
                                            <div className={styles.dropdownDescription}>{item.description}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Quote Button */}
                        <div className={styles.mobileButtons}>
                            <Link href="/GetaQuote" className={styles.quoteBtn}>
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;