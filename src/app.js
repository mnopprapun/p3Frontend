import React from 'react'
import UserSelection from './Components/UserSelection'

class App extends React.Component {

state = {
    users: []
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

 render(){
   return (
     <div className="User_Selection">
       <UserSelection userData={this.state.users}/>
     </div>
   )
 }
}

export default App;