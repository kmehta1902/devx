'use client';
<<<<<<< HEAD
import ServiceDetailPage from '../page';
import { PenTool, Palette, Monitor, Layout, Eye } from 'lucide-react';

const UiUxDesignPage = () => {
  const pageData = {
    title: "UI/UX Design",
    description: "Craft visually appealing and user-friendly designs that offer seamless experiences across all platforms.",
    features: [
      {
        title: "User Research",
        description: "In-depth analysis of user needs and behavior."
      },
      {
        title: "Wireframing & Prototyping",
        description: "Visual blueprints and interactive prototypes for a clear vision."
      },
      {
        title: "Responsive Design",
        description: "Ensuring your application looks perfect on all devices."
      },
      {
        title: "Design Systems",
        description: "Reusable components for consistent user experience."
      }
    ],
    technologies: [
      { name: "Figma", icon: "/tech/figma.png" },
      { name: "Adobe XD", icon: "/tech/adobe-xd.png" },
      { name: "Sketch", icon: "/tech/sketch.png" },
      { name: "InVision", icon: "/tech/invision.png" },
      { name: "Zeplin", icon: "/tech/zeplin.png" },
      { name: "Canva", icon: "/tech/canva.png" }
    ],
    benefits: [
      {
        title: "Enhanced Usability",
        description: "Boost user satisfaction with intuitive interfaces",
        icon: <Eye className="w-6 h-6" />
      },
      {
        title: "Brand Identity",
        description: "Visually consistent designs aligned with your brand",
        icon: <Palette className="w-6 h-6" />
      },
      {
        title: "Improved Engagement",
        description: "Increase user interaction with captivating design",
        icon: <Layout className="w-6 h-6" />
      }
    ],
    process: [
      {
        title: "Research & Discovery",
        description: "Understanding user needs and business goals"
      },
      {
        title: "Wireframing",
        description: "Creating structure and layout of the interface"
      },
      {
        title: "Visual Design",
        description: "Developing the look and feel of the product"
      },
      {
        title: "Prototyping",
        description: "Building interactive mockups for testing"
      },
      {
        title: "Handover & Testing",
        description: "Delivering assets and ensuring flawless implementation"
      }
    ]
  };

  return <ServiceDetailPage {...pageData} />;
};

export default UiUxDesignPage;
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
