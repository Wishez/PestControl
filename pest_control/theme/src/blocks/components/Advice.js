import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import Title from './Title'; 
import Paragraph from './Paragraph';

const Advice = ({
  advice
}) => (
  <article className='adviceArticle'>
      <Title block='adviceArticle'
          text={advice.advice_title} />
      <div className='adviceArticle__text'>
        { ReactHtmlParser(advice.advice_text) }>
        <br />
        <Link className='adviceArticle__referToAllAdvice'
          to='/advice'
        >
          Ко всем статьям
        </Link>
      </div>      
  </article>
);

export default Advice;