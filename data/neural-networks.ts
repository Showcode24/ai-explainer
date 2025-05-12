export const pageInfo = {
  title: "Neural Networks",
  description: "Explore how neural networks process information through interconnected nodes",
  prev: { href: "/decision-trees", label: "Decision Trees" },
  next: { href: "/knn", label: "K-Nearest Neighbors" },
}

export const learnContent = {
  introduction: {
    title: "What is a Neural Network?",
    paragraphs: [
      "A neural network is a series of algorithms that attempts to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates.",
      'Neural networks consist of layers of interconnected nodes or "neurons," each layer processing inputs from the previous layer and passing outputs to the next layer.',
    ],
    components: {
      title: "Key Components:",
      items: [
        {
          term: "Input Layer",
          description: "Receives the initial data",
        },
        {
          term: "Hidden Layers",
          description: "Process the inputs using weights and activation functions",
        },
        {
          term: "Output Layer",
          description: "Produces the final prediction or classification",
        },
        {
          term: "Weights",
          description: "Parameters that are adjusted during training",
        },
        {
          term: "Activation Functions",
          description: "Determine the output of a neuron given an input",
        },
      ],
    },
  },
  applications: {
    title: "Real-World Applications",
    examples: [
      {
        title: "Image Recognition",
        description: "Neural networks can identify objects, people, and text in images with high accuracy.",
      },
      {
        title: "Natural Language Processing",
        description: "Neural networks power translation services, chatbots, and text generation tools.",
      },
      {
        title: "Recommendation Systems",
        description: "Streaming services and online stores use neural networks to suggest content and products.",
      },
    ],
  },
}

export const exploreContent = {
  title: "Parameters",
  description: "Adjust these parameters to see how they affect the neural network.",
  parameters: {
    learningRate: {
      label: "Learning Rate",
      description: "Controls how quickly the model adapts to new information. Higher values may cause instability.",
      min: 0.001,
      max: 1,
      step: 0.001,
      default: 0.1,
    },
    hiddenLayers: {
      label: "Hidden Layers",
      description: "Number of hidden layers in the network. More layers can capture more complex patterns.",
      min: 1,
      max: 5,
      step: 1,
      default: 1,
    },
    neuronsPerLayer: {
      label: "Neurons Per Layer",
      description: "Number of neurons in each hidden layer. More neurons can learn more complex features.",
      min: 1,
      max: 10,
      step: 1,
      default: 4,
    },
    dataset: {
      label: "Dataset",
      options: [
        { value: "mnist", label: "MNIST" },
        { value: "fashion", label: "Fashion" },
        { value: "cifar", label: "CIFAR" },
      ],
      default: "mnist",
    },
  },
}

export const challengeContent = {
  title: "Test Your Knowledge",
  description:
    "Try to build a neural network that correctly classifies handwritten digits. Adjust the parameters to achieve the highest accuracy.",
  results: {
    accuracy: "92%",
    loss: "0.24",
    trainingTime: "3.5s",
  },
}

// Helper function to get dataset-specific information
export const getDatasetInfo = (dataset: string) => {
  return {
    inputLayerSize: dataset === "mnist" ? 28 : dataset === "fashion" ? 28 : 32,
    outputLayerSize: dataset === "mnist" ? 10 : dataset === "fashion" ? 10 : 10,
    name: dataset.toUpperCase(),
  }
}
