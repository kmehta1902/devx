'use client'
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Company Section */}
        <div className={styles.company}>
          <h2>DevionX Technologies</h2>
          <p>Providing innovative software solutions for businesses worldwide.</p>
          <div className={styles.socialLinks}>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Services Section */}
        <div className={styles.section}>
          <h3>Services</h3>
          <ul>
            <li><a href="/Portfolio?type=e-commerce">Web Development</a></li>
            <li><a href="#">Mobile Development</a></li>
            <li><a href="#">Cloud Solutions</a></li>
            <li><a href="#">Enterprise Software</a></li>
            <li><a href="#">Digital Transformation</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Work</a></li>
            <li><a href="#">Get a Quote</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.section}>
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> Office Address Here</p>
          <p><i className="fas fa-envelope"></i> contact@devionx.com</p>
          <p><i className="fas fa-phone"></i> +1234 567 8900</p>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2024 DevionX Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;