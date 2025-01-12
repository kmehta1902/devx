'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styles from './Hero.module.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`${styles.shinyText} ${disabled ? styles.disabled : ''} ${className}`}
      style={{ '--animation-duration': animationDuration }}
      data-text={text}
    >
      {text}
    </span>
  );
};

const SequentialShinyText = ({ text, speed = 0.2 }) => (
  <div className={styles.sequentialWrapper}>
    {text.split('').map((char, index) => (
      <span
        key={index}
        className={styles.sequentialChar}
        style={{
          '--char-index': index,
          '--animation-delay': `${index * speed}s`,
        }}
      >
        {char}
      </span>
    ))}
  </div>
);

const BlurText = ({ children, delay = 0, inView }) => (
  <motion.span
    initial={{ filter: 'blur(10px)', opacity: 0 }}
    animate={inView ? {
      filter: 'blur(0px)',
      opacity: 1,
    } : { filter: 'blur(10px)', opacity: 0 }}
    transition={{
      duration: 0.8,
      delay,
      ease: 'easeOut',
    }}
    className={styles.blurText}
  >
    {children}
  </motion.span>
);

export default function Hero() {
  const [key, setKey] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false,
    margin: "-100px 0px" // Triggers slightly before the section comes into view
  });

  useEffect(() => {
    if (isInView) {
      setKey((prev) => prev + 1);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: { scale: 0.95 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className={styles.wrapper} ref={sectionRef}>
      <div className={styles.container}>
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className={styles.content}>
              <motion.div variants={itemVariants} className={styles.badge}>
                <SequentialShinyText text="Innovative Software Solutions" speed={0.1} />
              </motion.div>

              <motion.h1 variants={itemVariants} className={styles.heading}>
                <BlurText delay={0.2} inView={isInView}>
                  Transform Your Business with{' '}
                  <span className={styles.highlight}>
                    Custom Software Solutions
                  </span>
                </BlurText>
              </motion.h1>

              <motion.p variants={itemVariants} className={styles.description}>
                <BlurText delay={0.4} inView={isInView}>
                  We craft tailored software solutions that empower businesses to thrive in the
                  digital age. From web applications to enterprise systems, we bring your vision to
                  life.
                </BlurText>
              </motion.p>

              <motion.div variants={itemVariants} className={styles.buttonGroup}>
                <motion.button
                  className={styles.primaryButton}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <BlurText delay={0.6} inView={isInView}><a href='/GetaQuote'>Get Started →</a></BlurText>
                </motion.button>
                <motion.button
                  className={styles.secondaryButton}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <BlurText delay={0.7} inView={isInView}><a href='/Portfolio'>View Our Work</a></BlurText>
                </motion.button>
              </motion.div>
            </div>

            <motion.div variants={imageVariants} className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <div className={styles.animationWrapper}>
                  <div className={styles.shape}>
                    <div className={styles.animatedCircle}></div>
                    <div className={styles.animatedCircle}></div>
                    <div className={styles.animatedCircle}></div>
                    <div className={styles.floatingDot}></div>
                    <div className={styles.floatingDot}></div>
                    <div className={styles.floatingDot}></div>
                    <div className={styles.floatingDot}></div>
                    <div className={styles.glowingRing}></div>
                    <div className={styles.glowingRing}></div>
                    <div className={styles.glowingRing}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}