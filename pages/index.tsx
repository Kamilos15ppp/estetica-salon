import type { NextPage } from 'next';
import Image from 'next/image';
import { messages as M } from '../utils/messages';
import { PageHeader } from '../components/PageHeader';

import woman from '../public/woman.jpg';

import styles from '../styles/homepage.module.scss';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<PageHeader>
				{M.homepage.header}
			</PageHeader>
			<div className={styles.innerContainer}>
				<div className={styles.textContent}>
					<p className={styles.text1}>{M.homepage.textContent1}</p>
					<p className={styles.text2}>{M.homepage.textContent2}</p>
					<span className={styles.signature}>{M.homepage.signature}</span>
				</div>
				<div className={styles.image}>
					<Image
						src={woman}
						alt={M.homepage.signature}
						layout="fill"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
