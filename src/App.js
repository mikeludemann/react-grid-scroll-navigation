import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GridScrollNavigation, GridScrollNavigationElements } from './components/grid-scroll-navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GridScrollNavigation colors={{
        0: "#867100",
        1: "#7F4200",
        2: "#99813D",
        3: "#40FEFF",
        4: "#14CC99",
        5: "#00BAFF",
        6: "#0082B2",
        7: "#B25D7A",
        8: "#00FF17",
        9: "#006B49",
        10: "#00B27A",
        11: "#996B3D",
        12: "#CC7014",
        13: "#40FF8C",
        14: "#FF3400",
        15: "#ECBB5E",
        16: "#ECBB0C",
        17: "#B9D912",
        18: "#253A93",
        19: "#125FB9",
      }}>
        <GridScrollNavigationElements linkID="fish" status={true}>
          Fish
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="meat" status={false}>
          Meat
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="salad" status={false}>
          Salad
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="milkshake" status={false}>
          Milkshake
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="chicken" status={false}>
          Chicken
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="veal" status={false}>
          Veal
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="duck" status={false}>
          Duck
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="seafood" status={false}>
          Seafood
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="turkey" status={false}>
          Turkey
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="bacon" status={false}>
          Bacon
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="coffee" status={false}>
          Coffee
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="bread" status={false}>
          Bread
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="muesli" status={false}>
          Muesli
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="juice" status={false}>
          Juice
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="tea" status={false}>
          Tea
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="ric`" status={false}>
          Rice
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="burger" status={false}>
          Burger
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="donuts" status={false}>
          Donuts
        </GridScrollNavigationElements>
        <GridScrollNavigationElements linkID="ice-cream" status={false}>
          Ice Cream
        </GridScrollNavigationElements>
      </GridScrollNavigation>
    </div>
  );
}

export default App;
