import React from 'react';

export default props => {
    const { change, page, email, pass, userName} = props;
    const disabled = page !== 1;

    return (
        <div className="page-one">
            <div className="input-group"> <span>User Name: </span><input type="text" name="userName" value={userName} onChange={change} disabled={disabled}></input></div>
            <div className="input-group"><span>Email: </span><input type="text" name="email" value={email} onChange={change} disabled={disabled}></input></div>
            <div className="input-group"><span>Password: </span><input type="password" name="pass" value={pass} onChange={change} disabled={disabled}></input></div>
        </div>
    );
}