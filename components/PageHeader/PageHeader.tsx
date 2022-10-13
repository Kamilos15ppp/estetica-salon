import React from 'react';
import styles from '../../styles/pageHeader.module.scss';

interface Props {
	children: React.ReactNode;
}

const PageHeader = ({ children }: Props) => {
	return (
		<h6 className={styles.header}>
			{children}
		</h6>
	);
};

export default PageHeader;
