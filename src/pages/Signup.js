import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import CardCenter from 'components/CardCenter'
import ContainerFluid from 'components/ContainerFluid'
import { Button, Label } from 'semantic-ui-react'
import { Form, Input } from 'formsy-semantic-ui-react'

import styles from './Signup.module.styl'


const SIGNUP_USER = gql`
  mutation SignupUser($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
      id
      token
    }
  }
`
const AUTH_USER = gql`
  mutation authenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  } 
`

@compose(
  graphql(SIGNUP_USER, { name: 'signupUser' }),
  graphql(AUTH_USER, { name: 'authUser' })
)
class Signup extends Component {
  constructor () {
    super()
    this.state = {
      isSubmitDisabled: true,
      error: null,
      submitLoading: false
    }
  }

  createUser = async (model) => {

    try {
      this.setState({
        submitLoading: true
      })
      const response = await this.props.signupUser({ variables: { email: model.email, password: model.password } })
      localStorage.setItem('graphcoolToken', response.data.signupUser.token)
      this.props.history.push('/')
    } catch (e) {
      console.log(e)
      this.setState({
        error: e,
        submitLoading: false
      })
      
    }

  }

  createUserTest = (model, resetForm, invalidateForm) => {
    console.log(model)
  }

  enableSubmitButton = () => {
    this.setState({
      isSubmitDisabled: false
    })
  }

  disableSubmitButton = () => {
    this.setState({
      isSubmitDisabled: true
    })
  }

  render() {
    const errorLabel = <Label color="red" pointing />

    return (
      <ContainerFluid>
        <CardCenter header='Signup'>
          <Form
            onValid={ this.enableSubmitButton }
            onInvalid={ this.disableSubmitButton }
            onValidSubmit = { this.createUser }
          >
            <Form.Input
              name="email"
              label="Email"
              validations="isEmail"
              validationErrors={{ isEmail: 'Email not valid' }}
              errorLabel={ errorLabel }
              required
            />
            <Form.Input
              name="password"
              label="Password"
              validations="minLength:5"
              validationErrors={{ minLength: 'Min 4 characters' }}
              errorLabel={ errorLabel }
              instantValidation
              type="password"
              required
            />
            <Button
              type='submit' 
              fluid 
              positive 
              disabled={ this.state.isSubmitDisabled }
              loading={ this.state.submitLoading }
            >
              Register
             </Button>
          </Form>
          <div className={ styles.error }>
            { this.state.error && this.state.error.toString() }
          </div>
          
        </CardCenter>
      </ContainerFluid>
    )
  }
}

export default Signup