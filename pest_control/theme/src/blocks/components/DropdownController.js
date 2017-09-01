import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownController = ({
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
		<Dropdown className={`${block}__dropdown`}
			selection {...input}
			value={input.value}
			onChange={(param, data) => { 
				input.onChange(data.value)
			}}
			{...rest}
		/>
		 {touched && 
		 	((error && 
		 		<span className={block + '__error'}>{error}</span>) || 
		 		(warning && <span className={block + '__error'}>{warning}</span>))}
	</div>
);

export default DropdownController;