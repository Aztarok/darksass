import NavBar from '@/components/NavBar';
import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';

const Header = async () => {
	const client = createClient();
	const settings = await client.getSingle('settings');

	return (
		<header>
			<NavBar settings={settings} />
		</header>
	);
};

export default Header;
