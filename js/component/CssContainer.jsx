import React, {Component} from 'react'
import {Tabs,Tab,Row, Col, Input} from 'react-materialize'
import {connect} from 'react-redux'
import Actions from 'reducer/actions'

class CssContainer extends Component {


  selectTranspiller(transpiller, e) {
    this.props.dispatch(Actions.CSS_SELECT_TRANSPILLER(transpiller, e.target.checked))
  }

  toggleAutoprefix(e) {
    this.props.dispatch(Actions.CSS_TOGGLE_AUTOPREFIX(e.target.checked))
  }

  tabSelect(tab) {
    this.props.dispatch(Actions.TAB_DEFAULT('css', tab))
  }

  render() {
    return (
      <div className="uw_application--js">
        <div className="uw_application--subcontainer">
          <div className="page-title">CSS</div>
          <Tabs onChange={this.tabSelect.bind(this)} defaultValue={this.props.state.tabs.css}>
            <Tab title="CSS Transpillers">
              <Row className="tab-content">

              <Col s={12} className="mb-10">
                <Input id="autoprefixer-gen" name="transpiller-group"
                  type='checkbox' className="with-gap" label="Enable autoprefixer"
                  defaultValue={this.props.state.css.autoprefix ? 'on' : ''}
                  onChange={this.toggleAutoprefix.bind(this)}
                  />
              </Col>

                <div className="mb-10"><strong>Preprocessors:</strong></div>
                  <Col s={12} className="mb-10">
                    <Input id="less-gen" name="transpiller-group"
                      type='checkbox' className="with-gap" label="Less transpiller (.less)"
                      defaultValue={this.props.state.css.transpiller.less ? 'on' : ''}
                      onChange={this.selectTranspiller.bind(this, 'less')}
                      />
                  </Col>

                  <Col s={12} className="mb-10">
                    <Input id="sass-scss-gen" name="transpiller-group"
                      type='checkbox' className="with-gap" label="Sass transpiller (.scss/.sass)"
                      defaultValue={this.props.state.css.transpiller.sass ? 'on' : ''}
                      onChange={this.selectTranspiller.bind(this, 'sass')}
                      />
                  </Col>

                  <Col s={12} className="mb-10">
                    <Input id="stylus-gen" name="transpiller-group"
                      type='checkbox' className="with-gap" label="Stylus transpiller (.styl)"
                      defaultValue={this.props.state.css.transpiller.styl ? 'on' : ''}
                      onChange={this.selectTranspiller.bind(this, 'styl')}
                      />
                  </Col>

              </Row>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state}))(CssContainer)
