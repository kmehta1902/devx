import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Users, Trophy, Computer } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import styles from './Stats.module.css';

const CountUpNumber = ({ number, delay, shouldStart }) => {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const finalNumber = parseInt(number, 10);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    const timeout = setTimeout(() => {
      const start = Date.now();
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.floor(progress * finalNumber));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [finalNumber, delay, shouldStart]);

  return count.toString();
};

const stats = [
  {
    number: '100',
    label: 'Projects Delivered',
    suffix: '+',
    icon: <Briefcase size={32} style={{ color: '#2563eb' }} />
  },
  {
    number: '50',
    label: 'Happy Clients',
    suffix: '+',
    icon: <Users size={32} style={{ color: '#2563eb' }} />
  },
  {
    number: '95',
    label: 'Success Rate',
    suffix: '%',
    icon: <Trophy size={32} style={{ color: '#2563eb' }} />
  },
  {
    number: '50',
    label: 'Software Developers',
    suffix: '+',
    icon: <Computer size={32} style={{ color: '#2563eb' }} />
  },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-100px 0px"
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      className={styles.statsGrid}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={index} 
          className={styles.statCard}
          variants={cardVariants}
        >
          <div className={styles.statContent}>
            <motion.div 
              className={styles.iconWrapper}
              variants={iconVariants}
            >
              {stat.icon}
            </motion.div>
            <div className={styles.statNumber}>
              <CountUpNumber 
                number={stat.number} 
                delay={0.9 + index * 0.1} 
                shouldStart={isInView}
              />
              {stat.suffix}
            </div>
            <motion.div 
              className={styles.statLabel}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { delay: 0.3 }
                }
              }}
            >
              {stat.label}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stats;