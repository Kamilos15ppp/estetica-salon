import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { messages as M } from '../utils/messages';
import {
  AnimationPageWrapper,
  ImageViewer,
  PhotoGallery,
  PageHeader,
} from '../components';

import styles from '../styles/pages/gallery.module.scss';

import img1 from '../public/gallery1.jpg';
import img2 from '../public/gallery2.jpg';
import img3 from '../public/gallery3.jpg';
import img4 from '../public/gallery4.jpg';
import img5 from '../public/gallery5.jpg';
import img6 from '../public/gallery6.jpg';

const images = [
  {
    id: 1,
    src: img1,
    alt: 'img1',
  },
  {
    id: 2,
    src: img2,
    alt: 'img2',
  },
  {
    id: 3,
    src: img3,
    alt: 'img3',
  },
  {
    id: 4,
    src: img4,
    alt: 'img4',
  },
  {
    id: 5,
    src: img5,
    alt: 'img5',
  },
  {
    id: 6,
    src: img6,
    alt: 'img6',
  },
];

const Gallery: NextPage = () => {
  const [currImg, setCurrImg] = useState<number>(1);
  const [mounted, setMounted] = useState<boolean>(false);
  const [disabledBtns, setDisabledBtns] = useState<{
    prevBtn: boolean;
    nextBtn: boolean;
  }>({ prevBtn: true, nextBtn: false });

  const openImageViewer = () => setMounted(true);
  const closeImageViewer = () => setMounted(false);
  const prevImage = () =>
    setCurrImg((prev) => (prev - 1 < 1 ? prev : prev - 1));
  const nextImage = () =>
    setCurrImg((prev) => (prev + 1 > images.length ? prev : prev + 1));
  const setImage = (id: number) => setCurrImg(id);

  useEffect(() => {
    if (currImg === 1) {
      setDisabledBtns({ prevBtn: true, nextBtn: false });
    } else if (currImg === images.length) {
      setDisabledBtns({ prevBtn: false, nextBtn: true });
    } else {
      setDisabledBtns({ prevBtn: false, nextBtn: false });
    }
  }, [currImg]);

  return (
    <AnimationPageWrapper className={styles.container}>
      <PageHeader>{M.gallery.header}</PageHeader>
      <PhotoGallery
        images={images}
        openImageViewer={openImageViewer}
        setImage={setImage}
      />
      <ImageViewer
        mounted={mounted}
        closeImageViewer={closeImageViewer}
        prevImage={prevImage}
        nextImage={nextImage}
        disabledBtns={disabledBtns}
      >
        <Image
          src={images[currImg - 1].src}
          alt={images[currImg - 1].alt}
          layout='fill'
          style={{ borderRadius: '2rem' }}
        />
      </ImageViewer>
    </AnimationPageWrapper>
  );
};

export default Gallery;
