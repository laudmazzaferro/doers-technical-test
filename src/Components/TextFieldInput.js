import React from 'react';
import TextField from '@material-ui/core/TextField';
import './../scss/TextFieldInput.scss'

class TextFieldInput extends React.Component {
  constructor(props){
    super(props);
    this.getInputValue= this.getInputValue.bind(this);
  }

  getInputValue(event){
    const {value}= event.currentTarget
    this.props.getInputSpell(value)
  }

  render(){
  return (
    <form   noValidate autoComplete="off" className="Text__form">
      <TextField className="Text__form" id="filled-basic" label="Search spell" variant="filled" onChange={this.getInputValue}  />
    </form>
  );
  }
}

export default  TextFieldInput ;