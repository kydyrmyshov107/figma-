import React from 'react';
import scss from './Button.module.scss';

const ButtonBG = ({ children }) => {
	return <button className={`${scss.button} ${scss.bg}`}>{children}</button>;
};

export default ButtonBG;
