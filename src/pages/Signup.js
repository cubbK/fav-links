import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import FormCenter from 'components/FormCenter'

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

  createUser = async (email, password) => {
  
    try {
      const response = await this.props.signupUser({variables: {email, password}})
      localStorage.setItem('graphcoolToken', response.data.signupUser.token)
      this.props.history.push('/')
    } catch (e) {
      console.error('An error occurred: ', e)
      this.props.history.push('/')
    }
  
  }

  render () {
    return (
      <div>
        signup
        <FormCenter header='Signup'>
          123
        </FormCenter>
      </div>
    )
  }
}

export default Signup