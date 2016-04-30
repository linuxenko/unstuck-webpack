import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-materialize'

import Side from 'component/Side.jsx'


class Application extends Component {

  render() {
    return (
      <div className="uw_application">
        <div className="uw_application--container container">
          <Row>
            <Col m={5} s={12}><Side route={this.props.location.pathname} /></Col>
            <Col id="uw-application-container" m={7} s={12}>
                {this.props.children}
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state}))(Application)
