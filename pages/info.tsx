import { NextPage } from 'next';
import Image from 'next/image';
import { messages as M } from '../utils/messages';

import img from '../public/woman2.jpg';

import styles from '../styles/info.module.scss';

const Info: NextPage = () => {
	return (
		<div className={styles.container}>
			<h6 className={styles.header}>{M.info.header}</h6>
			<p className={styles.text1}>{M.info.text1}</p>
			<div className={styles.image}>
				<Image src={img} alt={img.src.toString()} layout="fill"/>
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
		</div>
	);
};

export default Info;
