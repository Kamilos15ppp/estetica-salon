import { NextPage } from 'next';
import Image from 'next/image';
import { messages as M } from '../utils/messages';
import { AnimationPageWrapper, PageHeader } from '../components';

import img from '../public/voucher.jpg';

import styles from '../styles/pages/voucher.module.scss';

const Voucher: NextPage = () => {
  return (
    <AnimationPageWrapper className={styles.container}>
      <PageHeader>{M.voucher.header}</PageHeader>
      <div className={styles.image}>
        <Image
          src={img}
          alt='voucher'
          layout='fill'
          style={{ borderRadius: '2rem' }}
        />
      </div>
      <div className={styles.text1Container}>
        <p className={styles.text1}>{M.voucher.text1}:</p>
        <ul>
          <li>{M.voucher.listItem1}</li>
          <li>{M.voucher.listItem2}</li>
        </ul>
      </div>
      <p className={styles.text2}>{M.voucher.text2}</p>
    </AnimationPageWrapper>
  );
};

export default Voucher;
