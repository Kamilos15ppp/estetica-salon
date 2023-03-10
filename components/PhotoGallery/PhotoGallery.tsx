import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

import styles from '../../styles/pages/gallery.module.scss';
interface Props {
  images: {
    id: number;
    src: StaticImageData;
    alt: string;
    isPortrait: boolean;
  }[];
  openImageViewer: () => void;
  setImage: (id: number) => void;
}

const PhotoGallery = ({ images, openImageViewer, setImage }: Props) => {
  const handleSelectImg = (id: number) => {
    setImage(id);
    openImageViewer();
  };

  const galleryImgs = images.map(({ id, src, alt, isPortrait }) => (
    <motion.div
      whileHover={{
        boxShadow: '10px 10px 15px 0 rgba(0, 0, 0, 0.3)',
        scale: 1.15,
        transition: {
          duration: 0.3,
        },
      }}
      className={`${styles.image} ${
        isPortrait ? styles.portrait : styles.landscape
      }`}
      key={id}
      onClick={() => handleSelectImg(id)}
    >
      <Image
        src={src}
        alt={alt}
        layout='fill'
        style={{ borderRadius: '2rem' }}
      />
    </motion.div>
  ));

  return <div className={styles.galleryContainer}>{galleryImgs}</div>;
};

export default PhotoGallery;
