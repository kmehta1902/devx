'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Portfolio from '../Portfolio/page';
import Technologies from '../components/Technologies/Technologies';
import DevelopmentProcess from '../components/DevelopmentProcess/DevelopmentProcess';
import Testimonials from '../components/Testimonials/Testimonials';
import QuoteForm from '../components/QuoteForm/QuoteForm';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';


export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const targetId = event.currentTarget.getAttribute('href');
      if (targetId?.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const scrollLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
    scrollLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup: Remove event listeners on component unmount
    return () => {
      scrollLinks.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Head>
        <title>DevionX Technologies - Custom Software Solutions</title>
        <meta
          name="description"
          content="Custom software solutions to transform your business. Web development, mobile apps, enterprise solutions, and more."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Navbar />

        <Hero />
        <Services />
        <Portfolio />
        <Technologies />
        <DevelopmentProcess />
        <Testimonials />
        <QuoteForm />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
