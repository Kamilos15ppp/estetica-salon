import { NextPage } from 'next';
import { messages as M } from '../utils/messages';
import { AcneTherapy, AnimationPageWrapper, PageHeader } from '../components';

import styles from '../styles/pages/therapy2.module.scss';

const TextArray = M.therapy.content.therapy2.text;
const ListArray = M.therapy.content.therapy2.list;
const list = ListArray.map((el: string) => {
  return (
    <li key={el.slice(0, 20)} className={styles.element}>
      {el}
    </li>
  );
});
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
    if (index === TextArray.length - 3) {
      return <ul className={styles.list}>{list}</ul>;
    } else {
      return (
        <p key={el.slice(0, 20)} className={styles.paragraph}>
          {el}
        </p>
      );
    }
  }
});

const Therapy2: NextPage = () => {
  return (
    <AnimationPageWrapper className={styles.container}>
      <PageHeader>{M.therapy.subHeader2}</PageHeader>
      <div className={styles.textContainer}>{textContent}</div>
      <AcneTherapy />
    </AnimationPageWrapper>
  );
};

export default Therapy2;
