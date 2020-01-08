import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    
    this.setState({ email: '', password: ''});
  }

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({ [name]: value})
  }


  render() {

    return (
      <div>

      </div>
    )
  }
}