import { NextPage } from 'next';
import { messages as M } from '../utils/messages';
import PageHeader from '../components/PageHeader/PageHeader';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';

import styles from '../styles/gallery.module.scss';

const Gallery: NextPage = () => {
	return (
		<div className={styles.container}>
			<PageHeader>
				{M.gallery.header}
			</PageHeader>
			<PhotoGallery/>
		</div>
	);
};

export default Gallery;
