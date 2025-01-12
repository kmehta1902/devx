'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import styles from './page.module.css';
import Navbar from '../components/Navbar/Navbar';
import Testimonials from '../components/Testimonials/Testimonials';
import Blog from '../components/Blog/Blog';
import QuoteForm from '../components/QuoteForm/QuoteForm';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
const ServiceDetailPage = ({
  title,
  description,
  features = [],
  technologies = [],
  benefits = [],
  process = [],
}) => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(`.${styles.fadeIn}`);
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <div>
        <Navbar />
    <div className={styles.container}>
      {/* Hero Section */}
      {/* <section className={styles.hero}> */}
        <div className={styles.heroContent}> 
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroDescription}>{description}</p>
        </div>
    {/* //   </section> */}

      {/* Features Section */}
      <section className={`${styles.section} ${styles.fadeIn}`}>
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <CheckCircle className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className={`${styles.section} ${styles.fadeIn}`}>
        <h2 className={styles.sectionTitle}>Our Process</h2>
        <div className={styles.processTimeline}>
          {process.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.processNumber}>{index + 1}</div>
              <h3 className={styles.processTitle}>{step.title}</h3>
              <p className={styles.processDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className={`${styles.section} ${styles.fadeIn}`}>
        <h2 className={styles.sectionTitle}>Technologies We Use</h2>
        <div className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`${styles.section} ${styles.fadeIn}`}>
        <h2 className={styles.sectionTitle}>Benefits</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <CheckCircle className={styles.benefitIcon} />
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className={`${styles.ctaSection} ${styles.fadeIn}`}>
        <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
        <p className={styles.ctaDescription}>
          Let's discuss how our {title} can help you achieve your goals.
        </p>
        <button className={styles.ctaButton}>
          Contact Us Now
          <ArrowRight className={styles.buttonIcon} />
        </button>
      </section> */}
    </div>
    <Testimonials />
                <Blog />
                <QuoteForm />
                <ContactForm />
                <Footer />
    </div>
  );
};

export default ServiceDetailPage;
