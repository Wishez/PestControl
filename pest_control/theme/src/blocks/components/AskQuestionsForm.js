import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import { Image } from 'semantic-ui-react';

import Title  from './Title';
import RenderController from './RenderController';
import {
	required,
	email
} from './../constants/validation.js';

import ElementButton from './ElementButton';
import TextareaController from './TextareaController';
import Paragraph from './Paragraph';

const AskQuestionsForm = ({ 
	handleSubmit,
	onSubmitAskQuestionsForm,
	message,
	isQuestionAsked,
	askQuestionAgain
}) => (
	<div className='askQuestionsFormWrapper'>
		 {!isQuestionAsked ? 
		 	<form 
			id='askQuestionsForm' 
			className='askQuestionsForm'
			method='post'
			onSubmit={handleSubmit(onSubmitAskQuestionsForm.bind(this))}>
				<Title block='askQuestionsForm'
					text='Обратный вызов' />
				<Field 
					name='name'
					type='text'
					block='askQuestionsFormController'
					component={RenderController}
					label='Ф.И.О:'
					placeholder='Дженкинс Спок Спокович'
					maxLength='150'
					validate={[ required ]}
				/>
				<Field 
					component={RenderController}
					name='email'
					label='E-mail:'
					type='email'
					block='askQuestionsFormController'
					placeholder='8 (926) 370-78-12'
					maxLength='24'
					validate={[ required, email ]}
				/>
				<Field 
					component={TextareaController}
					name='phone'
					label='Вопрос:'
					block='askQuestionsFormController'
					placeholder='8 (926) 370-78-12'
					maxLength='24'
					validate={[ required, email ]}
				/>
				{message ? 
					<div className='errorContainer'>
						<strong className='askQuestionsFormController__error'>
							{message}
						</strong>
					</div> : ''
				}
				<ElementButton 
					type='submit'
					block='askQuestionsFormButton' 
					iconName='send'
					name='Задать вопрос' 
					number='9'
				/>
			</form> :
			<Paragraph block='askQuestionsFormWrapper'
				modifier='successMessage'
				text={message}>
				<ElementButton 
					block='askQuestionsFormButton' 
					iconName='send'
					name='Спросить ещё' 
					number='10'
					onClick={askQuestionAgain}
				/>
			</Paragraph>
		 }
	</div>
);

export default reduxForm({
  form: 'askQuestionsForm'
})(AskQuestionsForm);