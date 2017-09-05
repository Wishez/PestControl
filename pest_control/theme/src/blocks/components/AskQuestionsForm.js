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
					text='У вас есть вопрос?' />
				<Field 
					name='author_name'
					type='text'
					block='askQuestionsFormController'
					component={RenderController}
					label='Ф.И.О:'
					placeholder='Джон Галт Артурович'
					maxLength='150'
					validate={[ required ]}
				/>
				<Field 
					component={RenderController}
					name='email'
					label='E-mail:'
					type='email'
					block='askQuestionsFormController'
					placeholder='crowdedDrawer@mail.ru'
					maxLength='100'
					validate={[ required, email ]}
				/>
				<Field 
					component={TextareaController}
					name='question'
					label='Вопрос:'
					block='askQuestionsFormController'
					placeholder='Кто такой Джон Галт?'
					maxLength='350'
					validate={[ required ]}
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