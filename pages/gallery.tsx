import { NextPage } from 'next';
import Image from 'next/image';
import { messages as M } from '../utils/messages';

import img from '../public/woman.jpg';

import styles from '../styles/gallery.module.scss';

const images = [
	{
		id: 1,
		src: img,
		alt: img.src.toString(),
		width: 320,
		height: 500,
	},
	{
		id: 2,
		src: img,
		alt: img.src.toString(),
		width: 320,
		height: 500,
	},
	{
		id: 3,
		src: img,
		alt: img.src.toString(),
		width: 320,
		height: 500,
	},
	{
		id: 4,
		src: img,
		alt: img.src.toString(),
		width: 320,
		height: 500,
	},
	{
		id: 5,
		src: img,
		alt: img.src.toString(),
		width: 320,
		height: 500,
	},
	{
		id: 6,
		src: img,
		alt: img.src.toString(),
		width: 320,
		height: 500,
	},
];

const Gallery: NextPage = () => {
	const galleryImgs = images.map((img) => (
			<div className={styles.image} key={img.id}>
				<Image
					src={img.src}
					alt={img.alt}
					width={img.width}
					height={img.height}
				/>
			</div>
		),
	);

	return (
		<div className={styles.container}>
			<h6 className={styles.header}>{M.gallery.header}</h6>
			<div className={styles.galleryContainer}>
				{galleryImgs}
			</div>
		</div>
	);
};

export default Gallery;
