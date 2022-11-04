import { NextPage } from 'next';
import { PageHeader } from '../components/PageHeader';
import { messages as M } from '../utils/messages';
import { prices as P } from '../utils/prices';

import styles from '../styles/prices.module.scss';

const Prices: NextPage = () => {
	const priceElements = P.map((item) => {
		return (
			<div className={styles.item} key={item.name}>
				<h6 className={styles.header}>{item.name.toUpperCase()}</h6>
				{
					<div>
						{item.items.map((item) =>
							<p className={styles.innerItem} key={item.name}>
								<span className={styles.dot}></span>
								<span>{item.name}</span>
								<span>{item.price}</span>
							</p>)}
					</div>
				}
			</div>
		);
	});

	return (
		<div className={styles.container}>
			<PageHeader>
				{M.price.header}
			</PageHeader>
			<div className={styles.pricesContainer}>
				{priceElements}
			</div>
		</div>
	);
};

export default Prices;
