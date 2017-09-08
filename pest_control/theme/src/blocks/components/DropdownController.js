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
	onChangeChoosenService,
	serviceId,
	...rest
}) => (
	<div className={block}>
		<label className={`${block}__label`}>
			{label}
		</label>
		<Dropdown className={`${block}__dropdown`}
			selection {...input}
			value={serviceId ? serviceId : input.value}
			onChange={(param, data) => { 
				input.onChange(data.value);
				if (onChangeChoosenService)
					onChangeChoosenService(data.value);
			}}
			{...rest}
		/>
		 {touched && 
		 	((error && 
		 		<div className='errorContainer'><span className={block + '__error'}>{error}</span></div>) || 
		 		(warning && <span className={block + '__error'}>{warning}</span>))}
	</div>
);

export default DropdownController;