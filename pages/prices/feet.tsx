import { NextPage } from 'next';
import { PageHeader } from '../../components/PageHeader';
import { messages as M } from '../../utils/messages';

const Feet: NextPage = () => {
	return (
		<div>
			<PageHeader>
				{M.price.text.feet}
			</PageHeader>
		</div>
	);
};

export default Feet;
