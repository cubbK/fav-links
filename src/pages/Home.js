import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { List, Input, Accordion, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setAccordionIndex } from 'actions/homeActions'

const isLogged = gql`
  query isLoggedIn {
    loggedInUser {
      id
    }
  }
`
@connect(state => ({
  accordionActiveIndex: state.home.accordionActiveItem
}),
{
  setAccordionIndex
})
@graphql(isLogged, { name: 'user' })
class Home extends Component {

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { accordionActiveIndex } = this.props
    const newIndex = accordionActiveIndex === index ? -1 : index

    this.props.setAccordionIndex(newIndex)
  }

  render() {
    const  { accordionActiveIndex }  = this.props
    console.log(this.props)

    return (
      <div>
        <Input placeholder='Paste link' fluid size='massive' />
        <Accordion styled fluid>
          <Accordion.Title active={accordionActiveIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What is a dog?
        </Accordion.Title>
          <Accordion.Content active={accordionActiveIndex === 0}>
            content 1
          </Accordion.Content>

          <Accordion.Title active={accordionActiveIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' />
            What kinds of dogs are there?
        </Accordion.Title>
          <Accordion.Content active={accordionActiveIndex === 1}>
            content 1
          </Accordion.Content>

          <Accordion.Title active={accordionActiveIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown' />
            How do you acquire a dog?
        </Accordion.Title>
          <Accordion.Content active={accordionActiveIndex === 2}>
            content 2
          </Accordion.Content>
        </Accordion>
      </div>
    )
  }
}

export default Home