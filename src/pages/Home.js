import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { List } from 'semantic-ui-react'

const isLogged = gql`
  query isLoggedIn {
    loggedInUser {
      id
    }
  }
`

@graphql(isLogged, { name: 'user' })
class Home extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <List animated verticalAlign='middle'>
          <List.Item>
            <List.Content>
              <List.Header>Helen</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Christian</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Daniel</List.Header>
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default Home