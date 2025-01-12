'use client'
import ServiceDetailPage from '../page';
import {Lightbulb,Shield, Target } from 'lucide-react';

const ITConsultancyPage = () => {
  const pageData = {
    title: "IT Consultancy",
    description: "Strategic technology consulting to guide your digital transformation journey and optimize your IT investments.",
    features: [
      {
        title: "Digital Strategy",
        description: "Comprehensive digital transformation roadmap aligned with business goals."
      },
      {
        title: "Technology Assessment",
        description: "In-depth evaluation of current IT infrastructure and recommendations."
      },
      {
        title: "Process Optimization",
        description: "Streamline operations through technological innovation."
      },
      {
        title: "Security Consulting",
        description: "Expert guidance on cybersecurity and risk management."
      }
    ],
    technologies: [
      { name: "ITIL", icon: "/tech/itil.png" },
      { name: "Agile", icon: "/tech/agile.png" },
      { name: "DevOps", icon: "/tech/devops.png" },
      { name: "Six Sigma", icon: "/tech/sixsigma.png" },
      { name: "Power BI", icon: "/tech/powerbi.png" },
      { name: "Jira", icon: "/tech/jira.png" }
    ],
    benefits: [
      {
        title: "Strategic Alignment",
        description: "Align IT initiatives with business objectives",
        icon: <Target className="w-6 h-6" />
      },
      {
        title: "Risk Mitigation",
        description: "Identify and address potential IT risks",
        icon: <Shield className="w-6 h-6" />
      },
      {
        title: "Innovation Leadership",
        description: "Stay ahead with cutting-edge technology solutions",
        icon: <Lightbulb className="w-6 h-6" />
      }
    ],
    process: [
      {
        title: "Discovery",
        description: "Understanding your business challenges and objectives"
      },
      {
        title: "Analysis",
        description: "Detailed assessment of current technology landscape"
      },
      {
        title: "Strategy",
        description: "Developing comprehensive technology roadmap"
      },
      {
        title: "Recommendations",
        description: "Providing actionable solutions and best practices"
      },
      {
        title: "Implementation",
        description: "Supporting execution and change management"
      }
    ]
  };

  return <ServiceDetailPage {...pageData} />;
};

export default ITConsultancyPage;