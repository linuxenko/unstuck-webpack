import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Button} from 'react-materialize'

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
            <Button floating fab="horizontal" faicon="fa fa-bars" className="purple darken-1 waves-effect waves-light" large>
              <Button floating faicon="fa fa-floppy-o" className="pink darken-3 waves-effect waves-light"/>
              <Button floating faicon="fa fa-eye" className="orange darken-4 waves-effect waves-light"/>
            </Button>
          </Row>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state}))(Application)
