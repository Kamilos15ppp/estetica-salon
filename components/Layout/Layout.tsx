import React, { useEffect, useState } from 'react';
import { Headers } from '../Headers';
import { Navbar } from '../Navbar';
import { PageWrapper } from '../PageWrapper';
import { Footer } from '../Footer';
import { ArrowUp } from '../ArrowUp';
import { messages as M } from '../../utils/messages';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else if (window.scrollY < 200) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleIsVisible);

    return () => window.removeEventListener('scroll', handleIsVisible);
  }, []);

  return (
    <>
      <Headers />
      <Navbar />
      <PageWrapper>
        {children}
        {isVisible && <ArrowUp />}
      </PageWrapper>
      <Footer>{M.page.footer}</Footer>
    </>
  );
};

export default Layout;
