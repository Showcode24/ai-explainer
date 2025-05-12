export interface CameraConfig {
  fov: number
  near: number
  far: number
  position: [number, number, number]
  startPosition?: [number, number, number]
  endPosition?: [number, number, number]
  startRotation?: [number, number, number]
  endRotation?: [number, number, number]
}

export interface SceneConfig {
  background: string
  ambientLightIntensity: number
  directionalLightIntensity: number
  directionalLightPosition: [number, number, number]
}

export interface NeuronConfig {
  radius: number
  segments: number
  colors: {
    input: string
    hidden: string
    output: string
    active: string
    inactive: string
    hover: string
  }
}

export interface ConnectionConfig {
  radius: number
  segments: number
  colors:
    | {
        positive: string
        negative: string
        neutral: string
      }
    | {
        default: string
        highlight: string
      }
  opacity: {
    active: number
    inactive: number
    highlight?: number
  }
}

export interface AnimationConfig {
  rotationSpeed: number
  pulseSpeed?: number
  dataFlowSpeed?: number
  dataFlowProbability?: number
  highlightDuration?: number
  scrollPropagationSpeed?: number
  layersPerScrollUnit?: number
  levelsPerScrollUnit?: number
}

export interface DataFlowConfig {
  radius: number
  segments: number
  color: string
  speed: number
  emissiveIntensity: number
}

export interface SpacingConfig {
  layer?: number
  neuron?: number
  level?: number
  node?: number
}

export interface PerformanceConfig {
  maxNeuronsPerLayer: number
  maxParticles: number
}

export interface NeuralNetworkVisualizationConfig {
  neuron: NeuronConfig
  connection: ConnectionConfig
  dataFlow: DataFlowConfig
  spacing: SpacingConfig
  animation: AnimationConfig
  performance: PerformanceConfig
  camera: CameraConfig
  scene: SceneConfig
}

export interface DecisionTreeVisualizationConfig {
  node: {
    radius: number
    segments: number
    colors: {
      root: string
      decision: string
      leaf: string
      highlight: string
      hover: string
    }
  }
  connection: ConnectionConfig
  text: {
    fontSize: number
    color: string
  }
  spacing: SpacingConfig
  animation: AnimationConfig
  camera: CameraConfig
  scene: SceneConfig
}

export interface ScrollAnimationConfig {
  enabledBreakpoints: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
  timing: {
    fadeIn: number
    propagation?: number
    rotation: number
    nodeReveal?: number
  }
  scrollTrigger: {
    start: number
    end: number
    scrub: number
  }
  animation: {
    scrollPropagationSpeed?: number
    layersPerScrollUnit?: number
    levelsPerScrollUnit?: number
  }
  camera: {
    startPosition: [number, number, number]
    endPosition: [number, number, number]
    startRotation: [number, number, number]
    endRotation: [number, number, number]
  }
}

export interface DatasetInfoItem {
  inputLayerSize: number
  outputLayerSize: number
  name: string
  description: string
}

export interface DatasetInfo {
  [key: string]: DatasetInfoItem
}
