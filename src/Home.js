import logo from './logo.svg';
import './App.css';

import * as React from 'react';


function Home() {
  /*return (
    <div className="App">
      LaundryApp
    </div>
  );*/

  const [food, setFood] = React.useState('fruit');
  const [drink, setDrink] = React.useState('water');

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  };

  return (
    <div>
      <Dropdown
        label="What do we eat?"
        options={[
          { label: 'Fruit', value: 'fruit' },
          { label: 'Vegetable', value: 'vegetable' },
          { label: 'Meat', value: 'meat' },
        ]}
        value={food}
        onChange={handleFoodChange}
      />

      <Dropdown
        label="What do we drink?"
        options={[
          { label: 'Water', value: 'water' },
          { label: 'Beer', value: 'beer' },
          { label: 'Wine', value: 'wine' },
        ]}
        value={drink}
        onChange={handleDrinkChange}
      />

      <p>We eat {food}!</p>
      <p>We drink {drink}!</p>
    </div>
  );
}

//dropdown component
const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };

export default Home;