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

  setTarget(plugin, option, e) {
    this.props.dispatch(Actions.CONFIG_GENERAL_TARGET(plugin, option, e.target.value))
  }

  togglePlugin(plugin, e) {
    this.props.dispatch(Actions.CONFIG_TOGGLE_PLUGIN(plugin, e.target.checked))
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

                <div className={'template-card mb-10 waves-effect' + (this.props.state.config.template === 'node' ? ' active' : '')}>
                  <Input id="node-gen" name='group1' type='radio' className="with-gap"
                  {...this.props.state.config.template === 'node' ? {defaultChecked : 'checked'}: {}}
                   onChange={this.selectTemplate.bind(this, 'node')} />
                   <label htmlFor="node-gen">
                      NodeJs + Babel
                      <i className="devicons devicons-nodejs_small"></i>
                   </label>
                </div>

                <div className={'template-card mb-10 waves-effect' + (this.props.state.config.template === 'angular1' ? ' active' : '')}>
                  <Input id="angular1-gen" name='group1' type='radio' className="with-gap"
                  {...this.props.state.config.template === 'angular1' ? {defaultChecked : 'checked'}: {}}
                   onChange={this.selectTemplate.bind(this, 'angular1')} />
                   <label htmlFor="angular1-gen">
                      Angular 1 + less
                      <i className="devicons devicons-angular"></i>
                      <i className="devicons devicons-less"></i>
                   </label>
                </div>

                <div className={'template-card mb-10 waves-effect' + (this.props.state.config.template === 'angular2' ? ' active' : '')}>
                  <Input id="angular2-gen" name='group1' type='radio' className="with-gap"
                  {...this.props.state.config.template === 'angular2' ? {defaultChecked : 'checked'}: {}}
                   onChange={this.selectTemplate.bind(this, 'angular2')} />
                   <label htmlFor="angular2-gen">
                      Angular 2 + scss/sass
                      <i className="devicons devicons-angular"></i>
                      <i className="devicons devicons-sass"></i>
                   </label>
                </div>

                  <div className={'template-card mb-10 waves-effect' + (this.props.state.config.template === 'react' ? ' active' : '')}>
                    <Input id="react-gen" name='group1' type='radio' className="with-gap"
                    {...this.props.state.config.template === 'react' ? {defaultChecked : 'checked'}: {}}
                     onChange={this.selectTemplate.bind(this, 'react')} />
                     <label htmlFor="react-gen">React + scss/sass
                        <i className="devicons devicons-react"></i>
                        <i className="devicons devicons-sass"></i>
                     </label>
                  </div>


                  <div className={'template-card mb-10 waves-effect' + (this.props.state.config.template === 'ember' ? ' active' : '')}>
                    <Input id="ember-gen" name='group1' type='radio' className="with-gap"
                    {...this.props.state.config.template === 'ember' ? {defaultChecked : 'checked'}: {}}
                     onChange={this.selectTemplate.bind(this, 'ember')} />
                     <label htmlFor="ember-gen">Ember + scss/sass
                        <i className="devicons devicons-ember"></i>
                        <i className="devicons devicons-sass"></i>
                     </label>
                  </div>

                  <div className={'template-card waves-effect' + (this.props.state.config.template === 'vue' ? ' active' : '')}>
                    <Input id="vue-gen" name='group1' type='radio' className="with-gap"
                    {...this.props.state.config.template === 'vue' ? {defaultChecked : 'checked'}: {}}
                     onChange={this.selectTemplate.bind(this, 'vue')} />
                     <label htmlFor="vue-gen">VueJS + stylus
                        <i className="devicons devicons-nodejs_small"></i>
                        <i className="devicons devicons-stylus"></i>
                     </label>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab title="Settings">
              <Row className="tab-content mb-10">
                <Col s={12} className="mb-10">
                  <Input s={6} name="js-dir" label="JS Directory"
                   defaultValue={this.props.state.config.jsdir}
                   onChange={this.setTarget.bind(this, null, 'jsdir')}
                    />

                  <Input s={6} name="css-dir" label="CSS Directory"
                   defaultValue={this.props.state.config.cssdir}
                   onChange={this.setTarget.bind(this, null, 'cssdir')}
                    />
                </Col>

                <Col s={12} className="mb-10">
                <Input name='chunks-plugin' type='checkbox'
                  label='Chunks plugin settings'
                  defaultValue={ this.props.state.config.chunks.enabled ? 'on' : ''}
                  onChange={this.togglePlugin.bind(this, 'chunks')}
                   />
                </Col>

                <Col s={12} className="mb-10">
                <Input name='extract-plugin' type='checkbox'
                  label='TextExtract plugin settings'
                  defaultValue={ this.props.state.config.chunks.enabled ? 'on' : ''}
                  onChange={this.togglePlugin.bind(this, 'extract')}
                   />
                </Col>

                <Col s={12} className="mb-10">
                    <Input name='assets-plugin' type='checkbox'
                      label='Assets file loader settings (.png,.woff,.ttf...)'
                      defaultValue={ this.props.state.config.assets.enabled ? 'on' : ''}
                      onChange={this.togglePlugin.bind(this, 'assets')}
                       />
                </Col>
                {this.props.state.config.assets.enabled ?
                    <Input s={12} name="assets-target" label="Assets Target Directory"
                     defaultValue={this.props.state.config.assets.dir}
                     onChange={this.setTarget.bind(this, 'assets', 'dir')}
                      />
                 : '' }

              </Row>
            </Tab>
            <Tab title="Vendors" {...this.props.state.config.chunks.enabled ? {} : {disabled : true}}>

            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default connect(state => ({state}))(IndexContainer)
