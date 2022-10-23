import { NextPage } from 'next';
import { PageHeader } from '../../components/PageHeader';
import { messages as M } from '../../utils/messages';

const Face: NextPage = () => {
	return (
		<div>
			<PageHeader>
				{M.price.text.face}
			</PageHeader>
		</div>
	);
};

export default Face;
