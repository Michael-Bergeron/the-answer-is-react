import React, { Component } from 'react';
import Gameboard from './Gameboard';
import { categories } from '../../testdata';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0,
      categoriesArray: ['test'],
    };
  }
  componentDidMount() {
    let categoriesArray = [];
    fetch('http://jservice.io/api/categories?&count=5')
      .then(res => res.json())
      .then(results => {
        results.forEach(cat => {
          fetch(`http://jservice.io/api/clues?&category=${cat.id}`)
          .then(r => r.json())
          .then(clueResult => {

          })
        })
      })
    this.state.results.forEach((cat) => {
      categoriesArray.push(cat.title)
    }) 
    this.setState({categoriesArray})
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }

  selectQuestion(obj) {
    let newQuestions = this.state.answeredQuestions;
    newQuestions.push(obj.id);
    this.setState({currentQuestion: obj, answeredQuestions: newQuestions});
  }
  
  answeredQuestion() {
    this.setState({currentQuestion: {}});
  }

  render() {
    return (
      <div id='app'>
      <Gameboard selectQuestion={this.selectQuestion.bind(this)} 
                  currentQuestion = {this.state.currentQuestion} 
                  answeredQuestion ={this.answeredQuestion.bind(this)}
                  categories={this.state.results} 
                  answeredQuestions = {this.state.answeredQuestions} 
                  />
        {/* Gameboard */}
        {/* Scoreboard */}
        {/* Response */}
      </div>
    );
  }
}
