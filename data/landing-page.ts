import { GitBranch, Brain, Users } from "lucide-react"

export const heroSection = {
  title: "Understand AI Concepts Through Interactive Visualizations",
  description:
    "Explore decision trees, neural networks, and K-nearest neighbors in a fun, interactive way designed for beginners.",
  buttonText: "Start Exploring",
  buttonLink: "#explore",
}

export const exploreSection = {
  title: "Explore AI Concepts",
  description: "Dive into these fundamental AI algorithms through interactive visualizations.",
}

export const conceptCards = [
  {
    title: "Decision Trees",
    description: "Understand how computers make decisions by splitting data into branches.",
    content: "Learn how decision trees classify data by asking a series of questions, similar to a flowchart.",
    icon: GitBranch,
    link: "/decision-trees",
  },
  {
    title: "Neural Networks",
    description: "See how artificial neural networks mimic the human brain to recognize patterns.",
    content: "Visualize how neural networks process information through layers of interconnected nodes.",
    icon: Brain,
    link: "/neural-networks",
  },
  {
    title: "K-Nearest Neighbors",
    description: "Discover how KNN classifies data based on similarity to its neighbors.",
    content: "Interact with data points and see how KNN makes predictions based on proximity.",
    icon: Users,
    link: "/knn",
  },
]

export const whyLearnSection = {
  title: "Why Learn AI Concepts?",
  description: "AI is transforming industries and our daily lives. Understanding the fundamentals helps you:",
  points: [
    "Make informed decisions about AI technologies",
    "Understand the capabilities and limitations of AI",
    "Prepare for a future where AI is increasingly prevalent",
  ],
}

export const approachSection = {
  title: "Our Approach",
  description: "We believe in learning by doing. Our interactive visualizations let you:",
  points: [
    "Manipulate parameters and see immediate results",
    "Understand complex concepts through visual learning",
    "Learn at your own pace with intuitive explanations",
  ],
}

export const ctaSection = {
  title: "Ready to Start Learning?",
  description: "Choose an AI concept below and begin your interactive learning journey.",
}

export const navItems = [
  { name: "Home", path: "/" },
  { name: "Decision Trees", path: "/decision-trees" },
  { name: "Neural Networks", path: "/neural-networks" },
  { name: "K-Nearest Neighbors", path: "/knn" },
]
