import { NextPage } from 'next';
import { messages as M } from '../utils/messages';
import { AcneTherapy, AnimationPageWrapper, PageHeader } from '../components';

import styles from '../styles/pages/therapy1.module.scss';

const TextArray = M.therapy.content.therapy1.text;
const textContent = TextArray.map((el: string, index) => {
  if (index === TextArray.length - 1) {
    return (
      <p
        key={el.slice(0, 20)}
        className={[styles.paragraph, styles.bold].join(' ')}
      >
        {el}
      </p>
    );
  } else {
    return (
      <p key={el.slice(0, 20)} className={styles.paragraph}>
        {el}
      </p>
    );
  }
});

const Therapy1: NextPage = () => {
  return (
    <AnimationPageWrapper className={styles.container}>
      <PageHeader>{M.therapy.subHeader1}</PageHeader>
      <div className={styles.textContainer}>{textContent}</div>
      <AcneTherapy />
    </AnimationPageWrapper>
  );
};

export default Therapy1;
