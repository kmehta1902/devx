// Services.js
'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './Services.module.css';
import { Monitor, Building2, Cloud, LightbulbIcon, Globe, Smartphone, Rocket, Palette, Users } from 'lucide-react';
import { useSwipeGesture } from '../SwipeGesture/SwipeGesture';

const ServiceCard = ({ service, isActive, isMobile }) => {
  
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!divRef.current || isMobile) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={divRef}
      className={`${styles.card} ${isActive ? styles.activeCard : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      {!isMobile && (
        <div
          className={styles.spotlight}
          style={{
            opacity: isFocused ? 1 : 0,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      )}
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          {service.icon}
        </div>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDescription}>{service.description}</p>
        <ul className={styles.featureList}>
          {service.features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <span className={styles.checkmark}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Services() {
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeGesture({
    onSwipeLeft: () => {
      setCurrentCardIndex((prev) => (prev + 1) % services.length);
    },
    onSwipeRight: () => {
      setCurrentCardIndex((prev) => (prev - 1 + services.length) % services.length);
    }
  });
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardScrollRef = useRef(null);
  const cardAnimationRef = useRef(null);
  const lastCardScrollTime = useRef(0);
  const autoScrollEnabled = useRef(true);

  const services = [
    {
      title: 'Customised Software Development',
      description: 'Tailored software solutions to meet your specific business requirements.',
      icon: <Monitor className={styles.icon} />,
      features: ['Custom Development', 'Scalable Solutions', 'Modern Technologies']
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions for large-scale operations.',
      icon: <Building2 className={styles.icon} />,
      features: ['Business Integration', 'Process Automation', 'Enterprise Security']
    },
    {
      title: 'Cloud Solutions',
      description: 'Secure and scalable cloud infrastructure and services.',
      icon: <Cloud className={styles.icon} />,
      features: ['Cloud Migration', 'AWS/Azure Services', 'Cloud Security']
    },
    {
      title: 'IT Consultancy',
      description: 'Expert guidance for your digital transformation journey.',
      icon: <LightbulbIcon className={styles.icon} />,
      features: ['Strategic Planning', 'Technical Advisory', 'Digital Transformation']
    },
    {
      title: 'Web Application Development',
      description: 'Modern and responsive web applications built with cutting-edge technologies.',
      icon: <Globe className={styles.icon} />,
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready']
    },
    {
      title: 'iOS/Android App Development',
      description: 'Native and cross-platform mobile applications.',
      icon: <Smartphone className={styles.icon} />,
      features: ['Native Apps', 'Cross-Platform', 'User-Centric Design']
    },
    {
      title: 'MVP Product Development',
      description: 'Rapid development of minimum viable products for quick market entry.',
      icon: <Rocket className={styles.icon} />,
      features: ['Rapid Development', 'Core Features', 'Market Testing']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions for optimal user experience.',
      icon: <Palette className={styles.icon} />,
      features: ['User Research', 'Interface Design', 'Usability Testing']
    },
    {
      title: 'Tech Resources',
      description: 'Skilled technical resources for your project needs.',
      icon: <Users className={styles.icon} />,
      features: ['Skilled Teams', 'Flexible Hiring', 'Project Management']
    }
  ];

  const startCardScrolling = () => {
    if (!isMobile || !autoScrollEnabled.current) return;
    
    const scroll = (timestamp) => {
      if (!lastCardScrollTime.current) lastCardScrollTime.current = timestamp;
      const deltaTime = timestamp - lastCardScrollTime.current;
      
      if (deltaTime >= 3000) { // Change card every 3 seconds
        setCurrentCardIndex((prev) => (prev + 1) % services.length);
        lastCardScrollTime.current = timestamp;
      }
      
      cardAnimationRef.current = requestAnimationFrame(scroll);
    };

    cardAnimationRef.current = requestAnimationFrame(scroll);
  };

  const stopCardScrolling = () => {
    if (cardAnimationRef.current) {
      cancelAnimationFrame(cardAnimationRef.current);
      lastCardScrollTime.current = 0;
    }
  };

  const handleInteraction = (isInteracting) => {
    autoScrollEnabled.current = !isInteracting;
    if (isInteracting) {
      stopCardScrolling();
    } else {
      startCardScrolling();
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        stopCardScrolling();
        setCurrentCardIndex(0);
      } else {
        startCardScrolling();
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      stopCardScrolling();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.description}>
            We offer comprehensive software development solutions tailored to meet your business needs.
          </p>
        </div>
        <div 
  className={styles.grid}
  ref={cardScrollRef}
  onTouchStart={(e) => {
    handleInteraction(true);
    onTouchStart(e);
  }}
  onTouchMove={onTouchMove}
  onTouchEnd={(e) => {
    onTouchEnd(e);
    handleInteraction(false);
  }}
>

          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              isActive={isMobile ? index === currentCardIndex : true}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}