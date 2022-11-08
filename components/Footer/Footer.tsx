import React from 'react';

import styles from '../../styles/components/footer.module.scss';

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
