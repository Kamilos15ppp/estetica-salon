import { NextPage } from 'next';
import { PageHeader } from '../../components/PageHeader';
import { messages as M } from '../../utils/messages';

const Eyes: NextPage = () => {
	return (
		<div>
			<PageHeader>
				{M.price.text.eyes}
			</PageHeader>
		</div>
	);
};

export default Eyes;
