import React from 'react';
import scss from './Header.module.scss';
import logo from '../../../assets/logo.png';
import { ReactComponent as Logo_name } from '../../../assets/logo-name.svg';
import ButtonBG from '../../ui/buttons/ButtonBG.jsx';
import ButtonNoBG from '../../ui/buttons/ButtonNoBG.jsx';

const Header = () => {
	const link = [
		{
			href: '//',
			name: 'ABOUT'
		},
		{
			href: '//',
			name: 'SERVICES'
		},
		{
			href: '//',
			name: 'TECHNOLOGIES'
		},
		{
			href: '//',
			name: 'HOW TO'
		}
	];
	return (
		<>
			<header className={scss.header}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.left}>
							<img src={logo} alt="logo" />
							<Logo_name />
						</div>
						<div className={scss.middle}>
							<nav>
								<ul>
									{link.map((item, index) => (
										<li key={index}>
											<a href={item.href.href}>{item.name}</a>
										</li>
									))}
								</ul>
							</nav>
						</div>
						<div className={scss.right}>
							<ButtonNoBG>CONTACT US</ButtonNoBG>
							<ButtonBG>JOIN HYDRA</ButtonBG>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
export default Header;
