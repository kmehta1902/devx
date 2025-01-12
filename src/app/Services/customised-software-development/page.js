'use client'
import ServiceDetailPage from '../page';
import { Code, Database, Shield, Zap, LineChart, Users } from 'lucide-react';

const CustomSoftwarePage = () => {
  const pageData = {
    title: "Custom Software Development",
    description: "Transform your business with tailored software solutions designed to meet your unique requirements and drive growth.",
    features: [
      {
        title: "Tailored Solutions",
        description: "Custom-built software that perfectly aligns with your business processes and objectives."
      },
      {
        title: "Scalable Architecture",
        description: "Future-proof solutions designed to grow with your business needs."
      },
      {
        title: "Seamless Integration",
        description: "Smooth integration with your existing systems and workflows."
      },
      {
        title: "Advanced Security",
        description: "Enterprise-grade security measures to protect your valuable data."
      }
    ],
    technologies: [
      { name: "React", icon: "/tech/react.png" },
      { name: "Node.js", icon: "/tech/node.png" },
      { name: "Python", icon: "/tech/python.png" },
      { name: "AWS", icon: "/tech/aws.png" },
      { name: "Docker", icon: "/tech/docker.png" },
      { name: "MongoDB", icon: "/tech/mongodb.png" }
    ],
    benefits: [
      {
        title: "Increased Efficiency",
        description: "Streamline operations and boost productivity",
        icon: <Zap className="w-6 h-6" />
      },
      {
        title: "Cost Optimization",
        description: "Reduce operational costs and maximize ROI",
        icon: <LineChart className="w-6 h-6" />
      },
      {
        title: "Enhanced Security",
        description: "Protect your data with advanced security measures",
        icon: <Shield className="w-6 h-6" />
      }
    ],
    process: [
      {
        title: "Discovery",
        description: "Understanding your requirements and business objectives"
      },
      {
        title: "Planning",
        description: "Detailed project planning and architecture design"
      },
      {
        title: "Development",
        description: "Agile development with regular updates and feedback"
      },
      {
        title: "Testing",
        description: "Comprehensive testing and quality assurance"
      },
      {
        title: "Deployment",
        description: "Smooth deployment and system integration"
      }
    ]
  };

  return <ServiceDetailPage {...pageData} />;};
  export default  CustomSoftwarePage;