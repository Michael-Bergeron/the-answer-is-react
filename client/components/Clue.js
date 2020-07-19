import React from 'react';
import PropTypes from 'prop-types';

const Clue = ({selected, selectQuestion, answered, clue, answeredQuestion}) => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  return (
    <>
      {selected && <div id = 'question' onClick = {answeredQuestion} >{clue.question}</div>}
      {!selected && !answered && <div className = 'clueValue' onClick = {() => selectQuestion(clue)}>${clue.value}</div>}
    </>
  );
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clue: PropTypes.object
};

export default Clue;
