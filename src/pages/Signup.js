import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import CardCenter from 'components/CardCenter'
import ContainerFluid from 'components/ContainerFluid'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import styles from './Signup.module.styl'

const SIGNUP_USER_MUTATION = gql`
  mutation SignupUser($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
      id
      token
    }
  }
`

@reduxForm({
  // a unique name for the form
  form: 'signup'
})
@graphql(SIGNUP_USER_MUTATION, { name: 'signupUser' })
class Signup extends Component {

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

  render() {
    return (
      <ContainerFluid>
        <CardCenter header='Signup'>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <label>Password 2'nd time</label>
              <input placeholder="Password 2'nd time" />
            </Form.Field>
            <Button type='submit' fluid positive>Register</Button>
          </Form>
        </CardCenter>
      </ContainerFluid>
    )
  }
}

export default Signup