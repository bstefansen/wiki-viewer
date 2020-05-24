import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    // create method to fetch API with submit data
    
    /*this.setState({
      submit: this.state.input,
      input: ""
    });
    */
  }

  render() {
    return (
      <div className="App">
        <h1>Enter a title to search</h1>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder="google" 
          value={this.state.input}
          onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
        <h2>{this.state.submit}</h2>
      </div>
    );
  }
}

export default App;
