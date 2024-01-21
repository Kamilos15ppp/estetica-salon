import React from 'react';
import Image from 'next/image';
import { PageHeader } from '../PageHeader';
import { messages as M } from '../../utils/messages';

import img from '../../public/therapy.jpg';

const EffectsHeader = M.therapy.content.therapy1.effects.header;

const TherapyEffect = () => {
  return (
    <>
      <PageHeader>{EffectsHeader}</PageHeader>
      <div>
        <Image src={img} alt='Effects' style={{ borderRadius: '2rem' }} />
      </div>
    </>
  );
};

export default TherapyEffect;
