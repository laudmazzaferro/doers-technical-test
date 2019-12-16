import React from 'react';
import { fetchSpells } from './services/fetchSpells';
import TextFieldInput from './Components/TextFieldInput';
import CardList from './Components/CardList';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.scss';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      spells:null,
      inputSpell:''
    }
    this.getSpells = this.getSpells.bind(this);
    this.getInputSpell = this.getInputSpell.bind(this);
  }
  componentDidMount(){
    this.getSpells();
  }
  getSpells(){
    fetchSpells('https://www.potterapi.com/v1/spells?key=$2a$10$W4Y/r9zaxMfJVdSv/V9U3.6ETMSveALxjAQy9duMzjpaISSQbU8ty')
    .then(data=>{
      this.setState({
        spells:data
      })
    })
  }

  getInputSpell(value){
    this.setState({
      inputSpell:value
    })
  };

  render(){
    const {spells , inputSpell} = this.state;
    return(
    <div className="App">
      <header className="App-header">
        holaa
      </header>
      {spells ?
      <div>
      <TextFieldInput getInputSpell={this.getInputSpell}></TextFieldInput>
      <CardList spells={spells} inputSpell={inputSpell}></CardList>
      </div>
         : 
      <CircularProgress color="secondary" />}
    </div>
    );
  }
}

export default App;
