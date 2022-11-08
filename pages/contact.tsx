import type { NextPage } from 'next';
import Image from 'next/image';
import { messages as M } from '../utils/messages';
import { AnimationPageWrapper, IframeMap, PageHeader } from '../components';

import logo from '../public/estetica_logo.png';

import styles from '../styles/contact.module.scss';

const Contact: NextPage = () => {
	return (
		<AnimationPageWrapper className={styles.container}>
			<PageHeader>
				{M.contact.header}
			</PageHeader>
			<div className={styles.innerContainer}>
				<div className={styles.info}>
					<p className={styles.subHeader}>{M.contact.subHeader1}</p>
					<p className={styles.subHeader}>{M.contact.subHeader2}</p>
					<div className={styles.imageContainer}>
						<div className={styles.image}>
							<Image
								src={logo}
								alt="logo"
								layout="fill"
							/>
						</div>
					</div>
					<div className={styles.reservationContainer}>
						<p className={styles.reservation}>{M.contact.reservation.toUpperCase()}:</p>
						<p className={styles.telephone}><a href={`tel:${M.contact.telephoneNumber}`}>{M.contact.telephoneNumber}</a>
						</p>
						<p className={styles.email}>{M.contact.emailText}: <span><a
							href={`mailto:${M.contact.emailAddress}`}>{M.contact.emailAddress}</a></span></p>
					</div>
					<p className={styles.address}>{M.contact.address}</p>
					<div className={styles.openHoursWrapper}>
						<p className={styles.openHoursHeader}>{M.contact.openHoursText.toUpperCase()}:</p>
						<p className={styles.openHours}>{M.contact.openHours1}</p>
						<p className={styles.openHours}>{M.contact.openHours2}</p>
						<p className={styles.openHours}>{M.contact.openHours3}</p>
					</div>
				</div>
				<IframeMap/>
			</div>
		</AnimationPageWrapper>
	);
};

export default Contact;
