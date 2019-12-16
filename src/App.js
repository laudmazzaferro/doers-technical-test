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
        <header className="app_header">
          <h1 className="app__title">Harry Potter's Spells</h1>
        </header>
      {spells ?
      <div className="app_main">
      <TextFieldInput getInputSpell={this.getInputSpell}></TextFieldInput>
      <CardList spells={spells} inputSpell={inputSpell}></CardList>
      </div >
         : 
      <div className="app_main">
      <CircularProgress className="circular__progress" color="primary" />
      </div>
      }
    </div>
    );
  }
}

export default App;
