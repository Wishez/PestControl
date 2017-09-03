import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import { Image } from 'semantic-ui-react';

import Title  from './Title';
import RenderController from './RenderController';
import {
	required
} from './../constants/validation.js';

import ElementButton from './ElementButton';


const OrderCallbackForm = ({ 
	handleSubmit,
	onSubmitOrderCallbackForm,
	message,
	closeOrderCallbackForm,
	isOrdered
}) => (
	<div className='orderCallbackFormWrapper'>
		<Image className='orderCallbackFormWrapper__closeButton' 
		 src='/static/pest_control/img/close_btn.png'
		 onClick={closeOrderCallbackForm}
		 />
		 {!isOrdered ? 
		 	<form 
			id='orderCallbackForm' 
			className='orderCallbackForm'
			method='post'
			onSubmit={handleSubmit(onSubmitOrderCallbackForm.bind(this))}>
				<Title block='orderCallbackForm'
					text='Обратный вызов' />
				<Field 
					autoFocus="true"
					name='name'
					type='text'
					block='orderCallbackFormController'
					component={RenderController}
					label='Ф.И.О:'
					placeholder='Дженкинс Спок Спокович'
					maxLength='150'
					validate={[ required ]}

				/>
				<Field 
					component={RenderController}
					name='phone'
					label='Телефон:'
					type='tel'
					block='orderCallbackFormController'
					placeholder='8 (926) 370-78-12'
					maxLength='24'
					validate={[ required ]}
					icon='fa-phone'
				/>
				{message ? 
					<div className='errorContainer'>
						<strong className='orderCallbackFormController__error'>
							{message}
						</strong>
					</div> : ''
				}
				<ElementButton 
					type='submit'
					block='orderCallbackFormButton' 
					iconName='phone.png'
					isImage={true}
					name='Заказать звонок' 
					number='7'
				/>
			</form> :
			<p className='orderCallbackForm__successMessage'>
				{message}
			</p>
		 }
	</div>
);

export default reduxForm({
  form: 'orderCallbackForm'
})(OrderCallbackForm);