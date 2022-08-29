import type { NextPage } from 'next';
import { messages as M } from '../utils/messages';

import styles from '../styles/contact.module.scss';

const Contact: NextPage = () => {
	return (
		<div className={styles.container}>
			<h6 className={styles.header}>{M.contact.header}</h6>
			<p className={styles.subHeader}>{M.contact.subHeader}</p>
			<div className={styles.reservationContainer}>
				<p className={styles.reservation}>{M.contact.reservation.toUpperCase()}:</p>
				<p className={styles.telephone}><a href={`tel:${M.contact.telephoneNumber}`}>{M.contact.telephoneNumber}</a></p>
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
			<div className={styles.map}></div>
		</div>
	);
};

export default Contact;
