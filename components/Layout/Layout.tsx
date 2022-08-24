import { Headers } from '../Headers';
import { Navbar } from '../Navbar';
import { PageWrapper } from '../PageWrapper';
import { Footer } from '../Footer';

const Layout = ({children}: any) => {
	return (
		<>
			<Headers/>
			<Navbar/>
			<PageWrapper>
				{children}
			</PageWrapper>
			<Footer/>
		</>
	);
};

export default Layout;
