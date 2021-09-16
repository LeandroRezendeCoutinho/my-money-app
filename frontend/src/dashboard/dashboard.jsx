import React, { Component } from 'react'

import ContenHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox"

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContenHeader title="Dashboard" small='Versão 1.0' />
        <Content>
          <ValueBox cols='12 4' color='green' icon='bank' value='R$ 10'
            text='Total credits' />
          <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 10'
            text='Total debits' />
          <ValueBox cols='12 4' color='blue' icon='money' value='R$ 0'
            text='Consolidated total ' />
        </Content>
      </div>
    )
  }
}

export default Dashboard