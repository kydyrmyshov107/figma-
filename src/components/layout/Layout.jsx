import React from 'react';
import scss from './Layout.module.scss';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

const Layout = () => {
	return (
		<>
			<div className={scss.layout}>
				<Header />
				<Main />
				<Footer />
			</div>
		</>
	);
};
export default Layout;
