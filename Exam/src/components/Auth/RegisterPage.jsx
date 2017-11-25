import React, { Component } from 'react';
import Input from '../common/Input';
import { withRouter } from 'react-router-dom';
import { register } from '../../api/remote';
import toastr from 'toastr';

 class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: '',
            error:false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

   async onSubmitHandler(e) {
        e.preventDefault();
        if(this.state.password!==this.state.repeat){
            this.setState({
                error:{
                    message:'Check form for errors',
                    errors:{
                        repeat:"Passwords don't match"
                    }
                }
            })
            return;
        }
        //4 digits
        if(this.state.password.length<=3){
            this.setState({
                error:{
                    message:'Check form for errors',
                    errors:{
                        repeat:"Passwords must be at least 4 characters"
                    }
                }
            })
            return;
        }
       const res=await  register(this.state.name, this.state.email, this.state.password);
        if(!res.success){
            this.setState({error:res})
            toastr.error('Registration Error!')
            return
        }
        toastr.success('Successfully register!')
        
        // this.props.history.push('year/2018')
    }

    render() {
        let errors = null;
        if (this.state.error) {
            errors = (
                <div>
                    <h2 className="errorMessage">{this.state.error.message}</h2>
                    {Object.keys(this.state.error.errors).map(k => {
                        return <p key={k}>{this.state.error.errors[k]}</p>;
                    })}
                </div>
            );
        }
        return (
            <div className="container">
            {errors}
                <h1>Register</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <Input
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        label="Name"
                    />
                    <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                        label="E-mail"
                    />
                    <Input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        label="Password"
                    />
                    <Input
                        name="repeat"
                        type="password"
                        value={this.state.repeat}
                        onChange={this.onChangeHandler}
                        label="Repeat password"
                    />
                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
            </div>
        );
    }
}
export default withRouter(RegisterPage)