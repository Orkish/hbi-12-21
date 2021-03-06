import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = evt => {
    const { value, name } = evt.target;

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            handleChange={this.handleChange}
            value={this.state.email} 
            label='Email'
            required 
          />
          <FormInput 
            name='password' 
            type='password' 
            handleChange={this.handleChange}
            value={this.state.password}
            label='Password'
            required 
          />
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle}> 
            {' '}
            Sign in with Google {''}
          </CustomButton>
        </form>
      </div>
    )
  }  
}

export default SignIn;