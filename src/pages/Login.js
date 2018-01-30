import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import CardCenter from 'components/CardCenter'
import ContainerFluid from 'components/ContainerFluid'
import { Button, Label } from 'semantic-ui-react'
import { Form, Input } from 'formsy-semantic-ui-react'

const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

@graphql(AUTHENTICATE_USER, { name: 'authUser' })
class Login extends Component {
  constructor() {
    super()
    this.state = {
      isSubmitDisabled: true
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

  loginUser = (model, resetForm, invalidateForm) => {
    console.log(model, resetForm, invalidateForm)
  }

  render() {
    const errorLabel = <Label color="red" pointing />

    return (
      <ContainerFluid>
        <CardCenter header='Login'>
          <Form
            onValid={this.enableSubmitButton}
            onInvalid={this.disableSubmitButton}
            onValidSubmit={this.loginUser}
          >
            <Form.Input
              name="email"
              label="Email"
              validations="isEmail"
              validationErrors={{ isEmail: 'Email not valid' }}
              errorLabel={errorLabel}
              required
            />
            <Form.Input
              name="password"
              label="Password"
              errorLabel={errorLabel}
              instantValidation
              type="password"
              required
            />
            <Button type='submit' fluid positive disabled={this.state.isSubmitDisabled}>Login</Button>
          </Form>
        </CardCenter>
      </ContainerFluid>
    )
  }
}

export default Login