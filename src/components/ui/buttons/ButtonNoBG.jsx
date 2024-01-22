import React from 'react';
import scss from './Button.module.scss';

const ButtonNoBG = ({ children }) => {
	return <button className={`${scss.button} ${scss.no_bg}`}>{children}</button>;
};

export default ButtonNoBG;
