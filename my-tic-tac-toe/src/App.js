// import logo from './logo.svg';
import './App.css';
import React from 'react';

class MyGame extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOver: false,
      whoseTurn: "A",
      oneone: "none",onetwo: "none",onethree: "none",
      twoone: "none",twotwo: "none",twothree: "none",
      threeone: "none",threetwo: "none",threethree: "none"
    };
    this.handleOneOneClick = this.handleOneOneClick.bind(this);
    this.handleOneTwoClick = this.handleOneTwoClick.bind(this);
  }

  handleOneOneClick(){
    const whoseTurn = this.state.whoseTurn;
    if(whoseTurn === "A"){
      this.setState({
        oneone: "A",
        whoseTurn: "B"
      });
    }else{
      this.setState({
        oneone: "B",
        whoseTurn: "A"
      });
    }
  }

  handleOneOneClick(){
    const whoseTurn = this.state.whoseTurn;
    if(whoseTurn === "A"){
      this.setState({
        oneone: "A",
        whoseTurn: "B"
      });
    }else{
      this.setState({
        oneone: "B",
        whoseTurn: "A"
      });
    }
  }

  handleOneTwoClick(){
    const whoseTurn = this.state.whoseTurn;
    if(whoseTurn === "A"){
      this.setState({
        onetwo: "A",
        whoseTurn: "B"
      });
    }else{
      this.setState({
        onetwo: "B",
        whoseTurn: "A"
      });
    }
  }



  render(){
    // const oneone = this.state.oneone;
    return(
      <div>
        <div> 
          <table>
            <thead />
            <tbody>
              <tr>
                <td><LeftButtun leftButtonValue={this.state.oneone} onClick={this.handleOneOneClick}/></td>
                <td><LeftButtun leftButtonValue={this.state.onetwo} onClick={this.handleOneTwoClick}/></td>
                <td> <LeftButtun leftButtonValue={<LeftButtun />} onClick={this.handleOneTwoClick}/></td>
              </tr>
              <tr>
                <td><LeftButtun leftButtonValue={this.state.twoone} onClick={this.handleOneTwoClick}/></td>
                <td><LeftButtun leftButtonValue={this.state.twotwo} onClick={this.handleOneTwoClick}/></td>
                <td> <LeftButtun leftButtonValue={this.state.twothree} onClick={this.handleOneTwoClick}/></td>
              </tr>
              <tr>
                <td><LeftButtun leftButtonValue={this.state.threeone} onClick={this.handleOneTwoClick}/></td>
                <td><LeftButtun leftButtonValue={this.state.threetwo} onClick={this.handleOneTwoClick}/></td>
                <td> <LeftButtun leftButtonValue={this.state.threethree} onClick={this.handleOneTwoClick}/></td>
              </tr>
            </tbody>
          </table>
          <NextplayerOrWinner />
          <ul>
            <li><RightButtun rightButtonValue="Go to game start"/></li>
            <li><RightButtun rightButtonValue="Go to move #1"/></li>
            <li><RightButtun rightButtonValue="Go to move #2"/></li>
          </ul>
        </div>
      </div>  
    );
  }
}

function LeftButtun(props){
  return(
    <button onClick={props.onClick}>{props.leftButtonValue}</button>
  );
}

function NextplayerOrWinner(props){
  return(
    <div>
      <strong>Next player : A</strong>
    </div>
  );
}

function RightButtun(props){
  return(
    <button>{props.rightButtonValue}</button>
  );
}

function handleClick(props){
  const whoseTurn = this.state.whoseTurn;
  if(whoseTurn === "A"){
    this.setState({
      this.props.position: "A",
      whoseTurn: "B"
    });
  }else{
    this.setState({
      position: "B",
      whoseTurn: "A"
    });
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" /> 
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default MyGame;
