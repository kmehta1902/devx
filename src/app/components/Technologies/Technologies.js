import { useState, useEffect, useRef } from 'react';
import styles from './Technologies.module.css';
import { useSwipeGesture } from '../SwipeGesture/SwipeGesture';

const Technologies = () => {
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeGesture({
    onSwipeLeft: () => {
      setCurrentCardIndex((prev) => (prev + 1) % Object.keys(technologies).length);
    },
    onSwipeRight: () => {
      setCurrentCardIndex((prev) => (prev - 1 + Object.keys(technologies).length) % Object.keys(technologies).length);
    }
  });
  const [activeName, setActiveName] = useState('');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const scrollRef = useRef(null);
  const cardScrollRef = useRef(null);
  const animationRef = useRef(null);
  const cardAnimationRef = useRef(null);
  const lastScrollTime = useRef(0);
  const lastCardScrollTime = useRef(0);
  const isMobileRef = useRef(false);

  const technologies = {
    Frontend: {
      icon: '💻',
      iconContainerClass: styles.iconContainerFrontend,
      iconClass: styles.iconFrontend,
      dotClass: styles.dotFrontend,
      items: ['React.js', 'Angular', 'Vue.js', 'Next.js', 'Tailwind CSS']
    },
    Backend: {
      icon: '⚙️',
      iconContainerClass: styles.iconContainerBackend,
      iconClass: styles.iconBackend,
      dotClass: styles.dotBackend,
      items: ['Node.js', 'Python', 'Java Spring', '.NET Core', 'PHP Laravel']
    },
    Mobile: {
      icon: '📱',
      iconContainerClass: styles.iconContainerMobile,
      iconClass: styles.iconMobile,
      dotClass: styles.dotMobile,
      items: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'Xamarin']
    },
    'Cloud & DevOps': {
      icon: '☁️',
      iconContainerClass: styles.iconContainerCloud,
      iconClass: styles.iconCloud,
      dotClass: styles.dotCloud,
      items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins']
    }
  };

  const partners = ['AWS', 'Google', 'Microsoft', 'Oracle', 'IBM', 'Salesforce'];
  const scrollingPartners = [...Array(75)].flatMap(() => partners);

  const findCenterPartner = () => {
    const container = scrollRef.current;
    if (!container) return null;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + (containerRect.width / 2);
    
    let closestPartner = null;
    let closestDistance = Infinity;

    const partnerElements = container.getElementsByClassName(styles.partner);
    Array.from(partnerElements).forEach(partner => {
      const rect = partner.getBoundingClientRect();
      const partnerCenter = rect.left + (rect.width / 2);
      const distance = Math.abs(containerCenter - partnerCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestPartner = partner;
      }
    });

    return closestPartner;
  };

  const startCardScrolling = () => {
    if (!isMobileRef.current) return;
    
    const scroll = (timestamp) => {
      if (!lastCardScrollTime.current) lastCardScrollTime.current = timestamp;
      const deltaTime = timestamp - lastCardScrollTime.current;
      
      if (deltaTime >= 3000) { // Change card every 3 seconds
        setCurrentCardIndex((prev) => (prev + 1) % Object.keys(technologies).length);
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

  const startPartnerScrolling = () => {
    const container = scrollRef.current;
    let scrollSpeed = window.innerWidth <= 480 ? 0.5 : 1;
    
    const scroll = (timestamp) => {
      if (!lastScrollTime.current) lastScrollTime.current = timestamp;
      const deltaTime = timestamp - lastScrollTime.current;
      
      if (deltaTime >= 16) {
        if (container) {
          if (container.scrollLeft >= (container.scrollWidth / 3) * 2) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += scrollSpeed;
          }

          const centerPartner = findCenterPartner();
          if (centerPartner) {
            const newActiveName = centerPartner.textContent;
            if (newActiveName !== activeName) {
              setActiveName(newActiveName);
            }
          }
        }
        lastScrollTime.current = timestamp;
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
  };

  const stopPartnerScrolling = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      lastScrollTime.current = 0;
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth <= 768;
      if (isMobileRef.current) {
        startCardScrolling();
      } else {
        stopCardScrolling();
        setCurrentCardIndex(0);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const container = scrollRef.current;
    const cardContainer = cardScrollRef.current;
    
    if (container) {
      const timeoutId = setTimeout(() => {
        container.scrollLeft = 0;
        startPartnerScrolling();
      }, 1000);

      container.addEventListener('mouseenter', stopPartnerScrolling);
      container.addEventListener('mouseleave', startPartnerScrolling);
      container.addEventListener('touchstart', stopPartnerScrolling);
      container.addEventListener('touchend', startPartnerScrolling);

      return () => {
        clearTimeout(timeoutId);
        stopPartnerScrolling();
        stopCardScrolling();
        window.removeEventListener('resize', checkMobile);
        container.removeEventListener('mouseenter', stopPartnerScrolling);
        container.removeEventListener('mouseleave', startPartnerScrolling);
        container.removeEventListener('touchstart', stopPartnerScrolling);
        container.removeEventListener('touchend', startPartnerScrolling);
      };
    }
  }, []);

  const techEntries = Object.entries(technologies);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Technologies We Master</h1>
        <p className={styles.subtitle}>
          We leverage the latest technologies to build scalable and robust solutions for your business
        </p>
      </div>
      <div className={styles.grid} 
  ref={cardScrollRef}
  onTouchStart={(e) => {
    isMobileRef.current && stopCardScrolling();
    onTouchStart(e);
  }}
  onTouchMove={onTouchMove}
  onTouchEnd={(e) => {
    onTouchEnd(e);
    isMobileRef.current && startCardScrolling();
  }}
>
        {techEntries.map(([category, { icon, iconContainerClass, iconClass, dotClass, items }], index) => (
          <div 
            key={category} 
            className={`${styles.card} ${index === currentCardIndex ? styles.activeCard : ''}`}
            onMouseEnter={() => isMobileRef.current && stopCardScrolling()}
            onMouseLeave={() => isMobileRef.current && startCardScrolling()}
            onTouchStart={() => isMobileRef.current && stopCardScrolling()}
            onTouchEnd={() => isMobileRef.current && startCardScrolling()}
          >
            <div className={`${styles.iconContainer} ${iconContainerClass}`}>
              <span className={iconClass}>{icon}</span>
            </div>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <ul className={styles.list}>
              {items.map((tech) => (
                <li key={tech} className={styles.listItem}>
                  <span className={dotClass}>•</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.partnersSection}>
        <h2 className={styles.partnersTitle}>Our Technology Partners</h2>
        <div className={styles.partnersWrapper}>
          <div 
            ref={scrollRef}
            className={styles.partnersTrack}
          >
            {scrollingPartners.map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className={`${styles.partner} ${partner === activeName ? styles.partnerActive : ''}`}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;