import React, { Component } from 'react'
import styles from './ContainerFluid.module.styl'

const ContainerFluid = props => 
  <div className={ styles.containerFluid }>
    { props.children }
  </div>

export default ContainerFluid