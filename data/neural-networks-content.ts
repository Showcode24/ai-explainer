import { neuralNetworkVisualization } from "./visualization-config"

// Define dataset info interface with index signature
interface DatasetInfo {
  [key: string]: {
    inputLayerSize: number
    outputLayerSize: number
    name: string
    description: string
  }
}

// Page metadata
export const pageMetadata = {
  title: "Neural Networks",
  description: "Explore how neural networks process information through interconnected nodes",
  prev: { href: "/decision-trees", label: "Decision Trees" },
  next: { href: "/knn", label: "K-Nearest Neighbors" },
}

// Learn tab content
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
  visualizationDescription: "Interactive 3D visualization of a neural network. Drag to rotate, scroll to zoom.",
}

// Explore tab content
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
    visualizationType: {
      label: "Visualization Type",
      options: [
        { value: true, label: "3D" },
        { value: false, label: "2D" },
      ],
    },
  },
}

// Challenge tab content
export const challengeContent = {
  title: "Test Your Knowledge",
  description:
    "Try to build a neural network that correctly classifies handwritten digits. Adjust the parameters to achieve the highest accuracy.",
  buttonText: "Train Model",
  results: {
    accuracy: "92%",
    loss: "0.24",
    trainingTime: "3.5s",
  },
}

// Scroll animation sections
export const scrollSections = [
  {
    scrollPercentage: 0,
    title: "Input Layer",
    description: "Data enters the neural network through the input layer",
    highlightLayer: 0,
  },
  {
    scrollPercentage: 0.3,
    title: "Hidden Layers",
    description: "Hidden layers process the data through weighted connections",
    highlightLayer: 1,
  },
  {
    scrollPercentage: 0.7,
    title: "Output Layer",
    description: "The output layer produces the final prediction or classification",
    highlightLayer: 2,
  },
  {
    scrollPercentage: 1,
    title: "Complete Network",
    description: "All layers work together to transform input data into meaningful output",
    highlightLayer: -1, // -1 means highlight all layers
  },
]

// Dataset information
export const datasetInfo: DatasetInfo = {
  mnist: {
    inputLayerSize: 28 * 28,
    outputLayerSize: 10,
    name: "MNIST",
    description: "Handwritten digits dataset with 28x28 pixel images",
  },
  fashion: {
    inputLayerSize: 28 * 28,
    outputLayerSize: 10,
    name: "Fashion MNIST",
    description: "Fashion items dataset with 28x28 pixel images",
  },
  cifar: {
    inputLayerSize: 32 * 32 * 3,
    outputLayerSize: 10,
    name: "CIFAR-10",
    description: "General image classification dataset with 32x32 pixel color images",
  },
}

// Helper function to get dataset-specific information
export function getDatasetInfo(dataset: string) {
  return datasetInfo[dataset] || datasetInfo.mnist
}

// Default network structure for visualization
export const defaultNetworkStructure = {
  inputSize: 8,
  hiddenLayers: 2,
  neuronsPerLayer: 6,
  outputSize: 4,
}

// Visualization colors (from visualization-config.ts)
export const visualizationColors = {
  inputLayer: neuralNetworkVisualization.neuron.colors.input,
  hiddenLayer: neuralNetworkVisualization.neuron.colors.hidden,
  outputLayer: neuralNetworkVisualization.neuron.colors.output,
}
