import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsList } from 'react-icons/bs';
import { Href, Hrefs } from '../../utils/hrefs';

import styles from '../../styles/navbar.module.scss';

const Navbar = () => {
	const [isMobileView, setIsMobileView] = useState<boolean>(true);
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const { pathname } = useRouter();

	const toggleMenu = () => setIsMenuToggled(!isMenuToggled);

	const menuList = Hrefs.map((href: Href) => (
		<li key={href.path} onClick={isMobileView ? toggleMenu : undefined}>
			<Link href={href.path}>{href.text}</Link>
		</li>
	));

	useEffect(() => {
		const links = document.querySelectorAll('a');
		const activeElement = document.querySelector(`a[href='${pathname}']`);

		if (activeElement && activeElement.getAttribute('href') === pathname) {
			activeElement.classList.add(styles.active);
		}

		links.forEach((element) => {
			if (element.classList.contains(styles.active)
				&& element.getAttribute('href') !== pathname
			) {
				element.classList.remove(styles.active);
			}
		});
	}, [pathname]);

	useEffect(() => {
		const handleViewport = () => {
			if (window.innerWidth < 1024) {
				setIsMobileView(true);
			} else {
				setIsMobileView(false);
			}
		};

		window.addEventListener('resize', handleViewport);

		return () => {
			window.removeEventListener('resize', handleViewport);
		};
	}, []);

	return (
		<header className={styles.container}>
			{isMobileView && (
				<div className={`${styles.menuIcon} ${isMenuToggled ? styles.menuIconRotate : ''}`}
				     onClick={toggleMenu}>
					<BsList/>
				</div>
			)}
			<nav id="nav" className={`${styles.navbar} ${isMenuToggled ? styles.toggleOn : ''}`}>
				<ul>
					{menuList}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
