import Image from 'next/image';
import { motion } from 'framer-motion';
import img from '../../public/woman.jpg';

import styles from '../../styles/pages/gallery.module.scss';

const images = [
	{
		id: 1,
		src: img,
		alt: img.src.toString(),
	},
	{
		id: 2,
		src: img,
		alt: img.src.toString(),
	},
	{
		id: 3,
		src: img,
		alt: img.src.toString(),
	},
	{
		id: 4,
		src: img,
		alt: img.src.toString(),
	},
	{
		id: 5,
		src: img,
		alt: img.src.toString(),
	},
	{
		id: 6,
		src: img,
		alt: img.src.toString(),
	},
];

const PhotoGallery = () => {
	const galleryImgs = images.map((img) => (
			<motion.div
				whileHover={{
					boxShadow: '10px 10px 15px 0 rgba(0, 0, 0, 0.3)',
					scale: 1.15,
					transition: {
						duration: .3,
					},
				}}
				className={styles.image}
				key={img.id}>
				<Image
					src={img.src}
					alt={img.alt}
					layout="fill"
					style={{ borderRadius: '2rem' }}
				/>
			</motion.div>
		),
	);

	return (
		<div className={styles.galleryContainer}>
			{galleryImgs}
		</div>
	);
};

export default PhotoGallery;
