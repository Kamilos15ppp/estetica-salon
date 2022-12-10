import React from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles/components/pageHeader.module.scss';

interface Props {
  children: React.ReactNode;
}

const PageHeader = ({ children }: Props) => {
  return (
    <motion.h6
      animate={{
        y: ['-10rem', '0rem'],
        transition: {
          duration: 0.5,
          delay: 0.3,
        },
      }}
      className={styles.header}
    >
      {children}
    </motion.h6>
  );
};

export default PageHeader;
