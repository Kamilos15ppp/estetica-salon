import { NextPage } from 'next';
import Image from 'next/image';
import { messages as M } from '../utils/messages';
import { AnimationPageWrapper, PageHeader } from '../components';

import img from '../public/woman2.jpg';

import styles from '../styles/info.module.scss';

const Info: NextPage = () => {
	return (
		<AnimationPageWrapper className={styles.container}>
			<PageHeader>{M.info.header}</PageHeader>
			<p className={styles.text1}>{M.info.text1}</p>
			<div className={styles.image}>
				<Image
					src={img}
					alt={img.src.toString()}
					layout="fill"
					style={{ borderRadius: '2rem' }}
				/>
			</div>
			<p className={styles.text2}>{M.info.text2}</p>
			<p className={styles.telephoneContainer}>
				{M.info.telephoneText}:
				<span className={styles.telephone}>
					<a href={`tel:${M.info.telephoneNumber}`}>
						{M.info.telephoneNumber}
					</a>
				</span>
			</p>
		</AnimationPageWrapper>
	);
};

export default Info;
