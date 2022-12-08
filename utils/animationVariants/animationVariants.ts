export const animationVariants = {
  page: {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, delay: 0.35 },
    },
  },
  imageViewer: {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
  },
};
