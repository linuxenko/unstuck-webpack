import React, {Component} from 'react'
import {Row, Col, Input, Tabs, Tab} from 'react-materialize'

import {connect} from 'react-redux'
import Actions from 'reducer/actions'


class HtmlContainer extends Component {
  toggleTemplate(type, e) {
    this.props.dispatch(Actions.TOGGLE_HTML_TEMPLATE(type, e.target.checked))
  }

  setTarget(type, e) {
    this.props.dispatch(Actions.SET_HTML_TEMPLATE_TARGET(type, e.target.value))
  }

  render() {
    let enabledItems = {
      html : this.props.state.html.templates.html.enabled,
      jade : this.props.state.html.templates.jade.enabled,
      markdown : this.props.state.html.templates.markdown.enabled,
      handlebars : this.props.state.html.templates.handlebars.enabled
    }

    return (
      <div className="uw_application--html">
        <div className="uw_application--subcontainer">
          <div className="page-title">HTML</div>
          <Tabs>
            <Tab title="Formats Support">
              <Row className="tab-content">
               <Col s={12} className="mb-10">
                <Input name='html-template' type='checkbox'
                  label='HTML Files Support (.html)'
                  defaultValue={ enabledItems.html ? 'on' : ''}
                  onChange={this.toggleTemplate.bind(this,'html')}
                   />
                </Col>
                {enabledItems.html ?
                  <Col s={12} className="mb-10">
                    <Input s={12} name="html-target" label="Target Directory"
                     defaultValue={this.props.state.html.templates.html.target}
                    onChange={this.setTarget.bind(this, 'html')}
                      />
                  </Col> : '' }
                <Col s={12} className="mb-10">
                  <Input name='jade-template' type='checkbox'
                  label='Jade Files Support (.jade)'
                  defaultValue={ enabledItems.jade ? 'on' : ''}
                  onChange={this.toggleTemplate.bind(this,'jade')}/>
                </Col>
                {enabledItems.jade ?
                  <Col s={12} className="mb-10">
                    <Input s={12} name="jade-target" label="Target Directory"
                     defaultValue={this.props.state.html.templates.jade.target}
                    onChange={this.setTarget.bind(this, 'jade')}
                      />
                  </Col> : '' }

                <Col s={12} className="mb-10">
                  <Input name='markdown-template' type='checkbox'
                  label='Markdown Files Support (.md)'
                  defaultValue={ enabledItems.markdown ? 'on' : ''}
                  onChange={this.toggleTemplate.bind(this,'markdown')}/>
                </Col>
                {enabledItems.markdown ?
                  <Col s={12} className="mb-10">
                    <Input s={12} name="markdown-target" label="Target Directory"
                     defaultValue={this.props.state.html.templates.markdown.target}
                    onChange={this.setTarget.bind(this, 'markdown')}
                      />
                  </Col> : '' }

                <Col s={12} className="mb-10">
                  <Input name='handlebars-template' type='checkbox'
                  label='Handlebars Templates Support (.hbs)'
                  defaultValue={ enabledItems.handlebars ? 'on' : ''}
                  onChange={this.toggleTemplate.bind(this,'handlebars')}/>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}


export default connect(state => ({state}))(HtmlContainer)
