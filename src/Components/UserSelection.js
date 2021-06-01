import React from 'react'



class UserSelection extends React.Component {
    render() {
        return (
            <div className="card-container">
                <div className="card" key={null} id={null}>
                <h3>SELECT USER</h3>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default UserSelection