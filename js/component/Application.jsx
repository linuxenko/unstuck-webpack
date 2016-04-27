import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Tab, Tabs} from 'react-materialize'

import Side from 'component/Side.jsx'


class Application extends Component {
  render() {
    return (
      <div className="uw_application">
        <div className="uw_application--container container">
          <Row>
            <Col m={4} s={12}><Side /></Col>
            <Col m={8} s={12}>
                <Tabs className='tab-demo z-depth-1'>
                  <Tab title="Test 1">Test 1</Tab>
                  <Tab title="Test 2" active>Test 2</Tab>
                  <Tab title="Test 3">Test 3</Tab>
                  <Tab title="Test 4">Test 4</Tab>
                </Tabs>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state}))(Application)
