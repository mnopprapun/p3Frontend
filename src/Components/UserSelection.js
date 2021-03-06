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

    onNewPlayer = e => {
        this.setState({
            player: e.target.value
        })
    }

    setUser = event => {
        event.preventDefault()
        this.setState({
            playing: event.target.value
        })
    }

    render() {
        let players = this.props
        let optionItems = players.users.map((user) =>
            <option value={user.name} key={user.name}>{user.name}</option>);

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

                    <select onChange={this.setUser} name='selector'>
                    <option></option>
                        {optionItems}
                    </select>

                </div>
            </div>

        );
    }
}
export default UserSelection
