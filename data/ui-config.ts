// Breakpoints for responsive design
export const breakpoints = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
}

// Spacing values for consistent layout
export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
}

// Animation durations and easings
export const animation = {
  duration: {
    fast: 0.2,
    medium: 0.5,
    slow: 0.8,
  },
  easing: {
    default: [0.4, 0, 0.2, 1], // cubic-bezier
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
}

// Card dimensions
export const cardDimensions = {
  default: {
    width: "100%",
    maxWidth: "400px",
  },
  small: {
    width: "100%",
    maxWidth: "300px",
  },
  large: {
    width: "100%",
    maxWidth: "500px",
  },
}

// Section padding
export const sectionPadding = {
  default: {
    y: "py-12 md:py-24 lg:py-32",
    x: "px-4 md:px-6",
  },
  compact: {
    y: "py-8 md:py-12 lg:py-16",
    x: "px-4 md:px-6",
  },
  spacious: {
    y: "py-16 md:py-32 lg:py-48",
    x: "px-6 md:px-8",
  },
}

// Grid layouts
export const gridLayouts = {
  features: "grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12",
  twoColumn: "grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12",
  threeColumn: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  fourColumn: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
}

// Common icon sizes
export const iconSizes = {
  small: "h-4 w-4",
  medium: "h-6 w-6",
  large: "h-8 w-8",
  xlarge: "h-10 w-10",
}

// Media query strings for styled components or CSS-in-JS
export const mediaQueries = {
  mobile: `(min-width: ${breakpoints.mobile}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
}

// Accessibility
export const accessibility = {
  reducedMotionQuery: "(prefers-reduced-motion: reduce)",
  highContrastQuery: "(prefers-contrast: high)",
}

// Common z-index values
export const zIndex = {
  base: 0,
  content: 10,
  navigation: 100,
  modal: 1000,
  tooltip: 2000,
}
