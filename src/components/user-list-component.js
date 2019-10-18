import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const renderNoUserMessage = () => {
    return (
        <div>
            No users found. Please click <Link to="/registration">click here</Link> to register new users
        </div>
    );
}
const renderUsers = props => {
    return (<table>
                <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
                {
                    //using array index for key as we have not assigned unique id to user
                    props.users.map( ( user,idx ) =>{
                        const { email, name, phone, userName } = user;

                        return (
                            <tr key={idx}>
                                <td>{userName}</td>
                                <td>{email}</td>
                                <td>{name}</td>
                                <td>{phone}</td>
                            </tr>
                        );
                    })
                }
            </table>);
}
const userListComp = props => {
    return (
        <div>
            {props.users.length > 0 && 
                    <div>
                        <Link to="/registration">Register New</Link>
                        {renderUsers(props)}
                        <Link to="/">Back</Link>
                    </div>
            }
            {props.users.length === 0 && renderNoUserMessage()}
        </div>
    );
}

const mapStateToProps = state => {
    return {users: state.reducer.userList};
};

export default connect(mapStateToProps)(userListComp);