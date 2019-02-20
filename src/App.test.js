import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('#fetchRestaurants() using Promises', () => {
  it('should load restaurants data', () => {
    let url = `http://opentable.herokuapp.com/api/restaurants?city=toronto&per_page=100`;
    return fetch(url).then(response => response.json())
      .then(data => {
        expect(data).toBeDefined()
        expect(data.total_entries).toEqual(321)
      })
  })
})

