import React from 'react';
import { PageHeader } from '../PageHeader';
import { messages as M } from '../../utils/messages';

import styles from '../../styles/components/therapyScheme.module.scss';

const StepsArray = M.therapy.content.therapy1.scheme.steps;
const StepsHeader = M.therapy.content.therapy1.scheme.header;
const StepText = M.therapy.content.therapy1.scheme.step;
const stepsContent = StepsArray.map((el: string, index) => {
  return (
    <div key={el.slice(0, 10)} className={styles.step}>
      <span className={styles.header}>{`${StepText} ${index + 1}`}</span>
      <p className={styles.text}>{el}</p>
    </div>
  );
});

const TherapyScheme = () => {
  return (
    <>
      <div className={styles.container}>
        <PageHeader>{StepsHeader}</PageHeader>
        <div className={styles.content}>{stepsContent}</div>
      </div>
    </>
  );
};

export default TherapyScheme;
