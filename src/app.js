import React from 'react'
import Results from './Components/Results'
import UserSelection from './Components/UserSelection'

class App extends React.Component {

  state = {
    users: { users: [] },
    results: {results: []}
  }


  componentDidMount() {
    fetch('http://localhost:9292/Users')
      .then(res => res.json())
      .then(userData => this.usersData(userData))

  }

  usersData = (userData) => {
    this.setState({
      users: userData
    })
  }

  componentDidMount() {
		fetch('http://localhost:9292/Results')
			.then(res => res.json())
			.then(resultsArray => this.resultsData(resultsArray))
	}

	resultsData = (resultsData) => {
		this.setState({
			results: resultsData
		})
	}


  addPlayer = (newPlayer) => {
    let postOptions = {
      method: "POST",
      headers: {
        "Content-Type": 'appllication/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(newPlayer)
    }
    fetch('http://localhost:9292/Users', postOptions)
      .then(res => res.json())
      .then(addedPlayer => this.setState({ users: [...this.state.users, addedPlayer] }))
  }

  render() {
    return (
      <div className="User_Selection">
        <UserSelection users={this.state.users} addPlayer={this.addPlayer} />
        <div>
					<Results results={this.state.results}/>
				</div>
      </div>
    )
  }
}

export default App;