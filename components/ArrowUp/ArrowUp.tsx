import { BsArrowUpShort } from 'react-icons/bs';

import styles from '../../styles/components/arrowUp.module.scss';

const ArrowUp = () => {
  const handleScrollUp = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container} onClick={handleScrollUp}>
      <BsArrowUpShort size={40} />
    </div>
  );
};

export default ArrowUp;
