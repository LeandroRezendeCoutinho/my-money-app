import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContenHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox"
import Row from "../common/layout/row"

class Dashboard extends Component {
  render() {
    const { credit, debt } = this.props.summary
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

const mapStateToProps = (state) => ({ summary: state.dashboard.summary })
export default connect(mapStateToProps)(Dashboard)
