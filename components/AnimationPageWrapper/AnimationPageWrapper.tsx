import React from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from '../../utils/animationVariants';

interface Props {
  className: string;
  children: React.ReactNode;
}

const AnimationPageWrapper = ({ className, children }: Props) => {
  return (
    <motion.div
      initial='initial'
      animate='enter'
      variants={animationVariants.page}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationPageWrapper;
