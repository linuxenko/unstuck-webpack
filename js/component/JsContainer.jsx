import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Tabs, Tab, Row, Col, Input} from 'react-materialize'
import Actions from 'reducer/actions'

class JsContainer extends Component {

  tabSelect(tab) {
    this.props.dispatch(Actions.TAB_DEFAULT('js', tab))
  }

  selectTranspiller(transpiller, e) {
    this.props.dispatch(Actions.JS_SELECT_TRANSPILLER(transpiller, e.target.checked))
  }

  toggleLinter(e) {
    this.props.dispatch(Actions.JS_TOGGLE_LINTER(e.target.checked))
  }

  selectSourceMap(sourceMap) {
    this.props.dispatch(Actions.JS_SELECT_SOURCEMAP(sourceMap))
  }

  render() {
    return (
      <div className="uw_application--js">
        <div className="uw_application--subcontainer">
          <div className="page-title">Javascript</div>
          <Tabs onChange={this.tabSelect.bind(this)} defaultValue={this.props.state.tabs.js}>
            <Tab title="Builder Options">
              <Row className="tab-content">

                <Col s={12} className="mb-10">
                  <Input name='linter-template' type='checkbox'
                    label='Enable linter (eslint)'
                    checked={this.props.state.js.linter ? 'on' : ''}
                    onChange={this.toggleLinter.bind(this)}
                    />
                </Col>

              <div className="mb-10"><strong>SourceMap:</strong></div>

                  <Col s={6} className="mb-10">
                    <Input name='sourcemap' type='radio'
                      label='none'
                      defaultChecked={this.props.state.js.sourceMap === 'none'}
                      onChange={this.selectSourceMap.bind(this, 'none')}
                      />
                  </Col>
                  <Col s={6} className="mb-10">
                    <Input name='sourcemap' type='radio'
                      label='source-map (+)'
                      defaultChecked={this.props.state.js.sourceMap === 'source-map'}
                      onChange={this.selectSourceMap.bind(this, 'source-map')}
                      />
                  </Col>
                  <Col s={6} className="mb-10">
                    <Input name='sourcemap' type='radio'
                      label='cheap-source-map (++)'
                      defaultChecked={this.props.state.js.sourceMap === 'cheap-source-map'}
                      onChange={this.selectSourceMap.bind(this, 'cheap-source-map')}
                      />
                  </Col>
                  <Col s={6} className="mb-10">
                    <Input name='sourcemap' type='radio'
                      label='eval (+++)'
                      defaultChecked={this.props.state.js.sourceMap === 'eval'}
                      onChange={this.selectSourceMap.bind(this, 'eval')}
                      />
                  </Col>

                <div className="mb-10"><strong>Transpillers:</strong></div>

                  <Col s={12} className="mb-10">
                    <Input id="babel-gen" name="transpiller-group"
                      type='checkbox' className="with-gap" label="Babel"
                      checked={this.props.state.js.transpiller.babel ? 'on' : ''}
                      onChange={this.selectTranspiller.bind(this, 'babel')}
                       />
                  </Col>

                  <Col s={12} className="mb-10">
                    <Input id="react-gen" name="transpiller-group"
                      type='checkbox' className="with-gap" label="Babel + React"
                      checked={this.props.state.js.transpiller.react ? 'on' : ''}
                      onChange={this.selectTranspiller.bind(this, 'react')}
                       />
                  </Col>

                  <Col s={12} className="mb-10">
                    <Input id="vue-gen" name="transpiller-group"
                      type='checkbox' className="with-gap" label="Babel + Vue"
                      checked={this.props.state.js.transpiller.vue ? 'on' : ''}
                      onChange={this.selectTranspiller.bind(this, 'vue')}
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
