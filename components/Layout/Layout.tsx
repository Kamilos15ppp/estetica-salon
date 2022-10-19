import React from 'react';
import { Headers } from '../Headers';
import { Navbar } from '../Navbar';
import { PageWrapper } from '../PageWrapper';
import { Footer } from '../Footer';
import { messages as M } from '../../utils/messages';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Headers/>
			<Navbar/>
			<PageWrapper>
				{children}
			</PageWrapper>
			<Footer>
				{M.page.footer}
			</Footer>
		</>
	);
};

export default Layout;
