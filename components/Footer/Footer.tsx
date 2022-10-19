import styles from '../../styles/footer.module.scss';
import React from 'react';

interface Props {
	children: React.ReactNode;
}

const Footer = ({ children }: Props) => {
	return (
		<footer className={styles.container}>
			<p>{children}</p>
		</footer>
	);
};

export default Footer;
