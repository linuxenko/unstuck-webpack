import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Input, Icon} from 'react-materialize'

class FrameworksContainer extends Component {
  render() {
    return (
      <div className="uw_application--fw">
        <div className="uw_application--subcontainer">
          <div className="page-title">Frameworks Configuration</div>


          <Row>
           <Col s={12} className="mb-10">
            <h5> CSS Frameworks</h5>
            <hr />
          </Col>
          <Col s={12} className="mb-10">
           <Input name='normalize-fw' type='checkbox' label="Normalize CSS" />
             <Icon className="blue-text waves-effect waves-light">info_outline</Icon>
           </Col>
           <Col s={12} className="mb-10">
            <Input name='animate-fw' type='checkbox' label="Animate CSS" />
              <Icon className="blue-text waves-effect waves-light">info_outline</Icon>
            </Col>
           <Col s={12} className="mb-10">
            <Input name='markdown-fw' type='checkbox' label="Markdown CSS" />
              <Icon className="blue-text waves-effect waves-light">info_outline</Icon>
            </Col>
          </Row>

          <Row>
           <Col s={12} className="mb-10">
            <h5> Web Frameworks</h5>
            <hr />
          </Col>
           <Col s={12} className="mb-10">
            <Input name='bootstrap-fw' type='checkbox' label="Twitter Bootstrap" />
              <Icon className="blue-text waves-effect waves-light">info_outline</Icon>
            </Col>
            <Col s={12} className="mb-10">
             <Input name='materialize-fw' type='checkbox' label="Materialize Framework" />
               <Icon className="blue-text waves-effect waves-light">info_outline</Icon>
             </Col>
          </Row>

          <Row>
           <Col s={12} className="mb-10">
            <h5> Font Icons</h5>
            <hr />
          </Col>
           <Col s={12} className="mb-10">
            <Input name='fontawesome-fw' type='checkbox' label="Font Awesome" />
              <Icon className="blue-text waves-effect waves-light">info_outline</Icon>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state}))(FrameworksContainer)
