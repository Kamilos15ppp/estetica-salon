import Head from 'next/head';
import { seo } from '../../utils/seo';

const Headers = () => {
	return (
		<Head>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description}/>
			<meta name="keywords" content={seo.keywords}/>
			<link rel="icon" href="/favicon.ico"/>
		</Head>
	);
};

export default Headers;
