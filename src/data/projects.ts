import alzheimerHome from "../assets/projects/Alzheimer Classification/home.png";
import alzheimerPredict from "../assets/projects/Alzheimer Classification/Predict.png";
import himtiShortener from "../assets/projects/HIMTI Internal Tools/internal-tools-shortener.png";
import himtiUsers from "../assets/projects/HIMTI Internal Tools/users.png";
import malariaHome from "../assets/projects/Malaria Detection/home.png";
import malariaPredict from "../assets/projects/Malaria Detection/predict.png";
import retentioCustomers from "../assets/projects/Retentio/customers.png";
import retentioLogin from "../assets/projects/Retentio/login.png";
import retentioOverview from "../assets/projects/Retentio/overview.png";

export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  impact: string[];
  status: string;
  images: ProjectImage[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "himti-internal-tools",
    title: "HIMTI Internal Tools",
    summary:
      "Internal web tools for HIMTI operations, including URL shortening, user management, and organization workflows.",
    description:
      "A suite of internal tools built to support HIMTI BINUS web operations and reduce repetitive administrative work. The platform focuses on maintainable organization utilities, including a URL shortener, account management, and internal service workflows used by the web division.",
    tags: ["Internal Tools", "Web Platform", "CI/CD", "Admin System"],
    impact: [
      "Built operational tools for HIMTI web division workflows.",
      "Supported URL shortening and user management use cases.",
      "Designed around maintainability for organization services.",
    ],
    status: "Organization Platform",
    images: [
      {
        src: himtiShortener,
        alt: "HIMTI Internal Tools URL shortener interface",
        label: "URL Shortener",
      },
      {
        src: himtiUsers,
        alt: "HIMTI Internal Tools user management interface",
        label: "Users",
      },
    ],
    links: [
      {
        label: "GitHub Organization",
        href: "https://github.com/HIMTI-Binus-University",
      },
    ],
  },
  {
    slug: "retentio",
    title: "Retentio",
    summary:
      "Machine learning customer retention platform using XGBoost to predict churn and surface customer risk signals.",
    description:
      "Retentio is a machine learning based customer retention project that uses XGBoost to predict customer churn. It combines model-driven risk prediction with a product dashboard, customer records, and overview screens so churn insights can be reviewed through a clean operational interface.",
    tags: ["XGBoost", "Machine Learning", "Churn Prediction", "Dashboard"],
    impact: [
      "Used XGBoost to support customer churn prediction workflows.",
      "Presented machine learning insights through dashboard and customer views.",
      "Built product screens including login, overview, and customer management.",
    ],
    status: "ML Product",
    images: [
      {
        src: retentioOverview,
        alt: "Retentio overview dashboard screen",
        label: "Overview",
      },
      {
        src: retentioCustomers,
        alt: "Retentio customers management screen",
        label: "Customers",
      },
      {
        src: retentioLogin,
        alt: "Retentio login screen",
        label: "Login",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/DffaFyyz/retentio-app",
      },
    ],
  },
  {
    slug: "alzheimer-classification",
    title: "Alzheimer Classification",
    summary:
      "Deep learning classification project using ResNet50 with a web prediction workflow for Alzheimer-related image analysis.",
    description:
      "A deep learning medical-image classification project using ResNet50 for Alzheimer classification. The project presents the prediction workflow through a web interface with a clear home screen, upload/prediction flow, and result-oriented experience.",
    tags: ["ResNet50", "Deep Learning", "Classification", "Computer Vision"],
    impact: [
      "Used ResNet50 as the deep learning backbone for classification.",
      "Presented model predictions through a simple web workflow.",
      "Connected medical-image AI experimentation with an accessible product experience.",
    ],
    status: "Deep Learning",
    images: [
      {
        src: alzheimerHome,
        alt: "Alzheimer Classification home screen",
        label: "Home",
      },
      {
        src: alzheimerPredict,
        alt: "Alzheimer Classification prediction screen",
        label: "Prediction",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/DffaFyyz/alzheimer-detection",
      },
    ],
  },
  {
    slug: "malaria-detection",
    title: "Malaria Detection",
    summary:
      "Machine learning malaria detection project with Logistic Regression and Random Forest model options.",
    description:
      "A machine learning project for malaria detection workflows with two available model options: Logistic Regression and Random Forest. The web interface provides a clear entry point and prediction screen so users can run model-based detection through a more approachable product experience.",
    tags: ["Machine Learning", "Logistic Regression", "Random Forest", "Prediction UI"],
    impact: [
      "Implemented two model options: Logistic Regression and Random Forest.",
      "Built a prediction-oriented interface for malaria detection workflows.",
      "Structured the app around a direct home-to-prediction flow.",
    ],
    status: "ML Detection",
    images: [
      {
        src: malariaHome,
        alt: "Malaria Detection home screen",
        label: "Home",
      },
      {
        src: malariaPredict,
        alt: "Malaria Detection prediction screen",
        label: "Prediction",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/DffaFyyz/malaria-detection-app",
      },
    ],
  },
];
