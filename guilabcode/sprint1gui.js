import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//code for the inventory page where we can add items to our inventory
const App = () => <Inventory />;

class Inventory extends React.Component {
  state = {
    names: ["Water Bottle", "Glasses"]
  };

  addName(name) {
    this.setState(prevState => {
      prevState.names.push(name);
      return prevState;
    });
  }

  render() {
    return (
      <>
        <h1 id = "header">Inventory</h1>
        <InventoryItems names={this.state.names} />
        <Parent onNameAdded={name => this.addName(name)} />
      </>
    );
  }
}

const InventoryItems = props => (
  <>
    <h3 id = "stock">In Stock:</h3>
    <ul id ="list">
      {props.names.map(name => (
        <li>{name}</li>
      ))}
    </ul>
  </>
);

const Parent = props => (
  <>
    <Child {...props} />
  </>
);

class Child extends React.Component {
  state = {
    name: ""
  };

  render() {
    return (
      <>
       <p> <br /> </p>
       <label for="name">Add an item to the inventory:</label>
        <br />
        <input
          id="name"
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.props.onNameAdded(this.state.name)}>
          Add
        </button>
      </>
    );
  }
}

//may have to make this a seperate file???
//begin the start of the login page coding, similar to inventory page code
//where you can add accounts, just like you can add items to the Inventory
//except preferable we cant see the accounts because that data should be private
class Login extends React.Component{
state = {
  accounts :["user123","user#2"],
  passwords: ["qwerty","t3xas"]
};

addUsername() {
  this.setState(prevState => {
    prevState.accounts.push(account);
    return prevState;
  });
}
addPassword() {
  this.setState(prevState => {
    prevState.passwords.push(password);
    return prevState;
  });
}
render() {
  return (
    <>
    <h2>Login</h2>
    <label for = "usernameInput" id ="username" name = "username">Username:</label>
    <input id ="usernameInput" name = "usernameInput" type = "text"/>
    <label  for= "passwordInput" id ="password" name = "password">Password:</label>
    <input id ="passwordInput" name = "passwordInput" type = "text"/>

    </>
  );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
