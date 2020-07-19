import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const Categories = ({categories, selectQuestion, currentQuestion, answeredQuestions, answeredQuestion}) => {
  return (
    <div id='categories' data-testid="categoryList">
      {categories.map(cat => {return (<Category key = {cat.title} title = {cat.title} 
                                            clues = {cat.clues}
                                            answeredQuestion ={answeredQuestion}
                                            selectQuestion = {selectQuestion} 
                                            currentQuestion = {currentQuestion} 
                                            answeredQuestions = {answeredQuestions}
                                            />)})}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;
