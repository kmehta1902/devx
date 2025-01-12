'use client';
<<<<<<< HEAD

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from './Portfolio.module.css';
import Testimonials from '../components/Testimonials/Testimonials';
import Blog from '../components/Blog/Blog';
import QuoteForm from '../components/QuoteForm/QuoteForm';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Stethoscope,
  Users,
  LineChart,
  Gauge,
  Building2,
} from 'lucide-react';

export default function Portfolio() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollInterval = useRef(null);

  const productFilterMap = {
    lms: 'Enterprise Solutions',
    erp: 'Enterprise Solutions',
    crm: 'Mobile Apps',
    'e-commerce': 'Web Applications',
  };

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      type: 'Web Applications',
      color: 'blue',
      description:
        'A full-featured online shopping platform with advanced inventory management',
      Icon: ShoppingCart,
    },
    {
      id: 2,
      name: 'Healthcare App',
      type: 'Mobile Apps',
      color: 'purple',
      description:
        'A comprehensive app designed to improve patient care and hospital efficiency',
      Icon: Stethoscope,
    },
    {
      id: 3,
      name: 'CRM System',
      type: 'Enterprise Software',
      color: 'pink',
      description:
        'An advanced customer relationship management system for businesses',
      Icon: Users,
    },
    {
      id: 4,
      name: 'Fintech Solution',
      type: 'Enterprise Software',
      color: 'green',
      description:
        'A secure and scalable platform for modern financial services',
      Icon: LineChart,
    },
    {
      id: 5,
      name: 'IoT Dashboard',
      type: 'Web Applications',
      color: 'orange',
      description:
        'A dashboard for monitoring IoT devices with real-time analytics',
      Icon: Gauge,
    },
    {
      id: 6,
      name: 'ERP System',
      type: 'Enterprise Software',
      color: 'indigo',
      description:
        'A robust enterprise resource planning system for large-scale businesses',
      Icon: Building2,
    },
  ];

  useEffect(() => {
    const productType = searchParams.get('type');
    if (productType && productFilterMap[productType]) {
      setActiveFilter(productFilterMap[productType]);
    }
  }, [searchParams]);

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused && filteredProjects.length > 3) {
      scrollInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + 1 >= filteredProjects.length ? 0 : prevIndex + 1
        );
      }, 3000); // Scroll every 3 seconds
    }
    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [isPaused, filteredProjects.length]);

  // Reset current index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const getVisibleProjects = () => {
    const visibleProjects = [];
    const projectCount = filteredProjects.length;

    for (let i = 0; i < Math.min(3, projectCount); i++) {
      const index = (currentIndex + i) % projectCount;
      visibleProjects.push(filteredProjects[index]);
    }

    return visibleProjects;
  };

  return (
    <div>
      <Navbar />
      <section id="portfolio" className={styles.portfolio}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>Our Portfolio</h2>
            <p className={styles.description}>
              Explore our successful projects that showcase our expertise in
              delivering innovative solutions.
            </p>
          </div>
          <div className={styles.filters}>
            {[
              'All Projects',
              'Web Applications',
              'Mobile Apps',
              'Enterprise Software',
            ].map((filter) => (
              <button
                key={filter}
                className={`${styles.filterButton} ${
                  activeFilter === filter ? styles.active : ''
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <motion.div
            className={styles.grid}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
            onClick={() => setIsPaused(true)}
          >
            {getVisibleProjects().map((project, index) => {
              const Icon = project.Icon;
              return (
                <motion.div
                  key={`${project.id}-${index}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={`/Portfolio/${project.id}`}
                    className={styles.projectCard}
                  >
                    <div
                      className={`${styles.projectCard} ${
                        styles[project.color] || ''
                      }`}
                    >
                      <div className={styles.cardHeader}>
                        <Icon className={styles.projectIcon} size={24} />
                        <h3 className={styles.projectTitle}>
                          {project.name}
                        </h3>
                      </div>
                      <div className={styles.cardOverlay}>
                        <p className={styles.projectDescription}>
                          {project.description}
                        </p>
                        <span className={styles.caseStudyLink}>
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <Testimonials />
      <Blog />
      <QuoteForm />
      <ContactForm />
      <Footer />
    </div>
  );
=======
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Testimonials from '../../components/Testimonials/Testimonials';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import SplashCursor from '../../components/Cursor/SplashCursor';
import Blog from '../../components/Blog/Blog'

export default function Home() {

    return (
        <div>

            <main>
                <Navbar />
                <SplashCursor />

                <Testimonials />
                <Blog />
                <QuoteForm />
                <ContactForm />
            </main>

            <Footer />
        </div>
    );
>>>>>>> 1b04f56d25a0187f0ea002f618081342944803d5
}
