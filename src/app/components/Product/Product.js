'use client'
import { useState, useEffect } from 'react';
import styles from './Product.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useRouter } from 'next/navigation';

export default function Blog({ initialProjectId }) {
  const router = useRouter();
  const [project, setProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      date: '15 January 2024',
      category: 'Web Applications',
      image: '/api/placeholder/800/400',
      description: 'A comprehensive e-commerce solution that revolutionizes online retail with advanced features and seamless user experience',
      content: `Our e-commerce platform represents the pinnacle of modern digital retail solutions, designed to meet the evolving needs of both merchants and consumers. This revolutionary platform combines cutting-edge technology with intuitive design to create a seamless shopping experience.

      The project began with extensive market research and user interviews to identify pain points in existing e-commerce solutions. Our team spent three months developing a robust architecture that could handle high-volume transactions while maintaining optimal performance. The platform's microservices architecture ensures scalability and reliability, while the React-based frontend delivers a smooth, app-like experience.

      One of our major achievements was implementing an AI-powered recommendation engine that analyzes user behavior and purchase history to provide personalized product suggestions. This feature alone has contributed to a 35% increase in cross-selling success rates for our clients.`,
      technologies: [
        'React', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 
        'Elasticsearch', 'GraphQL', 'Stripe API', 'React Native'
      ],
      features: [
        'AI-powered product recommendations',
        'Real-time inventory management with automated restock alerts',
        'Multi-currency support with automatic exchange rate updates',
        'Advanced analytics dashboard with customizable metrics',
        'Integrated marketing tools with email and SMS automation',
        'Mobile-first responsive design with PWA capabilities',
        'Multi-vendor marketplace support',
        'Automated tax calculation and compliance',
        'Customer loyalty program management',
        'Advanced fraud detection system'
      ],
      results: 'The platform has processed over 1 million transactions worth $50M+ in the first year. Our clients report an average 45% increase in conversion rates and a 60% reduction in cart abandonment. Mobile sales have increased by 85% on average, and customer retention rates have improved by 40%.'
    },
    {
        id: 2,
        title: 'Healthcare App',
        date: '22 December 2023',
        category: 'Mobile Apps',
        image: '/api/placeholder/800/400',
        description: 'An innovative healthcare management solution that bridges the gap between patients and healthcare providers',
        content: `The Healthcare App project emerged from the critical need to streamline patient care and medical practice management in the post-pandemic era. Our team worked closely with healthcare professionals and patients to create a comprehensive solution that addresses the complexities of modern healthcare delivery.
  
        The development process involved extensive compliance research to ensure adherence to HIPAA regulations and international data protection standards. We implemented state-of-the-art encryption protocols and secure data transmission methods to protect sensitive medical information.
  
        The app's telemedicine feature was particularly challenging to implement, requiring careful optimization of video streaming capabilities while maintaining patient privacy. We developed a custom WebRTC implementation that reduces bandwidth usage by 40% compared to standard solutions while maintaining HD video quality.`,
        technologies: [
          'React Native', 'Node.js', 'PostgreSQL', 'WebRTC', 'Firebase',
          'Azure Health Services', 'TensorFlow', 'Socket.io', 'Jest', 'CircleCI'
        ],
        features: [
          'Real-time telemedicine consultations with HD video',
          'AI-powered symptom checker and preliminary diagnosis',
          'Electronic Health Records (EHR) management',
          'Automated appointment scheduling with smart queuing',
          'Medication tracking with reminder notifications',
          'Integration with wearable devices for vital signs monitoring',
          'Secure messaging system between patients and providers',
          'Digital prescription management',
          'Insurance verification and claims processing',
          'Emergency care locator with real-time availability'
        ],
        results: 'The app has facilitated over 500,000 virtual consultations, reduced patient wait times by 60%, and improved diagnostic accuracy by 35%. Hospital readmission rates have decreased by 25%, and patient satisfaction scores have increased by 85%.'
      },
      {
        id: 3,
        title: 'CRM System',
        date: '10 November 2023',
        category: 'Enterprise Solutions',
        image: '/api/placeholder/800/400',
        description: 'A next-generation customer relationship management system that transforms business relationships',
        content: `Our CRM system represents a paradigm shift in how businesses manage customer relationships. The project was initiated in response to the growing need for a more intelligent and automated approach to customer relationship management.
  
        We incorporated machine learning algorithms to analyze customer interaction patterns and predict customer needs and behaviors. The system's natural language processing capabilities enable automatic sentiment analysis of customer communications, helping businesses respond more effectively to customer needs.
  
        The development team implemented a unique approach to data visualization, creating interactive 3D customer journey maps that provide unprecedented insights into the customer lifecycle. The system's modular architecture allows for easy customization and integration with existing business tools.`,
        technologies: [
          'Angular', 'Python', 'Django', 'MySQL', 'Redis', 'TensorFlow',
          'Kubernetes', 'Elasticsearch', 'RabbitMQ', 'Power BI'
        ],
        features: [
          'AI-driven customer segmentation and targeting',
          'Predictive analytics for sales forecasting',
          'Automated lead scoring and qualification',
          'Interactive 3D customer journey mapping',
          'Integrated social media monitoring and engagement',
          'Advanced email marketing automation',
          'Custom workflow automation builder',
          'Real-time collaboration tools',
          'Mobile CRM with offline capabilities',
          'Comprehensive API integration suite'
        ],
        results: 'Clients using our CRM system have reported a 75% increase in lead conversion rates, 50% improvement in customer retention, and 40% reduction in customer service response times. Sales productivity has increased by 35% on average.'
      },
      {
        id: 4,
        title: 'Fintech Solution',
        date: '5 October 2023',
        category: 'Enterprise Solutions',
        image: '/api/placeholder/800/400',
        description: 'A revolutionary financial technology platform that modernizes banking and investment management',
        content: `Our Fintech Solution introduces cutting-edge technology to traditional banking and investment management. The platform was developed in collaboration with leading financial institutions to address the growing demand for digital banking solutions.
  
        The system's blockchain implementation ensures transparent and secure transactions, while our proprietary algorithmic trading engine provides institutional-grade investment capabilities to retail investors. We developed a unique risk assessment model that combines traditional metrics with alternative data sources for more accurate credit scoring.
  
        The platform's real-time processing capabilities handle over 100,000 transactions per second, making it one of the fastest financial platforms available. Our implementation of zero-knowledge proofs ensures complete privacy while maintaining regulatory compliance.`,
        technologies: [
          'React', 'Go', 'PostgreSQL', 'Ethereum', 'Kafka', 'Redis',
          'TensorFlow', 'Docker', 'Kubernetes', 'Tableau'
        ],
        features: [
          'Blockchain-based transaction processing',
          'AI-powered risk assessment and fraud detection',
          'Real-time market data analysis and visualization',
          'Automated portfolio rebalancing',
          'Peer-to-peer lending platform',
          'Multi-currency digital wallet',
          'Regulatory compliance automation',
          'Open banking API integration',
          'Biometric authentication',
          'Advanced tax reporting tools'
        ],
        results: 'The platform processes over $1B in monthly transactions, has reduced fraud incidents by 90%, and improved investment returns for clients by an average of 23%. Customer onboarding time has been reduced from days to minutes.'
      },
      {
        id: 5,
        title: 'IoT Dashboard',
        date: '15 September 2023',
        category: 'Web Applications',
        image: '/api/placeholder/800/400',
        description: 'An advanced IoT monitoring and management platform for smart infrastructure',
        content: `The IoT Dashboard project was conceived to address the growing complexity of managing large-scale IoT deployments in smart cities and industrial settings. Our team developed a sophisticated platform that handles real-time data from millions of connected devices while providing actionable insights.
  
        The platform's architecture was designed to handle massive data ingestion rates while maintaining sub-second query response times. We implemented edge computing capabilities to reduce latency and bandwidth usage, resulting in a 60% reduction in cloud computing costs.
  
        A key innovation was our implementation of predictive maintenance algorithms that combine sensor data with environmental factors to accurately predict equipment failures before they occur. The system's machine learning models are continuously trained on new data, improving prediction accuracy over time.`,
        technologies: [
          'React', 'Python', 'TimescaleDB', 'Apache Kafka', 'TensorFlow',
          'Grafana', 'Prometheus', 'Docker', 'Kubernetes', 'MQTT'
        ],
        features: [
          'Real-time device monitoring and management',
          'Predictive maintenance with AI',
          'Custom alert rule engine',
          'Interactive 3D visualization of sensor networks',
          'Automated device provisioning',
          'Edge computing support',
          'Energy consumption optimization',
          'Remote firmware updates',
          'Custom reporting and analytics',
          'Integration with major IoT platforms'
        ],
        results: 'The platform manages over 1 million IoT devices, has reduced maintenance costs by 45%, and improved device uptime by 35%. Energy consumption in smart buildings has been reduced by 30% on average.'
      },
      {
        id: 6,
        title: 'ERP System',
        date: '1 August 2023',
        category: 'Enterprise Solutions',
        image: '/api/placeholder/800/400',
        description: 'A comprehensive enterprise resource planning system that streamlines business operations',
        content: `Our ERP system represents a complete reimagining of enterprise resource planning for the modern age. The project began with extensive research into pain points of traditional ERP systems and emerging needs of modern businesses.
  
        We developed a unique microservices architecture that allows for unprecedented scalability and customization. Each module can be deployed independently, allowing businesses to start with essential features and scale up as needed. The system's AI-powered process automation engine has revolutionized how businesses handle routine tasks.
  
        A standout feature is our implementation of digital twins for production processes, allowing businesses to simulate and optimize their operations in a virtual environment before making changes in the real world. The system also includes advanced supply chain optimization algorithms that adapt to real-world conditions in real-time.`,
        technologies: [
          'Vue.js', 'Java Spring', 'Oracle', 'RabbitMQ', 'Elasticsearch',
          'Docker', 'Kubernetes', 'TensorFlow', 'Apache Spark', 'Power BI'
        ],
        features: [
          'AI-powered process automation',
          'Digital twin simulation',
          'Advanced supply chain optimization',
          'Integrated business intelligence',
          'Real-time inventory management',
          'Human resource management',
          'Financial management and forecasting',
          'Project management with resource allocation',
          'Quality management system',
          'Regulatory compliance management'
        ],
        results: 'Clients have reported 40% reduction in operational costs, 50% improvement in inventory accuracy, and 65% reduction in order processing time. Employee productivity has increased by 30% on average.'
      }
    // ... Add other projects similarly
  ];

  useEffect(() => {
    if (initialProjectId) {
      const foundProject = projects.find(p => p.id === initialProjectId);
      if (foundProject) {
        setProject(foundProject);
      } else {
        // Redirect to portfolio if project not found
        router.push('/portfolio');
      }
    }
  }, [initialProjectId, router]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>
        <article className={styles.blogPost}>
          <div className={styles.imageContainer}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <span className={styles.category}>{project.category}</span>
          </div>
          
          <div className={styles.content}>
            <div className={styles.metadata}>
              <span className={styles.date}>{project.date}</span>
            </div>
            
            <h1 className={styles.projectTitle}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>
            
            <div className={styles.details}>
              <div className={styles.section}>
                <h2>About the Project</h2>
                <p>{project.content}</p>
              </div>
              
              <div className={styles.section}>
                <h2>Technologies Used</h2>
                <div className={styles.tags}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className={styles.section}>
                <h2>Key Features</h2>
                <ul className={styles.featureList}>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.section}>
                <h2>Results</h2>
                <p>{project.results}</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}