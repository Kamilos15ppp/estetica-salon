import styles from '../../styles/page.module.scss';

const PageWrapper = ({children}: any) => {
	return (
		<main className={styles.pageWrapper}>
			{children}
		</main>
	);
};

export default PageWrapper;
