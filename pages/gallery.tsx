import { NextPage } from 'next';
import { messages as M } from '../utils/messages';
import { PageHeader } from '../components/PageHeader';
import { PhotoGallery } from '../components/PhotoGallery';
import { AnimationPageWrapper } from '../components/AnimationPageWrapper';

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
