import React, { Component } from 'react'
import CalculatorTitle from './CalculatorTitle'
import OutputScreen from './OutputScreen'
import Button from './Button'


class Calculate extends Component {

  constructor() {
    super();
    
  
    // set our default state
    this.state = {
    question: '',
    answer: '',
    question_input: '',
    answer_input: ''
    }
  
    // Bind our handleClick method (sets 'this' explicitly
    // to refer to this component) We did this because 'this'
    // would refer to the source of the click events
    this.handleClick = this.handleClick.bind(this);
  }

  
  
  // our method to handle all click events from our buttons
handleClick(event){

  

  // get the value from the target element (button)
  const value = event.target.value;
  
  console.log(value)
  
  switch (value) {
    case '=': {
  
    // if it's an equal sign, use the eval module
    // to evaluate the question ,convert the answer
    // (in number) to String
    if (this.state.question!=='')
    {
      var ans='';
        try
        {
          ans = eval(this.state.question);
        }
        catch(err)
        {
          this.setState({answer: "Math Error"});
        }
        if (ans===undefined)
          this.setState({answer: "Math Error"});
  
        // update answer in our state.
        else
          this.setState({ answer: ans , question_input: '',
          question: ''});
        break;
      } break;
    }
    case 'Clear': {
  
    // if it's the Clears sign, just clean our
    // question and answer in the state
    this.setState({ question: '', answer: '' });
    break;
    }
  
    case 'Delete': {
    var str = this.state.question;
      str = str.slice(0,str.length-1);
      this.setState({question: str});
      break;
    }
  
  default: {
  
    // for every other command, update the answer in the state
    this.setState({ question: this.state.question += value,
    question_input:this.state.question,
    answer_input: ans})
    break;
    }
    event.preventdefault()
  }
  }
  
  render() {
    return (
      <div>
        <div className="frame">
      <CalculatorTitle value={"React Calc App"} />
      <div className="main-calc">
        <OutputScreen question_inp = {this.state.question_input}
        answer_inp = {this.state.answer}   />
        <div className='container-buttonz'>
        <div className="buttonz">
          <div className="button-row">
            < Button
              handleClick = {this.handleClick}
               label={'Clear'}/>
            < Button
              handleClick = {this.handleClick}
               label={'Delete'}/>
            < Button
              handleClick = {this.handleClick}
               label={'.'}/>
            < Button
              handleClick = {this.handleClick}
               label={'/'}/>
          </div>
          <div className="button-row">
            < Button
              handleClick = {this.handleClick}
               label={'7'}/>
            < Button
              handleClick = {this.handleClick}
               label={'8'}/>
            < Button
              handleClick = {this.handleClick}
               label={'9'}/>
            < Button
              handleClick = {this.handleClick}
               label={'*'}/>
          </div>
          <div className="button-row">
            < Button
              handleClick = {this.handleClick}
               label={'4'}/>
            < Button
              handleClick = {this.handleClick}
               label={'5'}/>
            < Button
              handleClick = {this.handleClick}
               label={'6'}/>
            < Button
              handleClick = {this.handleClick}
               label={'-'}/>
          </div>
          <div className="button-row">
            < Button
              handleClick = {this.handleClick}
               label={'1'}/>
            < Button
              handleClick = {this.handleClick}
               label={'2'}/>
            < Button
              handleClick = {this.handleClick}
               label={'3'}/>
            < Button
              handleClick = {this.handleClick}
               label={'+'}/>
          </div>
          <div className="button-row">
            < Button
              handleClick = {this.handleClick}
               label={'0'}/>
            < Button
              handleClick = {this.handleClick}
               label={'='}/>
            </div>
        </div>
        </div>
      </div>
      
    </div>

      </div>
    )
  }
}

export default Calculate;
