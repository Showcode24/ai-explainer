export const pageInfo = {
  title: "Decision Trees",
  description: "Learn how decision trees classify data by asking a series of questions",
  next: { href: "/neural-networks", label: "Neural Networks" },
}

export const learnContent = {
  introduction: {
    title: "What is a Decision Tree?",
    paragraphs: [
      'A decision tree is a flowchart-like structure where each internal node represents a "test" on an attribute, each branch represents the outcome of the test, and each leaf node represents a class label or decision.',
      "Decision trees are simple to understand and interpret. They can handle both numerical and categorical data, and they require little data preparation.",
    ],
    howItWorks: {
      title: "How Decision Trees Work:",
      steps: [
        "Start at the root node",
        "Split the data based on the feature that provides the most information gain",
        "Repeat the process for each child node until a stopping condition is met",
        "Assign class labels to the leaf nodes",
      ],
    },
  },
  applications: {
    title: "Real-World Applications",
    examples: [
      {
        title: "Medical Diagnosis",
        description: "Doctors use decision trees to diagnose diseases based on symptoms and test results.",
      },
      {
        title: "Credit Approval",
        description: "Banks use decision trees to determine if a loan applicant is likely to default.",
      },
      {
        title: "Customer Segmentation",
        description: "Businesses use decision trees to categorize customers based on purchasing behavior.",
      },
    ],
  },
}

export const exploreContent = {
  title: "Parameters",
  description: "Adjust these parameters to see how they affect the decision tree.",
  parameters: {
    maxDepth: {
      label: "Max Depth",
      description: "Controls how deep the tree can grow. Higher values may lead to overfitting.",
      min: 1,
      max: 10,
      step: 1,
      default: 3,
    },
    minSamplesSplit: {
      label: "Min Samples Split",
      description: "Minimum number of samples required to split a node. Higher values prevent overfitting.",
      min: 2,
      max: 20,
      step: 1,
      default: 2,
    },
    dataset: {
      label: "Dataset",
      options: [
        { value: "iris", label: "Iris" },
        { value: "wine", label: "Wine" },
        { value: "breast_cancer", label: "Cancer" },
      ],
      default: "iris",
    },
  },
}

export const challengeContent = {
  title: "Test Your Knowledge",
  description:
    "Try to build a decision tree that correctly classifies the following dataset. Adjust the parameters to achieve the highest accuracy.",
  results: {
    accuracy: "85%",
    precision: "82%",
    recall: "88%",
  },
}

// Mock tree data for visualization
export const getTreeData = (dataset: string) => {
  return {
    name: `${dataset === "iris" ? "petal_length" : dataset === "wine" ? "alcohol" : "mean_radius"} <= ${dataset === "iris" ? "2.45" : dataset === "wine" ? "12.8" : "13.5"}`,
    children: [
      {
        name: "Class: 0",
        value: 50,
      },
      {
        name: `${dataset === "iris" ? "petal_width" : dataset === "wine" ? "flavanoids" : "texture_mean"} <= ${dataset === "iris" ? "1.75" : dataset === "wine" ? "2.3" : "18.2"}`,
        children: [
          {
            name: "Class: 1",
            value: 45,
          },
          {
            name: `${dataset === "iris" ? "petal_length" : dataset === "wine" ? "color_intensity" : "perimeter_mean"} <= ${dataset === "iris" ? "4.95" : dataset === "wine" ? "3.8" : "87.5"}`,
            children: [
              {
                name: "Class: 1",
                value: 30,
              },
              {
                name: "Class: 2",
                value: 25,
              },
            ],
          },
        ],
      },
    ],
  }
}
