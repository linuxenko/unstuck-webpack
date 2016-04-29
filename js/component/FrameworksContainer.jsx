import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Input, Icon, Tabs, Tab} from 'react-materialize'

class FrameworksContainer extends Component {
  render() {





    return (
      <div className="uw_application--fw">
        <div className="uw_application--subcontainer">
          <div className="page-title">Frameworks Configuration</div>

          <Tabs >
           <Tab title="CSS Frameworks">
            <Row className="tab-content">
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
            </Tab>
           <Tab title="Web Frameworks">
             <Row className="tab-content">
             <Col s={12}>
              <Input name='bootstrap-fw' type='checkbox' label="Bootstrap Framework" />
              <Input s={12} type='select' className="">
                <option value='css'>Bootstrap (CSS only)</option>
                <option value='js'>Bootstrap (JS + CSS)</option>
              </Input>
              </Col>
               <Col s={12}>
                  <Input name='materialize-fw' type='checkbox' label="Materialize Framework" />
                  <Input s={12} type='select' className="">
                    <option value='css'>Materialize (CSS only)</option>
                    <option value='js'>Materialize (JS + CSS)</option>
                  </Input>
                </Col>
             </Row>
           </Tab>
           <Tab title="Font Icons">
             <Row className="tab-content">
              <Col s={12} className="mb-10">
               <Input name='fontawesome-fw' type='checkbox' label="Font Awesome" />
                 <Icon className="blue-text waves-effect waves-light">info_outline</Icon>
               </Col>
             </Row>
           </Tab>
         </Tabs>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state}))(FrameworksContainer)
