import { NextPage } from 'next';
import { messages as M } from '../utils/messages';
import { AnimationPageWrapper, PhotoGallery, PageHeader } from '../components';

import styles from '../styles/gallery.module.scss';

const Gallery: NextPage = () => {
	return (
		<AnimationPageWrapper className={styles.container}>
			<PageHeader>
				{M.gallery.header}
			</PageHeader>
			<PhotoGallery/>
		</AnimationPageWrapper>
	);
};

export default Gallery;
