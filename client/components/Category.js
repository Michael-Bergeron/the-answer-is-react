import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue';

const Category = ({title, selectQuestion, currentQuestion, answeredQuestions, clues, answeredQuestion}) => {
  return (
    <div className='category' data-testid="category">
      <div className = 'categoryTitle'>{title}</div>
      {clues.map(clue => { return (
        <>
          {answeredQuestions.includes(clue.id) ? (<div className = 'clueValue'></div>) : (

          <Clue key = {clue.id} 
            answeredQuestion ={answeredQuestion}
            clue = {clue} 
            selected = {false}
            answered = {false}
            selectQuestion = {selectQuestion}
            />
          )

          }
          </>
            )
          }
        )
      }
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
