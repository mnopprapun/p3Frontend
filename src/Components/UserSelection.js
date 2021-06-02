import React from 'react'


class UserSelection extends React.Component {

    state = {
        player: ""
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addPlayer(this.state)
    }

    onNewPlayer = event => {
        this.setState({
            player: event.target.value
        })
    }



    render() {
        let players = this.props
        let optionItems = players.users.map((user) =>
            <option key={user.name}>{user.name}</option>);

        return (
            <div className="card_container">
                <div className="card">
                    <h3>SELECT USER</h3>
                    <select>
                        {optionItems}
                    </select>
                </div>

                <div className="new_player_form">
                    <form onSubmit={this.onSubmit}>
                        <input type="text" name="name" placeholder="Enter New Player..." className="imput_text" onChange={this.onNewPlayer} value={this.state.player} />
                        <input type="submit" name="submit" value="Add New Player" className="submit" />
                    </form>
                </div>
            </div>




        );
    }
}
export default UserSelection