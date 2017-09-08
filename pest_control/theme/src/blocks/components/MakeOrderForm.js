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
	spaceOptions
} from './../constants/options.js';

import ElementButton from './ElementButton';


const MakeOrderForm = ({ 
	handleSubmit,
	onSubmitMakeOrderForm,
	message,
	isOrdered,
	closeMakeOrderForm,
	servicesList,
	serviceSpacesList,
	serviceId,
	onChangeChoosenService,
	chooseValue
}) => (
	<div className='makeOrderFormWrapper'>
		<Image className='makeOrderFormWrapper__closeButton' 
		 id='makeOrderFormCloseButton' 
		 src='/static/pest_control/img/close_btn.png'
		 onClick={closeMakeOrderForm} />
		 {!isOrdered ? 
		 	<form 
			id='makeOrderForm' 
			className='makeOrderForm'
			method='post'
			onSubmit={handleSubmit(onSubmitMakeOrderForm.bind(this))}>
					<Title block='makeOrderForm'
						text='Заказ' />
					<Field 
						autoFocus="true"
						name='full_name'
						type='text'
						block='makeOrderFormController'
						component={RenderController}
						label='Ф.И.О:'
						placeholder='Реарден Хэнк Васильевич'
						maxLength='150'
						validate={[ required ]}
					/>
					<Field 
						component={RenderController}
						name='phone'
						label='Телефон:'
						type='tel'
						block='makeOrderFormController'
						placeholder='8 (926) 370-78-12'
						maxLength='24'
						validate={[ required ]}
					/>
					<Field 
						name='email'
						type='email'
						block='makeOrderFormController'
						component={RenderController}
						label='E-mail:'
						maxLength='70'
						placeholder='bloody@commandos.com'
						validate={[ required, email ]}
					/>
					<Field 
						name='service'
						block='makeOrderFormController'
						component={DropdownController}
						label='Услуга:'
						placeholder='Выбирите услугу'
						options={servicesList}
						validate={[ required ]}
						serviceId={serviceId}
						onChangeChoosenService={onChangeChoosenService}
					/>
					<Field 
						name='space'
						block='makeOrderFormController'
						component={DropdownController}
						label='Помещение:'
						placeholder='Выбирите помещение'
						options={serviceSpacesList}
						validate={[ required ]}
					/>
					{message ? 
						<div className='errorContainer'>
							<strong className='makeOrderFormController__error'>
								{message}
							</strong>
						</div> : ''
					}
					<ElementButton 
						type='submit'
						block='makeOrderFormButton' 
						iconName='setting'
						name='Заказать' 
						number='8'
					/>
				</form> :
				<p className='makeOrderFormWrapper__successMessage'>
					{message}
				</p>
		 }
		
	</div>
);

export default reduxForm({
  form: 'makeOrderForm'
})(MakeOrderForm);