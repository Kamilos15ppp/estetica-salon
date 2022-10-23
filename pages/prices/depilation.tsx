import { NextPage } from 'next';
import { PageHeader } from '../../components/PageHeader';
import { messages as M } from '../../utils/messages';

const Depilation: NextPage = () => {
	return (
		<div>
			<PageHeader>
				{M.price.text.depilation}
			</PageHeader>
		</div>
	);
};

export default Depilation;
