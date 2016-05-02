import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Tabs, Tab, Row, Col, Input} from 'react-materialize'
import Actions from 'reducer/actions'

class JsContainer extends Component {

  tabSelect(tab) {
    this.props.dispatch(Actions.TAB_DEFAULT('js', tab))
  }

  selectTranspiller(transpiller) {
    this.props.dispatch(Actions.JS_SELECT_TRANSPILLER(transpiller))
  }

  toggleLinter(e) {
    this.props.dispatch(Actions.JS_TOGGLE_LINTER(e.target.checked))
  }

  render() {
    return (
      <div className="uw_application--fw">
        <div className="uw_application--subcontainer">
          <div className="page-title">Javascript</div>
          <Tabs onChange={this.tabSelect.bind(this)} defaultValue={this.props.state.tabs.js}>
            <Tab title="Builder Options">
              <Row className="tab-content">

                <Col s={12} className="mb-10">
                  <Input name='linter-template' type='checkbox'
                    label='Enable linter (eslint)'
                    defaultValue={this.props.state.js.linter ? 'on' : ''}
                    onChange={this.toggleLinter.bind(this)}
                    />
                </Col>

                <div className="mb-10"><strong>Transpillers:</strong></div>
                  <Col s={12} className="mb-10">
                    <Input id="none-gen" name="transpiller-group"
                      type='radio' className="with-gap" label="Without any transpillers"
                      defaultChecked={this.props.state.js.transpiller === 'none'}
                      onChange={this.selectTranspiller.bind(this, 'none')}
                      />
                  </Col>

                  <Col s={12} className="mb-10">
                    <Input id="babel-gen" name="transpiller-group"
                      type='radio' className="with-gap" label="Babel"
                      defaultChecked={this.props.state.js.transpiller === 'babel'}
                      onChange={this.selectTranspiller.bind(this, 'babel')}
                       />
                  </Col>

                  <Col s={12} className="mb-10">
                    <Input id="react-gen" name="transpiller-group"
                      type='radio' className="with-gap" label="Babel + React"
                      defaultChecked={this.props.state.js.transpiller === 'react'}
                      onChange={this.selectTranspiller.bind(this, 'react')}
                       />
                  </Col>

              </Row>
            </Tab>

            <Tab title="Linter Options" {...this.props.state.js.linter ? {} : {disabled : true}}>


            </Tab>

          </Tabs>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state}))(JsContainer)
