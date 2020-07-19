import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';
import Clue from './Clue';

const Gameboard = ({ selectQuestion, currentQuestion, categories, answeredQuestions, answeredQuestion}) => {
  return (
    <>
      {Object.keys(currentQuestion).length ? (<Clue selected = {true}
                                                    selectQuestion = {selectQuestion}
                                                    answeredQuestion ={answeredQuestion}
                                                    answered = {false}
                                                    clue = {currentQuestion}
                                                    />
                                                    ) : (
      <div data-testid="gameboard" id={currentQuestion.question ? 'question' : 'gameboard'}>
        <Categories selectQuestion= {selectQuestion} 
                    currentQuestion= {currentQuestion} 
                    answeredQuestion ={answeredQuestion}
                    categories= {categories} 
                    answeredQuestions = {answeredQuestions} 
                    />
      </div>
      )}
    </>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
