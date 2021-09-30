import React, { Component } from 'react'
import ContenHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox"
import Row from "../common/layout/row"
import axios from "axios"

const BASE_URL = 'http://localhost:3000/api'

export default class Dashboard2 extends Component {

  constructor(props) {
    super(props)
    this.state = { credit: 0, debt: 0 }
  }

  componentWillMount() {
    axios.get(`${BASE_URL}/billingCycles/summary`)
      .then(response => this.setState(response.data))
  }

  render() {
    const { credit, debt } = this.state
    return (
      <div>
        <ContenHeader title="Dashboard" small='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`}
              text='Total credits' />
            <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`}
              text='Total debits' />
            <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`}
              text='Consolidated total' />
          </Row>
        </Content>
      </div>
    )
  }
}
