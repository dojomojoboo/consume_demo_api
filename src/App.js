import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {} // Initialize todos as an object
    }
  }

  API_URL = "https://jsonplaceholder.typicode.com/";

  componentDidMount() {
    this.refreshTeams();
  }

  async refreshTeams() {
    fetch(this.API_URL + "todos/1")
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data })
      })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is the web api data from the demo site https://jsonplaceholder.typicode.com/<hr></hr>
            <b>{todos.title}</b>{todos.id}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
