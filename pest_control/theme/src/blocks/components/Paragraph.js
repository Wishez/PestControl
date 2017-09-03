import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';

const Paragraph = ({ 
	text,
	block,
	children,
	modifier 
}) => {
	const getClasses = (block, modifier) => (
		classNames({
			[`${block}__paragraph`]: true,
			[`${block}__paragraph--${modifier}`]: modifier ? true : false
		})
	);
	
	return (	
		<p className={getClasses(block, modifier)}>
			{ ReactHtmlParser(text) }
			{children}
		</p>
	);
	
}

export default Paragraph;