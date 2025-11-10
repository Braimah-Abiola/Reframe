export const width = {
  initial: {
    width: 0,
  },
  enter: (i: number) => ({
    width: "20vw",
    transition: {
      duration: 0.8,
      delay: 0.2 * i,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      type: "tween" as const,
    },
  }),
  exit: (i: number) => ({
    width: 0,
    transition: {
      duration: 0.6,
      delay: 0.1 * i,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      type: "tween" as const,
    },
  }),
};

export const logoAnimation = {
  initial: {
    opacity: 0,
    scale: 0.6,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: 0.6,
      type: "tween" as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
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
