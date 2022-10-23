import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../../styles/categoryTile.module.scss';

interface Props {
	title: string;
	path: string;
}

const CategoryTile = ({ title, path }: Props) => {
	return (
		<Link href={path}>
			<motion.div
				animate={{ scale: [0, 1], transition: { duration: .8, delay: .5 } }}
				whileHover={{ opacity: .8 }}
				className={styles.container}
			>
				<p className={styles.title}>
					{title}
				</p>
			</motion.div>
		</Link>
	);
};

export default CategoryTile;
