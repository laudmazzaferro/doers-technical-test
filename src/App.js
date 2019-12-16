import React from 'react';
import { fetchSpells } from './services/fetchSpells';
import CardList from './Components/CardList';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.scss';
import TextFieldInput from './Components/TextFieldInput';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      spells:null
    }
    this.getSpells = this.getSpells.bind(this);
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
  render(){
    const {spells} = this.state;
    return(
    <div className="App">
      <header className="App-header">
        holaa
      </header>
      {spells ?
      <div>
      <TextFieldInput></TextFieldInput>
      <CardList spells={spells}></CardList>
      </div>
         : 
      <CircularProgress color="secondary" />}
    </div>
    );
  }
}

export default App;
