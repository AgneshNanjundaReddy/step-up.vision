import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const dashboard = props => {
    return (
        <div className='dashboard'>
            <div className='count'>Total number of registraed users: {props.userCount}</div> 
            <div> <Link to="/registration">Click here</Link> to Register new user</div>
            {props.userCount > 0 && <div> <Link to="/users">Click here</Link> to view registered users</div>}
            
        </div>
    );
}

const mapStateToProps = state => {
    return {userCount: state.reducer.userList.length};
};

export default connect(mapStateToProps)(dashboard);