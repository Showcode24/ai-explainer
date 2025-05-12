import { neuralNetworkVisualization, decisionTreeVisualization, commonSceneSettings } from "./visualization-config"

// Configuration for 3D neural network visualization
export const neuralNetworkConfig = {
  // Camera settings
  camera: {
    position: commonSceneSettings.camera.defaultPosition,
    fov: commonSceneSettings.camera.fov,
    near: commonSceneSettings.camera.near,
    far: commonSceneSettings.camera.far,
  },
  // Scene settings
  scene: {
    background: commonSceneSettings.background,
    ambientLightIntensity: commonSceneSettings.ambientLight.intensity,
    directionalLightIntensity: commonSceneSettings.directionalLight.intensity,
    directionalLightPosition: commonSceneSettings.directionalLight.position,
  },
  // Animation settings
  animation: {
    rotationSpeed: neuralNetworkVisualization.animation.rotationSpeed,
    pulseSpeed: neuralNetworkVisualization.animation.pulseSpeed,
    dataFlowSpeed: neuralNetworkVisualization.animation.dataFlowSpeed,
    dataFlowProbability: neuralNetworkVisualization.animation.dataFlowProbability,
  },
  // Neuron settings
  neuron: {
    radius: neuralNetworkVisualization.neuron.radius,
    segments: neuralNetworkVisualization.neuron.segments,
    activeColor: neuralNetworkVisualization.neuron.colors.active,
    inactiveColor: neuralNetworkVisualization.neuron.colors.inactive,
    hiddenLayerColor: neuralNetworkVisualization.neuron.colors.hidden,
    inputLayerColor: neuralNetworkVisualization.neuron.colors.input,
    outputLayerColor: neuralNetworkVisualization.neuron.colors.output,
  },
  // Connection settings
  connection: {
    radius: neuralNetworkVisualization.connection.radius,
    segments: neuralNetworkVisualization.connection.segments,
    positiveColor: neuralNetworkVisualization.connection.colors.positive,
    negativeColor: neuralNetworkVisualization.connection.colors.negative,
    neutralColor: neuralNetworkVisualization.connection.colors.neutral,
  },
  // Data flow particle settings
  dataFlow: {
    radius: neuralNetworkVisualization.dataFlow.radius,
    segments: neuralNetworkVisualization.dataFlow.segments,
    color: neuralNetworkVisualization.dataFlow.color,
    speed: neuralNetworkVisualization.dataFlow.speed,
  },
  // Layer spacing
  layerSpacing: neuralNetworkVisualization.spacing.layer,
  // Neuron spacing within a layer
  neuronSpacing: neuralNetworkVisualization.spacing.neuron,
  // Maximum neurons to display per layer (for performance)
  maxNeuronsPerLayer: neuralNetworkVisualization.performance.maxNeuronsPerLayer,
}

// Configuration for 3D decision tree visualization
export const decisionTreeConfig = {
  camera: {
    position: commonSceneSettings.camera.defaultPosition,
    fov: commonSceneSettings.camera.fov,
    near: commonSceneSettings.camera.near,
    far: commonSceneSettings.camera.far,
  },
  scene: {
    background: commonSceneSettings.background,
    ambientLightIntensity: commonSceneSettings.ambientLight.intensity,
    directionalLightIntensity: commonSceneSettings.directionalLight.intensity,
    directionalLightPosition: commonSceneSettings.directionalLight.position,
  },
  animation: {
    rotationSpeed: decisionTreeVisualization.animation.rotationSpeed,
    highlightDuration: decisionTreeVisualization.animation.highlightDuration,
  },
  node: {
    radius: decisionTreeVisualization.node.radius,
    segments: decisionTreeVisualization.node.segments,
    rootColor: decisionTreeVisualization.node.colors.root,
    decisionColor: decisionTreeVisualization.node.colors.decision,
    leafColor: decisionTreeVisualization.node.colors.leaf,
    highlightColor: decisionTreeVisualization.node.colors.highlight,
  },
  connection: {
    radius: decisionTreeVisualization.connection.radius,
    segments: decisionTreeVisualization.connection.segments,
    color: decisionTreeVisualization.connection.colors.default,
    highlightColor: decisionTreeVisualization.connection.colors.highlight,
  },
  // Spacing between tree levels
  levelSpacing: decisionTreeVisualization.spacing.level,
  // Spacing between nodes at the same level
  nodeSpacing: decisionTreeVisualization.spacing.node,
}

// Helper function to check WebGL support
export function isWebGLSupported(): boolean {
  try {
    const canvas = document.createElement("canvas")
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")))
  } catch (e) {
    return false
  }
}

// Helper function to generate a neural network structure based on parameters
export function generateNeuralNetworkStructure(
  inputSize: number,
  hiddenLayers: number,
  neuronsPerHiddenLayer: number,
  outputSize: number,
) {
  const structure = []

  // Input layer
  structure.push(Math.min(inputSize, neuralNetworkConfig.maxNeuronsPerLayer))

  // Hidden layers
  for (let i = 0; i < hiddenLayers; i++) {
    structure.push(Math.min(neuronsPerHiddenLayer, neuralNetworkConfig.maxNeuronsPerLayer))
  }

  // Output layer
  structure.push(Math.min(outputSize, neuralNetworkConfig.maxNeuronsPerLayer))

  return structure
}

// Helper function to generate random weights for connections
export function generateRandomWeights(structure: number[]) {
  const weights = []

  for (let i = 0; i < structure.length - 1; i++) {
    const layerWeights = []

    for (let j = 0; j < structure[i]; j++) {
      const neuronWeights = []

      for (let k = 0; k < structure[i + 1]; k++) {
        // Random weight between -1 and 1
        neuronWeights.push(Math.random() * 2 - 1)
      }

      layerWeights.push(neuronWeights)
    }

    weights.push(layerWeights)
  }

  return weights
}

// Helper function to generate a decision tree structure
export function generateDecisionTreeStructure(depth: number, maxChildrenPerNode = 2) {
  // Create a recursive function to build the tree
  function buildTree(currentDepth: number): any {
    if (currentDepth >= depth) {
      // Leaf node
      return {
        type: "leaf",
        value: Math.random() > 0.5 ? "Class A" : "Class B",
      }
    }

    // Decision node
    const children = []
    const numChildren = Math.max(2, Math.floor(Math.random() * (maxChildrenPerNode + 1)))

    for (let i = 0; i < numChildren; i++) {
      children.push(buildTree(currentDepth + 1))
    }

    return {
      type: "decision",
      feature: `Feature ${Math.floor(Math.random() * 10)}`,
      threshold: Math.random().toFixed(2),
      children,
    }
  }

  // Start with a root node
  return {
    type: "root",
    feature: `Feature ${Math.floor(Math.random() * 10)}`,
    threshold: Math.random().toFixed(2),
    children: [buildTree(1), buildTree(1)],
  }
}
