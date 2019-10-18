import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SAVE_USER } from '../reducer';
import { withRouter } from 'react-router-dom';
import PageOne from './page-one-component';
import PageTwo from './page-two-component';

const initialState = {
    page: 1,
    email: '',
    name: '',
    phone:'',
    userName: '',
    pass: ''
};
const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/);

class Reg extends Component {
    state= {...initialState};

    change = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        const changed = {};
        changed[name] = value;

        this.setState(changed);
    }
    pageOneValidation = () => {
        const {userName, pass, email} = this.state;
        let error = '';

        if(!userName.length) error = "User Name Required";
        else if(!pass.length || pass.length < 8) error = "Password should have minimum 8 char";
        else if(!email.length || !emailRegex.test(email)) error = "Enter valid email";
        if(error.length)
            alert(error);
        else {
            this.setState({page:2})
        }
    }

    save = () => {
        const { page } = this.state;

        page === 1 && this.pageOneValidation();
        page === 2 && this.saveReg();
    }
    saveReg = () => {
        const { email, name, phone, userName, pass } = this.state;
        const userDetails = { name, phone, email, userName, pass };

        this.props.setReg(userDetails);
        this.props.history.push('/');
    }

    clear = () => {
        this.setState({...initialState});
    }

    render() {
        const { page, email, name, phone, userName, pass } = this.state;
        const props = { page, name, phone, email, userName, pass, change: this.change };
        const btnTxt = page === 1? 'Next': 'Save';

        return (
            <div className="reg-form">
                <PageOne {...props} />
                {
                    page === 2 && <PageTwo {...props} />
                }
                <Link to='/'>Back</Link>
                <button onClick={this.clear}>Clear</button>
                <button onClick={this.save}>{btnTxt}</button> 
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setReg: payload => dispatch({
            type:SAVE_USER,
            payload
        })
    }
}
export default withRouter(connect(null, mapDispatchToProps)(Reg));
