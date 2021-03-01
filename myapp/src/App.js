import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


function Window() {
  var myJSON={
    // x:1,y:{z:[false,null,""]}  权威指南里JSON语法
    JSON1:{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    JSON2:{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    JSON3:{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    JSON4:{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    JSON5:{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    JSON6:{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  };

  const myArray=[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

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
    <ProductsList />
    </div>
  );
}

function SearchBar(props){
  return (
    <input type="text" value={props.value}/>
  );
}

function LineText(props){
  const listItems = myArray.map((number) =>
  <li>{number}</li>
);

  return (
    <li></li>
  );
}

function ProductsList(props){
  return (
    <div>
    <tr>
      <th><strong>Name</strong></th>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>    
      <th><strong>Price</strong></th>
    </tr>
    <div>
      <strong>Sporting Goods</strong>
    </div>
    <ul>{LineText}</ul>
    <div >
      <strong>Electronics</strong>
    </div>
    <ul>{LineText}</ul>
    </div>
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
