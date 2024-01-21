import { NextPage } from 'next';
import Link from 'next/link';
import { messages as M } from '../utils/messages';
import { AnimationPageWrapper, PageHeader } from '../components';

import styles from '../styles/pages/therapy.module.scss';

const Therapy: NextPage = () => {
  return (
    <AnimationPageWrapper className={styles.container}>
      <PageHeader>{M.therapy.header}</PageHeader>
      <ul className={styles.tileContainer}>
        <li key={M.therapy.subPaths.path1} className={styles.tile}>
          <Link href={M.therapy.subPaths.path1}>{M.therapy.subHeader1}</Link>
        </li>
        <li key={M.therapy.subPaths.path2} className={styles.tile}>
          <Link href={M.therapy.subPaths.path2}>{M.therapy.subHeader2}</Link>
        </li>
      </ul>
    </AnimationPageWrapper>
  );
};

export default Therapy;
