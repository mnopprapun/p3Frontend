import React from 'react'
import UserSelection from './Components/UserSelection'

class App extends React.Component {

state = {
    users: {users :[]}
}


componentDidMount() {
    fetch('http://localhost:9292/Users')
      .then(res => res.json())
      .then(userData => this.handleData(userData))
  }

  handleData = (userData) => {
    this.setState({
      users: userData
    })
  }

  addPlayer = (newPlayer) => {
    let postOptions = {
      method: "POST",
      headers :{
        "Content-Type": 'appllication/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(newPlayer)
    }
    fetch('http://localhost:9292/Users', postOptions)
    .then(res=>res.json())
    .then(addedPlayer => this.setState({users:[...this.state.users, addedPlayer]}))
  }

 render(){
   return (
     <div className="User_Selection">
       <UserSelection users={this.state.users} addPlayer={this.addPlayer}/>
     </div>
   )
 }
}

export default App;