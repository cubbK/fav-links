import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import styles from './CardCenter.module.styl'

const CardCenter = props =>
  <Card centered raised className={ styles.card }>
    <Card.Content>
      <Card.Header>
        { props.header }
      </Card.Header>
      { props.children }
    </Card.Content>
  </Card>

export default CardCenter