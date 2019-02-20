import React, { Component } from 'react';
import './App.css';
import AppBar from './AppBar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RestaurantList from './RestaurantList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      names: ''
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  fetchRestaurants(e) {
    e.preventDefault();
    let url = `http://opentable.herokuapp.com/api/restaurants?city=${this.state.name}&per_page=100`;
    fetch(url).then(response => response.json()).then(names => this.setState({
      names
    }));
  }


  componentDidMount() {
    fetch('https://oauth-pp.opentable.com/api/v2/oauth/token', {
      method: 'POST',
      headers: {
        'Authorization': 'bearer 4b0e2253-1a34-4977-bb09-1c46a69aff50',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: { 'grant_type': 'client_credentials' }
    }).then(response => response.json()).then(response => console.log(response));
  }

  render() {
    return (
      <div className="App">

        <AppBar />
        <form noValidate autoComplete="off" onSubmit={(e) => this.fetchRestaurants(e)}>
          <TextField
            label="City Name"
            value={this.state.name}
            margin="normal"
            onChange={this.handleChange('name')}
          />
          <Button variant="contained" color="primary" onClick={(e) => this.fetchRestaurants(e)}>
            Search
          </Button>
        </form>
        <RestaurantList names={this.state.names} />
      </div >
    );
  }
}

export default App;
