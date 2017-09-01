import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import { Icon, Image } from 'semantic-ui-react';

import Title  from './Title';
import DropdownController from './DropdownController';
import RenderController from './RenderController';
import {
	required,
	email
} from './../constants/validation.js';
import { 
	serviceOptions,
	spaceOptions
} from './../constants/options.js';



const MakeOrderForm = ({ 
	handleSubmit,
	submit
}) => (
	<div className='makeOrderFormWrapper'>
		<Image className='makeOrderFormWrapper__closeButton' 
		 id='makeOrderFormCloseButton' 
		 src='/static/pest_control/img/close_btn.png' />
		<form 
			id='makeOrderForm' 
			className='makeOrderForm'
			method='post'
			onSubmit={handleSubmit(submit.bind(this))}>
			<Title block='makeOrderForm'
				text='Заказ' />
			<Field 
				autoFocus="true"
				name='name'
				type='text'
				block='makeOrderFormController'
				component={RenderController}
				label='Ф.И.О.'
				placeholder='Ф.И.О.'
				maxLength='150'
				validate={[ required ]}

			/>
			<Field 
				component={RenderController}
				name='phone'
				label='Телефон'
				block='makeOrderFormController'
				maxLength='24'
				validate={[ required ]}
				icon='fa-phone'
			/>
			<Field 
				name='email'
				type='email'
				block='makeOrderFormController'
				component={RenderController}
				label='E-mail'
				maxLength='70'
				placeholder='bloody@comandos.com'
				validate={[ required, email ]}
				icon='fa-envelope'
			/>
			<Field 
				name='service'
				block='makeOrderFormController'
				component={DropdownController}
				label='Услуга'
				options={serviceOptions}
				validate={[ required ]}
			/>
			<Field 
				name='space'
				block='makeOrderFormController'
				component={DropdownController}
				label='Помещение'
				options={spaceOptions}
				validate={[ required ]}
			/>
			<button 
				type='submit' 
				className='makeOrderForm__button submit'>
				Заказать
			</button> 
		</form>
	</div>
);

export default reduxForm({
  form: 'makeOrderForm'
})(MakeOrderForm);