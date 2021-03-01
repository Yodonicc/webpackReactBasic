import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


function Window() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  function onValueChange(e) {
    setValue(e.target.value);
  }

  const [value, setValue] = useState('Search...');
  return (
    <div>
    <SearchBar value={value} onChange={onValueChange}/>
    <input name="example" defaultValue="test" ref={register} />
    </div>
  );
}

function SearchBar(props){
  return (
    // <div>
    <input type="text" value={props.value}/>
    // <input type="text" />
    // </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default Window;
