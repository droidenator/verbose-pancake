import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe/Recipe';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [
        {
          id: 1,
          name: `Korean Ground Beef`,
          rating: 5,
          tags: [
            { id: 1, value: 'easy' },
            { id: 2, value: 'leftovers' },
            { id: 3, value: 'beef' },
            { id: 4, value: 'rice' }
          ],
          ingredients: [
            { id: 1, value: 'Ground Beef', qty: 1, unit: 'pounds' },
            { id: 2, value: 'Soy Sauce', qty: .75, unit: 'cups' },
            { id: 3, value: 'Green Onions', qty: 1, unit: 'cups', preparation: 'chopped' },
            { id: 4, value: 'Cucumber', qty: 1, unit: 'whole', preparation: 'peeled and sliced' },
            { id: 5, value: 'Carrot', qty: 2, unit: 'whole', preparation: 'grated' },
            { id: 6, value: 'Rice Vinegar', qty: 1, unit: 'cups'}
          ],
          instructions: [
            'Place sliced cuumbers and grated carrots in bowl with vinegar and marinate in the fridge for 1-4 hours',
            'Over medium heat, cook ground beef with green onions and soy sauce',
            'Do some other stuff and then it is done and amazing'
          ]
        },
        {
          id: 2,
          name: `Kung Fu Penne Pasta`,
          rating: 4,
          tags: [
            { id: 1, value: 'easy' },
            { id: 2, value: 'leftovers' },
            { id: 5, value: 'pasta' }
          ],
          ingredients: [
            { id: 7, value: 'Italian Sausage, spicy', qty: '.5', unit: 'package' },
            { id: 8, value: 'Penne pasta', qty: 1, unit: 'package' },
            { id: 9, value: 'Classico Sun-dried Tomato Alfredo sauce', qty: 1, unit: 'package' },
            { id: 10, value: 'Green bell pepper', qty: 1, unit: 'whole', preparation: 'diced' },
            { id: 11, value: 'Onion', qty: .5, unit: 'whole', preparation: 'diced' }
          ],
          instructions: [
            `Boil water for pasta. Salt lighlty. Add pasta when water has come to a boil.`,
            `Sautee onions and green bell peppers in olive oil over medium heat until soft`,
            `Add Italian sauage and sautee until cooked`,
            `Heat sauce in sauce pan`,
            `Add Italian sausage, onions, and peppers to sauce and warm`,
            `Drain pasta and add to pasta sauce and serve`
          ]
        }
      ]
    }
  }
  render() {
    let recipes = this.state.recipes.reduce(function(all, item) {
      all.push(<Recipe key={ item.id } recipe={ item }></Recipe>);
      return all;
    }, []);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Cool!
        </p>
        { recipes }
      </div>
    );
  }
}

export default App;
