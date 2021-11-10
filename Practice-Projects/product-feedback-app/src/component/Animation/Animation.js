export const slideUp = {
    hidden: { 
      opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

export const staggerContainer = {
    hidden: { opacity: 0 },
    show:{
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
          },
    },
};

export const slideLeft = {
  hidden: { 
    opacity: 0.5, x: -1000 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.4,
    },
  
  },
  exit:{
    opacity: 0,
    x: -1000,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.4,
    },
  }
};


export const slideRight = {
hidden: { 
  opacity: 0.5, x: 1000 },
show: {
  opacity: 1,
  x: 0,
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.4,
  },

},
exit:{
  opacity: 0,
  x: 1000,
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 0.4,
  },
}
};

export const modalAnimation = {
  hidden:{
      y: 100,
      opacity: 0
      
  },
  show:{
      y: 0,
      opacity: 1,
      transition: {
          ease: "easeInOut",
          duration: 0.4,
        },
  },
  exit:{
      y: 100,
      opacity: 0,
      transition: {
          ease: "easeInOut",
          duration: 0.2,
        },
  }
};