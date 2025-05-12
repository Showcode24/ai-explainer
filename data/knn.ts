export const pageInfo = {
  title: "K-Nearest Neighbors (KNN)",
  description: "Discover how KNN classifies data based on similarity to its neighbors",
  prev: { href: "/neural-networks", label: "Neural Networks" },
}

export const learnContent = {
  introduction: {
    title: "What is K-Nearest Neighbors?",
    paragraphs: [
      "K-Nearest Neighbors (KNN) is a simple, instance-based learning algorithm that classifies new data points based on the majority class of their k nearest neighbors.",
      "KNN is a non-parametric method, meaning it doesn't make any assumptions about the underlying data distribution. It's often used for classification and regression tasks.",
    ],
    howItWorks: {
      title: "How KNN Works:",
      steps: [
        "Choose a value for K (the number of neighbors)",
        "Calculate the distance between the new point and all training points",
        "Find the K nearest neighbors based on the calculated distances",
        "Assign the majority class of the K neighbors to the new point",
      ],
    },
  },
  applications: {
    title: "Real-World Applications",
    examples: [
      {
        title: "Recommendation Systems",
        description: "KNN is used to recommend products or content based on similar users' preferences.",
      },
      {
        title: "Image Recognition",
        description: "KNN can classify images by comparing them to similar labeled images.",
      },
      {
        title: "Medical Diagnosis",
        description: "KNN helps diagnose diseases by comparing patient data to similar cases.",
      },
    ],
  },
}

export const exploreContent = {
  title: "Parameters",
  description: "Adjust these parameters to see how they affect the KNN algorithm.",
  parameters: {
    k: {
      label: "K Value",
      description:
        "Number of neighbors to consider. Higher values smooth decision boundaries but may lose local patterns.",
      min: 1,
      max: 15,
      step: 2,
      default: 3,
    },
    dataPoints: {
      label: "Data Points",
      description: "Number of data points in the visualization. More points show more detailed decision boundaries.",
      min: 10,
      max: 100,
      step: 10,
      default: 50,
    },
    distance: {
      label: "Distance Metric",
      description:
        "Method used to calculate distance between points. Different metrics can lead to different classifications.",
      options: [
        { value: "euclidean", label: "Euclidean" },
        { value: "manhattan", label: "Manhattan" },
      ],
      default: "euclidean",
    },
  },
}

export const challengeContent = {
  title: "Test Your Knowledge",
  description:
    "Try to classify the new data point (shown in black) by adjusting the K value and distance metric. Can you predict which class it belongs to?",
  results: {
    predictedClass: "Class A",
    confidence: "80%",
  },
}
