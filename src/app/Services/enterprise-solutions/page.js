'use client'
import ServiceDetailPage from '../page';
import { Database, Lock, RefreshCcw, GitBranch, BarChart, Network } from 'lucide-react';

const EnterpriseSolutionsPage = () => {
  const pageData = {
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise-grade solutions designed to optimize your large-scale operations and drive digital transformation.",
    features: [
      {
        title: "Enterprise Resource Planning",
        description: "Unified systems for managing business processes across your organization."
      },
      {
        title: "Business Process Automation",
        description: "Streamline workflows and reduce manual intervention with intelligent automation."
      },
      {
        title: "Data Analytics & BI",
        description: "Advanced analytics tools for data-driven decision making."
      },
      {
        title: "Enterprise Integration",
        description: "Seamless integration between different business systems and applications."
      }
    ],
    technologies: [
      { name: "SAP", icon: "/tech/sap.png" },
      { name: "Oracle", icon: "/tech/oracle.png" },
      { name: "Microsoft Azure", icon: "/tech/azure.png" },
      { name: "Salesforce", icon: "/tech/salesforce.png" },
      { name: "Kubernetes", icon: "/tech/kubernetes.png" },
      { name: "Tableau", icon: "/tech/tableau.png" }
    ],
    benefits: [
      {
        title: "Operational Excellence",
        description: "Optimize business processes and improve efficiency",
        icon: <BarChart className="w-6 h-6" />
      },
      {
        title: "Scalable Infrastructure",
        description: "Flexible solutions that grow with your business",
        icon: <GitBranch className="w-6 h-6" />
      },
      {
        title: "Enhanced Security",
        description: "Enterprise-grade security and compliance",
        icon: <Lock className="w-6 h-6" />
      }
    ],
    process: [
      {
        title: "Assessment",
        description: "Evaluating current systems and identifying opportunities"
      },
      {
        title: "Strategy",
        description: "Developing a comprehensive digital transformation roadmap"
      },
      {
        title: "Implementation",
        description: "Phased rollout of enterprise solutions"
      },
      {
        title: "Integration",
        description: "Connecting systems and ensuring data flow"
      },
      {
        title: "Support",
        description: "Ongoing maintenance and optimization"
      }
    ]
  };

  return <ServiceDetailPage {...pageData} />;
};

export default EnterpriseSolutionsPage;