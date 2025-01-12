'use client'
import { Cloud, Shield, Zap, Scale, Server, Database } from 'lucide-react';
import ServiceDetailPage from '../page';

const CloudSolutionsPage = () => {
  const pageData = {
    title: "Cloud Solutions",
    description: "Harness the power of cloud computing with our comprehensive suite of cloud services and solutions.",
    features: [
      {
        title: "Cloud Migration",
        description: "Seamless transition of your applications and data to the cloud."
      },
      {
        title: "Cloud Infrastructure",
        description: "Scalable and reliable cloud infrastructure setup and management."
      },
      {
        title: "Cloud Security",
        description: "Advanced security measures to protect your cloud resources."
      },
      {
        title: "DevOps Implementation",
        description: "Streamlined development and deployment processes."
      }
    ],
    technologies: [
      { name: "AWS", icon: "/tech/aws.png" },
      { name: "Google Cloud", icon: "/tech/gcp.png" },
      { name: "Microsoft Azure", icon: "/tech/azure.png" },
      { name: "Docker", icon: "/tech/docker.png" },
      { name: "Kubernetes", icon: "/tech/kubernetes.png" },
      { name: "Terraform", icon: "/tech/terraform.png" }
    ],
    benefits: [
      {
        title: "Cost Optimization",
        description: "Reduce infrastructure costs with cloud efficiency",
        icon: <Scale className="w-6 h-6" />
      },
      {
        title: "High Availability",
        description: "Ensure business continuity with reliable cloud services",
        icon: <Server className="w-6 h-6" />
      },
      {
        title: "Scalability",
        description: "Easily scale resources based on demand",
        icon: <Database className="w-6 h-6" />
      }
    ],
    process: [
      {
        title: "Assessment",
        description: "Evaluating current infrastructure and requirements"
      },
      {
        title: "Planning",
        description: "Developing cloud migration and implementation strategy"
      },
      {
        title: "Migration",
        description: "Systematic migration of applications and data"
      },
      {
        title: "Optimization",
        description: "Fine-tuning cloud resources for optimal performance"
      },
      {
        title: "Management",
        description: "Ongoing monitoring and maintenance"
      }
    ]
  };

  return <ServiceDetailPage {...pageData} />;
};

export default CloudSolutionsPage;