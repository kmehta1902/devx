'use client';
import ServiceDetailPage from '../page';
import { Users, ShieldCheck, ClipboardList, Briefcase, Clock } from 'lucide-react';

const TechResourcesPage = () => {
  const pageData = {
    title: "Tech Resources",
    description: "On-demand access to highly skilled tech talent for your short-term or long-term projects.",
    features: [
      {
        title: "Dedicated Developers",
        description: "Hire professionals with expertise in specific technologies."
      },
      {
        title: "Flexible Engagement Models",
        description: "Part-time, full-time, or project-based hiring."
      },
      {
        title: "Scalable Teams",
        description: "Quickly scale your team as project demands grow."
      },
      {
        title: "Tech Stack Expertise",
        description: "Access specialists for a wide range of modern technologies."
      }
    ],
    technologies: [
      { name: "JavaScript", icon: "/tech/javascript.png" },
      { name: "Ruby on Rails", icon: "/tech/ruby.png" },
      { name: "Python", icon: "/tech/python.png" },
      { name: "Java", icon: "/tech/java.png" },
      { name: "AWS", icon: "/tech/aws.png" },
      { name: "Azure", icon: "/tech/azure.png" }
    ],
    benefits: [
      {
        title: "Access to Experts",
        description: "Hire top-tier developers with verified skills",
        icon: <Users className="w-6 h-6" />
      },
      {
        title: "Cost-Effective",
        description: "Save time and hiring overhead",
        icon: <ClipboardList className="w-6 h-6" />
      },
      {
        title: "On-Demand Talent",
        description: "Flexibility to hire when needed",
        icon: <Clock className="w-6 h-6" />
      }
    ],
    process: [
      {
        title: "Requirement Gathering",
        description: "Understand your project and resource needs"
      },
      {
        title: "Talent Sourcing",
        description: "Provide you with the best candidates"
      },
      {
        title: "Engagement",
        description: "Onboard resources into your workflow"
      },
    //   {
    //     title: "Support",
    //     description: "Ongoing performance tracking and support"
    //   }
    ]
  };

  return <ServiceDetailPage {...pageData} />;
};

export default TechResourcesPage;
