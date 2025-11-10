export const pageTransitionHeight = {
  initial: {
    width: 0,
  },
  enter: (i: number) => ({
    width: "20vw",
    transition: {
      duration: 0.6,
      delay: 0.08 * i, // Stagger: 0s, 0.08s, 0.16s, 0.24s, 0.32s
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      type: "tween" as const,
    },
  }),
  exit: (i: number) => ({
    width: 0,
    transition: {
      duration: 0.5,
      delay: 0.08 * i, // Left to right exit
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      type: "tween" as const,
    },
  }),
};

export const pageTransitionBackground = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      type: "tween" as const,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      type: "tween" as const,
    },
  },
};

export const pageContentAnimation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: 0.7, // Wait for transition to mostly complete
      type: "tween" as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      type: "tween" as const,
    },
  },
};

export const mountAnim = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
} as const;
