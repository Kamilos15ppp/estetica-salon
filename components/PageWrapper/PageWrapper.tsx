import React from 'react';

import styles from '../../styles/components/page.module.scss';

interface Props {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  return <main className={styles.pageWrapper}>{children}</main>;
};

export default PageWrapper;
