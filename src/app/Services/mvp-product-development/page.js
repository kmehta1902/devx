'use client';
import ServiceDetailPage from '../page';
import { Rocket, Gauge, Layers, Monitor, Code } from 'lucide-react';

const MvpDevelopmentPage = () => {
  const pageData = {
    title: "MVP Product Development",
    description: "Turn your ideas into reality with Minimum Viable Product solutions designed to validate concepts and attract early adopters.",
    features: [
      {
        title: "Rapid Prototyping",
        description: "Quickly transform ideas into functional prototypes."
      },
      {
        title: "Iterative Development",
        description: "Agile approach to deliver core features quickly."
      },
      {
        title: "Cost-Effective Solutions",
        description: "Focus on essentials to save resources."
      },
      {
        title: "Feedback-Driven Improvements",
        description: "Incorporate user feedback for iterations."
      }
    ],
    technologies: [
      { name: "Node.js", icon: "/tech/nodejs.png" },
      { name: "React", icon: "/tech/react.png" },
      { name: "Python", icon: "/tech/python.png" },
      { name: "MongoDB", icon: "/tech/mongodb.png" },
      { name: "Docker", icon: "/tech/docker.png" },
      { name: "AWS", icon: "/tech/aws.png" }
    ],
    benefits: [
      {
        title: "Speed to Market",
        description: "Launch your product quickly",
        icon: <Gauge className="w-6 h-6" />
      },
      {
        title: "Cost Savings",
        description: "Avoid unnecessary development costs",
        icon: <Layers className="w-6 h-6" />
      },
      {
        title: "Validated Ideas",
        description: "Test concepts before full-scale investment",
        icon: <Rocket className="w-6 h-6" />
      }
    ],
    process: [
      {
        title: "Idea Validation",
        description: "Analyze the feasibility and potential of the concept"
      },
      {
        title: "Feature Prioritization",
        description: "Identify and develop core features"
      },
      {
        title: "Development",
        description: "Build an MVP with minimal features"
      },
      {
        title: "Testing",
        description: "Gather feedback and refine product"
      },
      {
        title: "Iteration",
        description: "Expand features based on user feedback"
      }
    ]
  };

  return <ServiceDetailPage {...pageData} />;
};

export default MvpDevelopmentPage;
