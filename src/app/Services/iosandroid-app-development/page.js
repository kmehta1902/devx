'use client';
<<<<<<< HEAD
import ServiceDetailPage from '../page';
import { Smartphone, RefreshCcw, ShieldCheck, Code, Layout } from 'lucide-react';

const MobileAppDevelopmentPage = () => {
  const pageData = {
    title: "iOS & Android App Development",
    description: "Build powerful, scalable, and user-centric mobile applications tailored for iOS and Android platforms.",
    features: [
      {
        title: "Custom App Development",
        description: "Tailored mobile apps to meet specific business needs."
      },
      {
        title: "Cross-Platform Compatibility",
        description: "Seamless functionality across both iOS and Android platforms."
      },
      {
        title: "Integration with APIs",
        description: "Integrate with existing systems and third-party APIs for a connected experience."
      },
      {
        title: "App Store Optimization",
        description: "Optimized for visibility and performance in app stores."
      }
    ],
    technologies: [
      { name: "Swift", icon: "/tech/swift.png" },
      { name: "Kotlin", icon: "/tech/kotlin.png" },
      { name: "React Native", icon: "/tech/react-native.png" },
      { name: "Flutter", icon: "/tech/flutter.png" },
      { name: "Firebase", icon: "/tech/firebase.png" },
      { name: "AWS Mobile Hub", icon: "/tech/aws.png" }
    ],
    benefits: [
      {
        title: "User-Centric Design",
        description: "Apps designed for superior user experience",
        icon: <Layout className="w-6 h-6" />
      },
      {
        title: "High Performance",
        description: "Fast, responsive, and optimized applications",
        icon: <Smartphone className="w-6 h-6" />
      },
      {
        title: "Secure Solutions",
        description: "Robust security features for data protection",
        icon: <ShieldCheck className="w-6 h-6" />
      }
    ],
    process: [
      {
        title: "Requirement Analysis",
        description: "Understanding client goals and technical requirements"
      },
      {
        title: "UI/UX Design",
        description: "Crafting intuitive and visually appealing interfaces"
      },
      {
        title: "Development",
        description: "Coding and building features with best practices"
      },
      {
        title: "Testing",
        description: "Ensuring app performance and reliability across devices"
      },
      {
        title: "Deployment",
        description: "Publishing the app to App Stores and providing support"
      }
    ]
  };

  return <ServiceDetailPage {...pageData} />;
};

export default MobileAppDevelopmentPage;
=======
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Testimonials from '../../components/Testimonials/Testimonials';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import SplashCursor from '../../components/Cursor/SplashCursor';
import Blog from '../../components/Blog/Blog'

export default function Home() {

    return (
        <div>

            <main>
                <Navbar />
                <SplashCursor />

                <Testimonials />
                <Blog />
                <QuoteForm />
                <ContactForm />
            </main>

            <Footer />
        </div>
    );
}
>>>>>>> 1b04f56d25a0187f0ea002f618081342944803d5
