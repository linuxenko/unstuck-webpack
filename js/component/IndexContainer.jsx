import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Tabs, Tab, Row, Col, Input} from 'react-materialize'
import Actions from 'reducer/actions'

class IndexContainer extends Component {
  tabSelect(tab) {
    this.props.dispatch(Actions.TAB_DEFAULT('dd', tab))
  }

  selectTemplate(template) {
    this.props.dispatch(Actions.CONFIG_TEMPLATE(template))
  }

  render() {
    return (
      <div className="uw_application--dashboard">
        <div className="uw_application--subcontainer">
          <div className="page-title">Dashboard</div>

          <Tabs onChange={this.tabSelect.bind(this)} defaultValue={this.props.state.tabs.dd}>
            <Tab title="Templates">
              <Row className="tab-content">
                <Col s={12}>

                <div className={'template-card mb-10' + (this.props.state.config.template === 'custom' ? ' active' : '')}>
                  <Input id="custom-gen" name='group1' type='radio' className="with-gap"
                   {...this.props.state.config.template === 'custom' ? {defaultChecked : 'checked'}: {}}
                   onChange={this.selectTemplate.bind(this, 'custom')} />
                   <label htmlFor="custom-gen">
                      Manual
                   </label>
                </div>

                  <div className={'template-card mb-10' + (this.props.state.config.template === 'node' ? ' active' : '')}>
                    <Input id="node-gen" name='group1' type='radio' className="with-gap"
                    {...this.props.state.config.template === 'node' ? {defaultChecked : 'checked'}: {}}
                     onChange={this.selectTemplate.bind(this, 'node')} />
                     <label htmlFor="node-gen">
                        NodeJs
                        <i className="devicons devicons-nodejs_small"></i>
                     </label>
                  </div>


                  <div className={'template-card mb-10' + (this.props.state.config.template === 'react' ? ' active' : '')}>
                    <Input id="react-gen" name='group1' type='radio' className="with-gap"
                    {...this.props.state.config.template === 'react' ? {defaultChecked : 'checked'}: {}}
                     onChange={this.selectTemplate.bind(this, 'react')} />
                     <label htmlFor="react-gen">React + scss/sass
                        <i className="devicons devicons-react"></i>
                        <i className="devicons devicons-sass"></i>
                     </label>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab title="General">

            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state}))(IndexContainer)
