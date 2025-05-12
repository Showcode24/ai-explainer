// Common 3D scene settings
export const commonSceneSettings = {
  background: "#000000",
  ambientLight: {
    intensity: 0.5,
    color: "#ffffff",
  },
  directionalLight: {
    intensity: 0.8,
    position: [10, 10, 10],
    color: "#ffffff",
  },
  camera: {
    fov: 50,
    near: 0.1,
    far: 1000,
    defaultPosition: [0, 0, 15],
  },
  controls: {
    enableDamping: true,
    dampingFactor: 0.05,
    minDistance: 5,
    maxDistance: 30,
  },
}

// Neural Network visualization settings
export const neuralNetworkVisualization = {
  // Base settings
  neuron: {
    radius: 0.2,
    segments: 16,
    colors: {
      input: "#69b3a2",
      hidden: "#4e79a7",
      output: "#e15759",
      active: "#4fc3f7",
      inactive: "#37474f",
      hover: "#ffffff",
    },
  },
  connection: {
    radius: 0.03,
    segments: 8,
    colors: {
      positive: "#4fc3f7",
      negative: "#f44336",
      neutral: "#9e9e9e",
    },
    opacity: {
      active: 0.6,
      inactive: 0.1,
    },
  },
  dataFlow: {
    radius: 0.05,
    segments: 8,
    color: "#ffffff",
    speed: 0.1,
    emissiveIntensity: 0.5,
  },
  spacing: {
    layer: 3,
    neuron: 1.5,
  },
  animation: {
    rotationSpeed: 0.001,
    pulseSpeed: 0.5,
    dataFlowSpeed: 0.02,
    dataFlowProbability: 0.01,
  },
  performance: {
    maxNeuronsPerLayer: 10,
    maxParticles: 50,
  },
  // Add camera configuration
  camera: {
    fov: 50,
    near: 0.1,
    far: 1000,
    position: [0, 0, 15],
  },
  // Add scene configuration
  scene: {
    background: "#000000",
    ambientLightIntensity: 0.5,
    directionalLightIntensity: 0.8,
    directionalLightPosition: [10, 10, 10],
  },
}

// Decision Tree visualization settings
export const decisionTreeVisualization = {
  node: {
    radius: 0.3,
    segments: 16,
    colors: {
      root: "#4fc3f7",
      decision: "#4e79a7",
      leaf: "#e15759",
      highlight: "#ffeb3b",
      hover: "#ffffff",
    },
  },
  connection: {
    radius: 0.05,
    segments: 8,
    colors: {
      default: "#9e9e9e",
      highlight: "#ffeb3b",
    },
    opacity: {
      active: 0.6,
      inactive: 0.1,
      highlight: 0.8,
    },
  },
  text: {
    fontSize: 0.3,
    color: "#ffffff",
  },
  spacing: {
    level: 2,
    node: 2,
  },
  animation: {
    rotationSpeed: 0.0005,
    highlightDuration: 2000, // ms
  },
  // Add camera configuration
  camera: {
    fov: 50,
    near: 0.1,
    far: 1000,
    position: [0, 0, 15],
  },
  // Add scene configuration
  scene: {
    background: "#000000",
    ambientLightIntensity: 0.5,
    directionalLightIntensity: 0.8,
    directionalLightPosition: [10, 10, 10],
  },
}

// KNN visualization settings
export const knnVisualization = {
  point: {
    radius: 0.2,
    segments: 16,
    colors: {
      classA: "#69b3a2",
      classB: "#e15759",
      test: "#000000",
      highlight: "#ffeb3b",
      hover: "#ffffff",
    },
  },
  connection: {
    colors: {
      classA: "#69b3a2",
      classB: "#e15759",
    },
    width: 2,
    dashArray: "5,5",
    opacity: 0.7,
  },
  grid: {
    cellSize: 0.02,
    colors: {
      classA: "rgba(105, 179, 162, 0.2)",
      classB: "rgba(225, 87, 89, 0.2)",
    },
  },
  axis: {
    color: "#666666",
    tickColor: "#999999",
    labelColor: "#cccccc",
    fontSize: 12,
  },
}

// Scroll animation settings
export const scrollAnimationSettings = {
  neural: {
    enabledBreakpoints: {
      mobile: false,
      tablet: true,
      desktop: true,
    },
    timing: {
      fadeIn: 0.5,
      propagation: 1.2,
      rotation: 8,
    },
    scrollTrigger: {
      start: 0.2,
      end: 0.8,
      scrub: 0.5,
    },
    animation: {
      scrollPropagationSpeed: 0.8,
      layersPerScrollUnit: 0.5,
    },
    camera: {
      startPosition: [0, 0, 15],
      endPosition: [5, 2, 12],
      startRotation: [0, 0, 0],
      endRotation: [0, Math.PI * 0.2, 0],
    },
  },
  decisionTree: {
    enabledBreakpoints: {
      mobile: false,
      tablet: true,
      desktop: true,
    },
    timing: {
      fadeIn: 0.5,
      nodeReveal: 0.8,
      rotation: 10,
    },
    scrollTrigger: {
      start: 0.1,
      end: 0.9,
      scrub: 0.5,
    },
    animation: {
      levelsPerScrollUnit: 0.4,
    },
    camera: {
      startPosition: [0, 0, 15],
      endPosition: [3, -2, 12],
      startRotation: [0, 0, 0],
      endRotation: [0, Math.PI * 0.15, 0],
    },
  },
}
