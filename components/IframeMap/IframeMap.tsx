import styles from '../../styles/iframeMap.module.scss';

const IframeMap = () => {
	return (
		<div className={styles.container}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.245618351445!2d19.913137115843533!3d49.57425565798801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715e0609768f823%3A0xa09afe138a013c5e!2sRokiciny%20Podhala%C5%84skie%2029%2C%2034-721%20Rokiciny%20Podhala%C5%84skie!5e0!3m2!1spl!2spl!4v1666005860029!5m2!1spl!2spl"
				className={styles.map} loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
};

export default IframeMap;
