import React  from 'react';

import { Image, Container } from 'semantic-ui-react';
import Paragraph from './Paragraph';

const Section = ({ 
	block,
	image,
	paragraphText,
	children
}) => (
	<section className={block}>
		<Container>
			{image ?
				<Image className={`${block}__figure`} 
			 		src={`/static/pest_control/img/${image}`}
			 	/> : "" }
			{paragraphText ? 
			 	<Paragraph block={block}
		 		text={paragraphText} /> : 
		 	""} 
		 	{children}
		</Container>
	</section>
);

export default Section;