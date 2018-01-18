import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import CardCenter from 'components/CardCenter'
import ContainerFluid from 'components/ContainerFluid'
import { Button, Label } from 'semantic-ui-react'
import { Form, Input } from 'formsy-semantic-ui-react'

import styles from './Signup.module.styl'

const SIGNUP_USER_MUTATION = gql`
  mutation SignupUser($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
      id
      token
    }
  }
`

@graphql(SIGNUP_USER_MUTATION, { name: 'signupUser' })
class Signup extends Component {
  constructor () {
    super()
    this.state = {
      isSubmitDisabled: true
    }
  }

  createUser = async (email, password) => {

    try {
      const response = await this.props.signupUser({ variables: { email, password } })
      localStorage.setItem('graphcoolToken', response.data.signupUser.token)
      this.props.history.push('/')
    } catch (e) {
      console.error('An error occurred: ', e)
      this.props.history.push('/')
    }

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
            <Button type='submit' fluid positive disabled={ this.state.isSubmitDisabled }>Register</Button>
          </Form>
        </CardCenter>
      </ContainerFluid>
    )
  }
}

export default Signup