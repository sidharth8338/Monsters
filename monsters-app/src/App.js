import React from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list'

class App extends React.Component {
  state = {
    monsters: [],
    searchText: ''
  }
  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    this.setState({
      monsters: users
    })
  }
  render() {
    const { monsters, searchText } = this.state
    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchText.toLowerCase())
    })
    return (
      <div className="App">
        <h1 className="my-title">Monsters Rolodex</h1>
        <input
          type="text"
          className="my-input"
          placeholder="search monster"
          onChange={e => this.setState({ searchText: e.target.value })}
        />
        <Cardlist monsters={filteredMonster} />
      </div>
    )
  }
}

export default App;
