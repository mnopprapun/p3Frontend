import React from 'react';



class Results extends React.Component {
	
	renderTableData(){

	return this.props.results.map((record, index)=> {
		const {game_id, id, result, user_name} = record
			return (
			<tr key={game_id}>
				{/* <td>{id}</td> */}
				<td>{user_name}</td>
				<td>{result}</td>
			</tr>
			 )
	})
}

    render() {

        return (
            <div className='card'>
                <card class="card-body">
                    <h5 class="card-title">Player Record</h5>
					<table>
					  {this.renderTableData()}
					  </table>
                </card>
          </div>
        );
    }
}
export default Results
