import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { List, Input, Accordion, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setAccordionIndex } from 'actions/homeActions'
import { map } from 'ramda'

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

  getAccordionPiece = (value, i) => {
    const  { accordionActiveIndex }  = this.props
    console.log(value, i)
    return[
      <Accordion.Title active={accordionActiveIndex === 0} index={0} onClick={this.handleClick} key={value} >
        <Icon name='dropdown' />
        What is a dog?
      </Accordion.Title> ,
      <Accordion.Content active={accordionActiveIndex === 0} key={value + 'content'}>
        content 1
      </Accordion.Content>
    ]
  }

  getAccordion = (arr) => {
    return(
      <Accordion styled fluid>
        { map(this.getAccordionPiece, arr) }
      </Accordion>
    )
  }

  render() {
    
    
    const testArr = [
      'https://xkcd.com/1026/',
      'https://xkcd.com/55/',
      'https://github.com/cubbK?tab=stars',
      'https://github.com/lllyasviel/style2paints',
      'https://medium.com/@markguarino10/a-victim-centric-approach-to-fighting-sex-trafficking-in-chicago-a547c26314a3',
      'https://dev-blog.apollodata.com/improved-apollo-client-devtools-eb43258f103f'
    ]

    return (
      <div>
        <Input placeholder='Paste link' fluid size='massive' />
        { this.getAccordion(testArr) }
      </div>
    )
  }
}

export default Home