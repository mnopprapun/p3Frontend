import React from 'react'
import Results from './Components/Results'
import UserSelection from './Components/UserSelection'

class App extends React.Component {

  state = {
    users: [],
    results: []
  }


  componentDidMount() {
    fetch('http://localhost:9292/Users')
      .then(res => res.json())
      .then(userData => this.usersData(userData.users))

      	fetch('http://localhost:9292/Results')
      		.then(res => res.json())
      		.then(resultsArray => this.resultsData(resultsArray.results))


  }

  usersData = (userData) => {
    this.setState({
      users: userData
    })
  }


	resultsData = (resultsData) => {
		this.setState({
			results: resultsData
		})
	}

  setUser = event => {
    this.setState({
        player: event.target.optionItems
    })
}

  addPlayer = (newPlayer) => {
    // console.log(this.state.users)
    let postOptions = {
      method: "POST",
      headers: {
        "Content-Type": 'appllication/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(newPlayer)
    }
    // console.log(postOptions)
    fetch('http://localhost:9292/Users', postOptions)
      .then(res => res.json())
      .then(addedPlayer => this.setState({ users: [...this.state.users, addedPlayer] }))
  }

  

  render() {
    return (
      <div className="User_Selection">
        <UserSelection users={this.state.users} addPlayer={this.addPlayer} />
        <div>
					<Results results={this.state.results} users={this.state.users} setUser={this.setUser}/>
				</div>
      </div>
    )
  }
}

export default App;
