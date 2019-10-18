import React from 'react';

export default props => {
    const { change, phone, name } = props;

    return (
        <div className="page-one">
            <div className="input-group"><span className="label"> Name: </span><input type="text" name="name" value={name} onChange={change}></input></div>
            <div className="input-group"><span className="label"> phone: </span> <input type="text" name="phone" value={phone} onChange={change}></input></div>
        </div>
    );
}