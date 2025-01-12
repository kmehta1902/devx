'use client'
import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contactform" className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <p>Get in touch with us for any inquiries or support. We're here to help you succeed.</p>
      
      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          {/* Contact Info Boxes */}
          <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>
              <i className="location-icon"></i>
            </div>
            <div>
              <h3>Office Location</h3>
              <p>123 Business Avenue</p>
              <p>Tech Park, Suite 456</p>
              <p>City, Country 12345</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>
              <i className="contact-icon"></i>
            </div>
            <div>
              <h3>Contact Details</h3>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Email: info@devionx.com</p>
              <p>Support: support@devionx.com</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>
              <i className="clock-icon"></i>
            </div>
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink}>
              <Facebook className={styles.icon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Twitter className={styles.icon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Instagram className={styles.icon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Linkedin className={styles.icon} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label>Name *</label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email *</label>
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Subject *</label>
            <input
              type="text"
              placeholder="Message subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Message *</label>
            <textarea
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;