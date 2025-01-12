'use client';
import { useState, useEffect, useRef } from 'react';
import { useSwipeGesture } from '../SwipeGesture/SwipeGesture';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoScrollIntervalRef = useRef(null);
  const isMobileRef = useRef(false);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO, Tech Solutions Inc.',
      initials: 'JD',
      color: '#4285f4',
      text: "DevionX Technologies delivered our project on time and exceeded our expectations. Their team's expertise and professionalism made the development process smooth and efficient.",
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Marketing Director, Global Retail',
      initials: 'SJ',
      color: '#34a853',
      text: "Working with DevionX Technologies has been a game-changer for our business. Their innovative solutions and attention to detail have helped us achieve our digital transformation goals.",
    },
    {
      id: 3,
      name: 'Michael Park',
      position: 'CTO, Innovation Labs',
      initials: 'MP',
      color: '#a142f4',
      text: "The team at DevionX Technologies demonstrates exceptional technical expertise and commitment to quality. They've been instrumental in our digital success.",
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      position: 'Marketing Director, Global Retail',
      initials: 'SJ',
      color: '#34a853',
      text: "Working with DevionX Technologies has been a game-changer for our business. Their innovative solutions and attention to detail have helped us achieve our digital transformation goals.",
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      position: 'Marketing Director, Global Retail',
      initials: 'SJ',
      color: '#34a853',
      text: "Working with DevionX Technologies has been a game-changer for our business. Their innovative solutions and attention to detail have helped us achieve our digital transformation goals.",
    },
  ];

  const maxVisibleCards = 3;
  const maxIndex = testimonials.length - maxVisibleCards;

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeGesture({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrev,
    threshold: 50,
    lockVertical: true
  });

  const startAutoScroll = () => {
    if (!isPaused) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= maxIndex) {
            return 0;
          }
          return prev + 1;
        });
      }, 3000);
    }
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const handleMouseDown = (e) => {
    stopAutoScroll();
    onTouchStart({
      touches: [{
        clientX: e.clientX,
        clientY: e.clientY
      }]
    });
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) {
      onTouchMove({
        touches: [{
          clientX: e.clientX,
          clientY: e.clientY
        }]
      });
    }
  };

  const handleMouseUp = (e) => {
    onTouchEnd({
      changedTouches: [{
        clientX: e.clientX,
        clientY: e.clientY
      }]
    });
    if (!isPaused) startAutoScroll();
  };

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      isMobileRef.current = isMobileView;
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
      stopAutoScroll();
    };
  }, []);

  useEffect(() => {
    stopAutoScroll();
    if (!isPaused) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [isPaused]);

  return (
    <section id="testimonials" className={styles.container}>
      <h1 className={styles.title}>Client Testimonials</h1>
      <p className={styles.subtitle}>
        What our clients say about working with DevionX Technologies
      </p>

      <div 
        className={styles.testimonialCarousel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        // onMouseLeave={handleMouseUp}
        onTouchStart={(e) => {
          stopAutoScroll();
          onTouchStart(e);
        }}
        onTouchMove={onTouchMove}
        onTouchEnd={(e) => {
          onTouchEnd(e);
          if (!isPaused) startAutoScroll();
        }}
      >
        {!isMobile && (
          <>
            <button 
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={() => {
                handlePrev();
                stopAutoScroll();
              }}
              style={{ display: currentIndex > 0 ? 'flex' : 'none' }}
            >
              ←
            </button>
            <button 
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={() => {
                handleNext();
                stopAutoScroll();
              }}
              style={{ display: currentIndex < maxIndex ? 'flex' : 'none' }}
            >
              →
            </button>
          </>
        )}

        <div 
          className={styles.carouselTrack}
          style={{
            transform: !isMobile ? `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex}rem))` : undefined
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`${styles.card} ${isMobile ? (index === currentIndex ? styles.activeCard : '') : ''}`}
            >
              <div className={styles.header}>
                <div
                  className={styles.avatar}
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.initials}
                </div>
                <div className={styles.info}>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.position}</p>
                </div>
              </div>
              <div className={styles.stars}>{'★'.repeat(5)}</div>
              <p className={styles.text}>{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.navigationDots}>
          {Array.from({ length: isMobile ? testimonials.length : maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
              onClick={() => {
                setCurrentIndex(i);
                stopAutoScroll();
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;