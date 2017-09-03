import React  from 'react';

const TextareaController = ({
	input,
	meta: {
		touched,
		error,
		warning
	},
	block,
	label,
	...rest
}) => (
	<div className={block}>
		<label className={`${block}__label`}>
			{label}
		</label>
		<textarea {...input}
			{...rest}
			className={block + '__input'} />
		 {touched && 
		 	((error && 
		 		<div className='errorContainer'><span className={block + '__error'}>{error}</span></div>) || 
		 		(warning && <span className={block + '__error'}>{warning}</span>))}
	</div>
);

export default TextareaController;