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

export default scrollAnimationSettings
