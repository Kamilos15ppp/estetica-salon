import { NextPage } from 'next';
import { PageHeader } from '../../components/PageHeader';
import { messages as M } from '../../utils/messages';

const Hands: NextPage = () => {
	return (
		<div>
			<PageHeader>
				{M.price.text.hands}
			</PageHeader>
		</div>
	);
};

export default Hands;
