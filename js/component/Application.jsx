import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Button, Modal} from 'react-materialize'

import PreviewModal from 'component/PreviewModal.jsx'
import Side from 'component/Side.jsx'

import store from 'reducer/index'

import {BlobifyConfigurator} from 'configurator'

class Application extends Component {
  zipConfig() {
    BlobifyConfigurator(this.props.state)
  }

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
              <Button floating faicon="fa fa-floppy-o" onClick={this.zipConfig.bind(this)}
              className="pink darken-3 waves-effect waves-light"/>
              <Modal header="Preview Settings"
                trigger={<Button floating faicon="fa fa-eye" className="orange darken-4 waves-effect waves-light"/>} fixedFooter>
                <PreviewModal store={store} />
              </Modal>
            </Button>
          </Row>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state}))(Application)
