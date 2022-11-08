import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animationVariants';

interface Props {
	className: string;
	children: React.ReactNode;
}

const AnimationPageWrapper = ({ className, children }: Props) => {
	return (
		<motion.div
			initial="initial"
			animate="enter"
			exit="exit"
			variants={pageVariants}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default AnimationPageWrapper;
