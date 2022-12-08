import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import {
  BsArrowLeftSquareFill,
  BsArrowRightSquareFill,
  BsXCircleFill,
} from 'react-icons/bs';

import styles from '../../styles/components/imageViewer.module.scss';

interface Props {
  mounted: boolean;
  closeImageViewer: () => void;
  prevImage: () => void;
  nextImage: () => void;
  disabledBtns: {
    prevBtn: boolean;
    nextBtn: boolean;
  };
  children: React.ReactNode;
}

const ImageViewer = ({
  mounted,
  closeImageViewer,
  prevImage,
  nextImage,
  disabledBtns: { prevBtn, nextBtn },
  children,
}: Props) => {
  const Portal = (
    <motion.div className={styles.container} animate={{ opacity: [0, 1] }}>
      <div className={styles.imageContainer}>{children}</div>
      <div className={styles.btnContainer}>
        <span
          className={prevBtn ? styles.disabled : ''}
          onClick={() => !prevBtn && prevImage()}
        >
          <BsArrowLeftSquareFill />
        </span>
        <span
          className={nextBtn ? styles.disabled : ''}
          onClick={() => !nextBtn && nextImage()}
        >
          <BsArrowRightSquareFill />
        </span>
        <span onClick={() => closeImageViewer()}>
          <BsXCircleFill />
        </span>
      </div>
    </motion.div>
  );

  return (
    mounted && createPortal(Portal, document.querySelector('#imagesPortal')!)
  );
};

export default ImageViewer;
