import React from 'react';
import Card from 'react-bootstrap/Card';


class Results extends React.Component {

renderTableData(){
	return this.props.results.map((record, index)=> {
		const {game_id, id, result, user_id} = record
		return (
			<tr key={game_id}>
				{/* <td>{id}</td> */}
				<td>{user_id}</td>
				<td>{result}</td>
			</tr>
		)
	})
}

    render() {

        return (
            <div className='card'>
                <card class="card-body">
                    <h5 class="card-title">Player (player) Record</h5>
					<table>
					  {this.renderTableData()}
					  </table>
                </card>
          </div>
        );
    }
}
export default Results
