import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/pageHeader.module.scss';

interface Props {
	children: React.ReactNode;
}

const PageHeader = ({ children }: Props) => {
	return (
		<motion.h6
			animate={{
				y: ['-10rem', '0rem'],
				transition: {
					duration: .5,
				},
			}}
			className={styles.header}
		>
			{children}
		</motion.h6>
	);
};

export default PageHeader;
