import { NextPage } from 'next';
import { messages as M } from '../utils/messages';
import Image from 'next/image';

import img from '../public/woman.jpg';

import styles from '../styles/voucher.module.scss';

const Voucher: NextPage = () => {
	return (
		<div className={styles.container}>
			<h6 className={styles.header}>{M.voucher.header}</h6>
			<div className={styles.image}>
				<Image src={img} alt={img.src.toString()} width={320} height={200}/>
			</div>
			<div className={styles.text1Container}>
				<p className={styles.text1}>
					{M.voucher.text1}:
				</p>
				<ul>
					<li>{M.voucher.listItem1}</li>
					<li>{M.voucher.listItem2}</li>
				</ul>
			</div>
			<p className={styles.text2}>{M.voucher.text2}</p>
		</div>
	);
};

export default Voucher;
