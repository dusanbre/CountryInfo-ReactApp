import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Countries from './components/Countries'

class App extends Component {
  state = {
    countries: []
  }
  
  getCountry = async (e) => {
    const nameCounrty = e.target.elements.nameCounrty.value;
    e.preventDefault();
    const api_call = await fetch(`https://restcountries.eu/rest/v2/name/${nameCounrty}`)
    const data = await api_call.json()
    this.setState({ countries: data })
    console.log(this.state.countries)
    //console.log(nameCounrty)
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>County Search</h1>

        </header>
        <Form getCountry={this.getCountry}/>
        <Countries countries={this.state.countries}/>
      </div>
    );
  }
};

export default App;
