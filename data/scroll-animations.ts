import { neuralNetworkVisualization, decisionTreeVisualization, scrollAnimationSettings } from "./visualization-config"
import { scrollSections } from "./neural-networks-content"
import { decisionPath } from "./decision-trees-content"
import { breakpoints } from "./ui-config"

// Media query for reduced motion preference
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

// Device breakpoints (imported from ui-config.ts)
export const DEVICE_BREAKPOINTS = breakpoints

// Neural network scroll animation configuration
export const neuralNetworkScrollConfig = {
  // Enable/disable based on device width
  enabledBreakpoints: scrollAnimationSettings.neural.enabledBreakpoints,

  // Animation timing (in seconds)
  timing: scrollAnimationSettings.neural.timing,

  // Scroll trigger settings
  scrollTrigger: scrollAnimationSettings.neural.scrollTrigger,

  // Visual settings
  visuals: {
    // Base settings from visualization-config.ts
    ...neuralNetworkVisualization,
    // Override or add specific scroll animation settings
    animation: {
      ...neuralNetworkVisualization.animation,
      // Signal propagation speed during scroll
      scrollPropagationSpeed: scrollAnimationSettings.neural.animation.scrollPropagationSpeed,
      // How many layers to activate per scroll percentage
      layersPerScrollUnit: scrollAnimationSettings.neural.animation.layersPerScrollUnit,
    },
    // Camera movement during scroll
    camera: {
      ...neuralNetworkVisualization.camera,
      startPosition: scrollAnimationSettings.neural.camera.startPosition,
      endPosition: scrollAnimationSettings.neural.camera.endPosition,      
      startRotation: scrollAnimationSettings.neural.camera.startRotation,
      endRotation: scrollAnimationSettings.neural.camera.endRotation,
    },
  },

  // Sections to highlight during scroll (imported from neural-networks-content.ts)
  sections: scrollSections,
}

// Decision tree scroll animation configuration
export const decisionTreeScrollConfig = {
  // Enable/disable based on device width
  enabledBreakpoints: scrollAnimationSettings.decisionTree.enabledBreakpoints,

  // Animation timing (in seconds)
  timing: scrollAnimationSettings.decisionTree.timing,

  // Scroll trigger settings
  scrollTrigger: scrollAnimationSettings.decisionTree.scrollTrigger,

  // Visual settings
  visuals: {
    // Base settings from visualization-config.ts
    ...decisionTreeVisualization,
    // Override or add specific scroll animation settings
    animation: {
      ...decisionTreeVisualization.animation,
      // How many tree levels to reveal per scroll percentage
      levelsPerScrollUnit: scrollAnimationSettings.decisionTree.animation.levelsPerScrollUnit,
    },
    // Camera movement during scroll
    camera: {
      ...decisionTreeVisualization.camera,
      startPosition: scrollAnimationSettings.decisionTree.camera.startPosition,
      endPosition: scrollAnimationSettings.decisionTree.camera.endPosition,
      startRotation: scrollAnimationSettings.decisionTree.camera.startRotation,
      endRotation: scrollAnimationSettings.decisionTree.camera.endRotation,
    },
  },

  // Decision path to highlight during scroll (imported from decision-trees-content.ts)
  decisionPath: decisionPath,
}

// Helper function to check if animations should be enabled based on device width
export function shouldEnableAnimations(config: any, width: number): boolean {
  if (width < DEVICE_BREAKPOINTS.mobile) {
    return config.enabledBreakpoints.mobile
  } else if (width < DEVICE_BREAKPOINTS.tablet) {
    return config.enabledBreakpoints.tablet
  }
  return config.enabledBreakpoints.desktop
}

// Helper function to check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

// Helper function to interpolate values based on scroll progress
export function interpolate(start: number, end: number, progress: number): number {
  return start + (end - start) * progress
}

// Helper function to interpolate vector3 values based on scroll progress
export function interpolateVector3(
  start: [number, number, number],
  end: [number, number, number],
  progress: number,
): [number, number, number] {
  // Ensure we're working with valid numbers
  const x1 = typeof start[0] === "number" ? start[0] : 0
  const y1 = typeof start[1] === "number" ? start[1] : 0
  const z1 = typeof start[2] === "number" ? start[2] : 0

  const x2 = typeof end[0] === "number" ? end[0] : 0
  const y2 = typeof end[1] === "number" ? end[1] : 0
  const z2 = typeof end[2] === "number" ? end[2] : 0

  return [interpolate(x1, x2, progress), interpolate(y1, y2, progress), interpolate(z1, z2, progress)]
}

// Helper function to get current section based on scroll progress
export function getCurrentSection(sections: any[], progress: number) {
  // Find the last section where scrollPercentage is less than or equal to progress
  for (let i = sections.length - 1; i >= 0; i--) {
    if (progress >= sections[i].scrollPercentage) {
      return sections[i]
    }
  }
  return sections[0]
}
