export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Fluid Dynamics Mastery",
    description: "Advanced proficiency in simulations and CAD modeling.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/fluid_dynamics.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Machine Learning Projects",
    description: "Supervised Machine Learning and Data Science applications.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/machine_learning.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Cloud Computing Expertise",
    description: "Proficient with AWS and cloud-based technologies.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/cloud_computing.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Project Management & Optimization",
    description: "Led cost-saving initiatives and system optimizations.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/project_management.svg",
    spareImg: "",
  },
  {
    id: 5,
    title: "Tele-Sales with Python",
    description: "Streamlined tele-sales strategy using Google Maps API.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/python_sales.svg",
    spareImg: "",
  },
  {
    id: 6,
    title: "Proactive Maintenance in Nuclear Technology",
    description: "Implemented systems with ISO9001 and GMP standards.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "/nuclear_maintenance.svg",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CFD and FEA Consultant",
    des: "Provided consultation for complex fluid dynamics and structural simulations using Ansys and Moldex3D.",
    img: "/cfd_fea_consultant.svg",
    iconLists: ["/ansys.svg", "/comsol.svg", "/moldex.svg"],
    link: "/ui.cfdfeaconsultant.com",
  },
  {
    id: 2,
    title: "Generative AI Training for Thai Writers",
    des: "Developed Generative AI models to help Thai writers enhance their content creation process using NLP techniques.",
    img: "/gen_ai_thai_writers.svg",
    iconLists: ["/python.svg", "/transformers.svg", "/nlp.svg"],
    link: "/ui.genai-thaiwriters.com",
  },
  {
    id: 3,
    title: "Generative AI Voice Factuality and Quality for Thai Language",
    des: "Created AI models to improve voice generation accuracy and quality specifically for Thai language.",
    img: "/gen_ai_thai_voice.svg",
    iconLists: ["/python.svg", "/tts.svg", "/thai_language.svg"],
    link: "/ui.genai-thaivoice.com",
  },
  {
    id: 4,
    title:
      "Data Visualization Recommendation System API from Multimodal Vision-Based RAG",
    des: "Built a recommendation system API using multimodal vision-based Retrieval-Augmented Generation (RAG) models.",
    img: "/data_viz_rag.svg",
    iconLists: ["/python.svg", "/rag.svg", "/vision.svg"],
    link: "/ui.rag-dataviz.com",
  },
  {
    id: 5,
    title: "COMSOL Multiphysics Simulation Workflow via API Integration",
    des: "Automated the COMSOL Multiphysics simulation process through API integration for seamless workflows.",
    img: "/comsol_simulation_api.svg",
    iconLists: ["/comsol.svg", "/api.svg"],
    link: "/ui.comsol-api.com",
  },
  {
    id: 6,
    title: "Coming Soon: PINNs-Based Engineering Simulation",
    des: "An upcoming project focused on Physics-Informed Neural Networks (PINNs) for enhanced engineering simulations.",
    img: "/pinns_engineering.svg",
    iconLists: ["/pinns.svg", "/tensorflow.svg", "/engineering.svg"],
    link: "/ui.pinns-engineering.com",
  },
];

export const certifications = [
  { name: "Mastering Computer Vision in Python with OpenCV", link: "/opencv" },
  { name: "Exploratory Data Analysis for Machine Learning", link: "/eda" },
  { name: "Supervised Machine Learning: Regression", link: "/ml_regression" },
  { name: "Data Science Essential #7", link: "/ds_essentials" },
];

export const testimonials = [
  {
    quote:
      "Khiw's deep knowledge in fluid dynamics and simulations exceeded our expectations.",
    name: "AlphaStream Technologies",
    title: "Director",
  },
  {
    quote:
      "His work with Python and Google Maps API was innovative and impactful for our sales strategy.",
    name: "CP Group",
    title: "Future Leader Program",
  },
  {
    quote:
      "Outstanding problem-solving skills in CAD modeling and mechanical design.",
    name: "Arçelik Hitachi Home Appliance (Thailand) Co., Ltd.",
    title: "Mechanical Engineer",
  },
];

export const companies = [
  {
    id: 1,
    name: "CP Group",
    img: "/cp_group.svg",
    nameImg: "/cp_group_name.svg",
  },
  {
    id: 2,
    name: "Thailand Nuclear Technology",
    img: "/nuclear_tech.svg",
    nameImg: "/nuclear_tech_name.svg",
  },
  {
    id: 3,
    name: "Arçelik Hitachi",
    img: "/arcelik_hitachi.svg",
    nameImg: "/arcelik_hitachi_name.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "CFD/FEA Specialist",
    desc: "Specialized in simulations with Ansys and Moldex3D, delivering fluid dynamics solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Operational Nuclear Engineer",
    desc: "Managed maintenance systems and compliance for radiopharmaceutical production.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Future Leader Program - CP Group",
    desc: "Optimized production and implemented Python-based tele-sales strategies.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mechanical Design Engineer",
    desc: "Led cost-reduction projects and applied advanced mechanical design techniques.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/getintheq",
  },
  { id: 2, img: "/github.svg", link: "https://github.com/getintheq" },
];
