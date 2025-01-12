'use client';
import ServiceDetailPage from '../page';
import { Code, Cloud, ShieldCheck, Server, Layout } from 'lucide-react';

const WebAppDevelopmentPage = () => {
  const pageData = {
    title: "Web Application Development",
    description: "Build scalable, secure, and high-performance web applications tailored to meet your business requirements.",
    features: [
      {
        title: "Custom Web Solutions",
        description: "Tailored applications designed to solve your unique challenges."
      },
      {
        title: "API Integration",
        description: "Seamless integration with third-party services and APIs."
      },
      {
        title: "Scalable Architecture",
        description: "Applications built to handle growing user demands."
      },
      {
        title: "Secure Applications",
        description: "Focus on data security and compliance with industry standards."
      }
    ],
    technologies: [
      { name: "React", icon: "/tech/react.png" },
      { name: "Angular", icon: "/tech/angular.png" },
      { name: "Vue.js", icon: "/tech/vue.png" },
      { name: "Node.js", icon: "/tech/nodejs.png" },
      { name: "Django", icon: "/tech/django.png" },
      { name: "Laravel", icon: "/tech/laravel.png" }
    ],
    benefits: [
      {
        title: "Responsive Design",
        description: "Web apps that work seamlessly across devices",
        icon: <Layout className="w-6 h-6" />
      },
      {
        title: "High Performance",
        description: "Fast-loading applications with optimized performance",
        icon: <Server className="w-6 h-6" />
      },
      {
        title: "Enhanced Security",
        description: "Robust security measures to protect your data",
        icon: <ShieldCheck className="w-6 h-6" />
      }
    ],
    process: [
      {
        title: "Requirement Gathering",
        description: "Understanding client needs and project scope"
      },
      {
        title: "Architecture Planning",
        description: "Designing scalable and efficient systems"
      },
      {
        title: "Development",
        description: "Building features with modern technologies"
      },
      {
        title: "Testing",
        description: "Ensuring flawless functionality across platforms"
      },
      {
        title: "Deployment",
        description: "Launching the web app and providing ongoing support"
      }
    ]
  };

  return <ServiceDetailPage {...pageData} />;
};

export default WebAppDevelopmentPage;
