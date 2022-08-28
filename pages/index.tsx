import type { NextPage } from 'next';
import Image from 'next/image';
import { messages as M } from '../utils/messages';

import woman from '../public/woman.jpg';

import styles from '../styles/homepage.module.scss';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<h6 className={styles.header}>{M.homepage.header}</h6>
			<div className={styles.textContent}>
				<p className={styles.text1}>{M.homepage.textContent1}</p>
				<p className={styles.text2}>{M.homepage.textContent2}</p>
				<span className={styles.signature}>{M.homepage.signature}</span>
			</div>
			<Image
				className={styles.image}
				src={woman}
				alt={M.homepage.signature}
				width={320}
				height={500}
			/>
		</div>
	);
};

export default Home;
