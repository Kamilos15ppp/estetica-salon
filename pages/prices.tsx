import { NextPage } from 'next';
import { PageHeader } from '../components/PageHeader';
import { CategoryTile } from '../components/CategoryTile';
import { messages as M } from '../utils/messages';
import { PriceHrefs } from '../utils/hrefs';

import styles from '../styles/prices.module.scss';


const Prices: NextPage = () => {
	const Tiles = PriceHrefs.map((item) => (
		<CategoryTile key={item.path} title={item.text} path={item.path}/>
	));

	return (
		<div className={styles.container}>
			<PageHeader>
				{M.price.header}
			</PageHeader>
			<div className={styles.tiles}>
				{Tiles}
			</div>
		</div>
	);
};

export default Prices;
