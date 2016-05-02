import React, {Component} from 'react'
import {Tabs,Tab,Row, Col, Input} from 'react-materialize'
import {connect} from 'react-redux'
import Actions from 'reducer/actions'

class CssContainer extends Component {

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
                  />
              </Col>

                <div className="mb-10"><strong>Transpillers:</strong></div>
                  <Col s={12} className="mb-10">
                    <Input id="less-gen" name="transpiller-group"
                      type='checkbox' className="with-gap" label="Less transpiller (.less)"
                      />
                  </Col>

                  <Col s={12} className="mb-10">
                    <Input id="sass-scss-gen" name="transpiller-group"
                      type='checkbox' className="with-gap" label="Sass transpiller (.scss/.sass)"
                      />
                  </Col>

                  <Col s={12} className="mb-10">
                    <Input id="stylus-gen" name="transpiller-group"
                      type='checkbox' className="with-gap" label="Stylus transpiller (.styl)"
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
