export type Feature = {
  id: string;
  title: string;
  description: string;
  detail: string;
};

export const features: Feature[] = [
  {
    id: "ask",
    title: "Ask until it clicks",
    description: "Get a clear explanation, a useful example, and the freedom to ask again.",
    detail: "From confusion to clarity",
  },
  {
    id: "summaries",
    title: "Make notes make sense",
    description: "Turn a wall of reading into the key ideas you actually need to remember.",
    detail: "The essentials, at a glance",
  },
  {
    id: "quizzes",
    title: "Practice, don't just reread",
    description: "Create quick quizzes that help you check what has really stuck.",
    detail: "Active recall, made easy",
  },
  {
    id: "plans",
    title: "Have a plan for the week",
    description: "Break big goals into study sessions that fit around real life.",
    detail: "A path you can follow",
  },
  {
    id: "materials",
    title: "Bring your own material",
    description: "Keep your notes and questions in the same flow, with context that matters.",
    detail: "Your course, your context",
  },
  {
    id: "progress",
    title: "See how far you've come",
    description: "Spot your momentum across topics, practice, and study time.",
    detail: "Every small win counts",
  },
];

export type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    description: "A good place to start building momentum.",
    features: ["Limited AI questions", "Basic summaries", "5 quizzes each month", "Basic study planner"],
    cta: "Start free",
  },
  {
    name: "Student",
    price: "$8",
    description: "The everyday toolkit for a fuller study week.",
    features: ["More AI questions", "Unlimited summaries", "Unlimited quizzes", "Personalized study plans", "Progress tracking"],
    cta: "Start Student plan",
    featured: true,
  },
  {
    name: "Pro",
    price: "$15",
    description: "Extra depth for your biggest learning goals.",
    features: ["Everything in Student", "Advanced document analysis", "Priority AI responses", "Advanced learning insights", "Extra productivity tools"],
    cta: "Go Pro",
  },
];

export type Testimonial = {
  name: string;
  initials: string;
  field: string;
  quote: string;
  color: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Maya Chen",
    initials: "MC",
    field: "Computer science student",
    quote: "I like that I can ask the 'obvious' question, then get an example that actually makes sense.",
    color: "lavender",
  },
  {
    name: "Jordan Ellis",
    initials: "JE",
    field: "Biology student",
    quote: "Turning a long chapter into a five-minute quiz helps me see what I know before class.",
    color: "mint",
  },
  {
    name: "Amara Okafor",
    initials: "AO",
    field: "Psychology student",
    quote: "The weekly plan makes a big deadline feel like a few doable afternoons.",
    color: "peach",
  },
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "What is StudyFlow AI?",
    answer: "StudyFlow AI is a concept for a study workspace that combines clear explanations, note summaries, practice quizzes, and a personal study plan. This website is an interactive frontend demo.",
  },
  {
    question: "Is StudyFlow free?",
    answer: "The concept includes a free plan. The prices and plans shown here are illustrative; this demo does not create accounts or process payments.",
  },
  {
    question: "Can StudyFlow summarize my notes?",
    answer: "Summarizing notes is part of the proposed product. In this frontend demo, sample responses show how that experience could feel, but no document is processed.",
  },
  {
    question: "Can I generate quizzes from study material?",
    answer: "That's one of StudyFlow's core ideas. Try the quiz prompt in the interactive preview to see a locally scripted example.",
  },
  {
    question: "Does StudyFlow replace teachers?",
    answer: "No. It is designed as a study companion: a way to clarify, practice, and organize your learning alongside teachers, courses, and trusted materials.",
  },
  {
    question: "Is my study material stored?",
    answer: "This demo does not upload, save, or send your questions or files to a server. Its responses are generated from local sample content in your browser.",
  },
];

export const demoPrompts = [
  "Explain React useEffect simply",
  "Summarize my notes",
  "Generate a quick quiz",
  "Create a study plan",
];
