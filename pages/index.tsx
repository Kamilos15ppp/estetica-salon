import type { NextPage } from 'next';
import Image from 'next/image';
import { messages as M } from '../utils/messages';
import { AnimationPageWrapper, PageHeader } from '../components';

import woman from '../public/woman.jpg';

import styles from '../styles/pages/homepage.module.scss';

const Home: NextPage = () => {
  return (
    <AnimationPageWrapper className={styles.container}>
      <PageHeader>{M.homepage.header}</PageHeader>
      <div className={styles.innerContainer}>
        <div className={styles.textContent}>
          <p className={styles.text}>{M.homepage.textContent1.part1}</p>
          <div className={styles.image}>
            <Image
              src={woman}
              alt={M.homepage.signature}
              layout='fill'
              style={{ borderRadius: '2rem' }}
            />
          </div>
          <p className={styles.text}>{M.homepage.textContent1.part2}</p>
          <p className={styles.text}>{M.homepage.textContent2}</p>
          <span className={styles.signature}>{M.homepage.signature}</span>
        </div>
      </div>
    </AnimationPageWrapper>
  );
};

export default Home;
