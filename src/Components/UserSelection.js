import React from 'react'


class UserSelection extends React.Component {

    state = {
        player: "",
        playing: ""
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addPlayer(this.state)
    }

    onNewPlayer = e=> {
        this.setState({
            player: e.target.value
        })
    }

    setUser = event => {
        this.setState({
            playing: event.target.value
        })
    }
    
    // secondSetUser = ({target:{value}})=>{
    //     this.setState({
    //         playing: {type:value}
    //         playing: ({type:value})
    //     })
    // }

    // trying to get the name picked int the slector to match the playing state that we created so we can refrence it later when setting new player scores



    render() {
        let players = this.props
        let optionItems = players.users.map((user) =>
            <option key={user.name}>{user.name}</option>);

        return (  

            
             <div>
             <div className="new_player_form">
                    <form onSubmit={this.onSubmit}>
                        <input type="text" name="name" placeholder="Enter New Player..." className="imput_text" onChange={this.onNewPlayer} value={this.state.player} />
                        <input type="submit" name="submit" value="Add New Player" className="submit" />
                    </form>
                </div>  
                 <div className="user_div">
                    <h3>SELECT USER</h3>
                    <select>
                        {optionItems}
                    </select>
                    <button className="selectUser" value={optionItems} onClick={this.setUser}>Select User</button>
                </div>           
            </div>
          
        );
    }
}
export default UserSelection
