import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Input, Tabs, Tab} from 'react-materialize'
import Actions from 'reducer/actions'

class FrameworksContainer extends Component {

  toggleFramework(fw, e) {
    if (e.target.checked === true) {
      //this.props.dispatch(Actions.FW_ADD_FRAMEWORK(fw))
      this.props.dispatch(Actions.ADD_FW(fw))
    } else {
      this.props.dispatch(Actions.FW_REMOVE_FRAMEWORK(fw))
    }
  }

  isChecked(fw) {
    return this.props.state.fw.indexOf(fw) !== -1 ? 'checked' : null
  }

  toggleFwOption(fw, e) {
    if (fw !== e.target.value) {
      this.props.dispatch(Actions.FW_REMOVE_FRAMEWORK(fw))
    } else {
      //this.props.dispatch(Actions.FW_ADD_FRAMEWORK(fw))
      this.props.dispatch(Actions.ADD_FW(fw))
    }
  }

  tabSelect(tab) {
    this.props.dispatch(Actions.TAB_DEFAULT('fw', tab))
  }

  render() {
    return (
      <div className="uw_application--fw">
        <div className="uw_application--subcontainer">
          <div className="page-title">Presets</div>

          <Tabs onChange={this.tabSelect.bind(this)} defaultValue={this.props.state.tabs.fw}>

          <Tab title="Web Frameworks">
            <Row className="tab-content">
            <Col s={12} className="mb-10">
             <Input name='bootstrap-fw' type='checkbox' label="Bootstrap Framework"
               onChange={this.toggleFramework.bind(this, 'bootstrap')}
               checked={this.isChecked.call(this, 'bootstrap')}
              />
              {this.isChecked.call(this, 'bootstrap') ?
               <Input s={12} type='select' className=""
                 defaultValue={this.isChecked.call(this, 'bootstrap-js') ? 'bootstrap-js' : 'bootstrap'}
                 onChange={this.toggleFwOption.bind(this, 'bootstrap-js')}>
                 <option value="" disabled>Bootstrap Options</option>
                 <option value='bootstrap'>Bootstrap (CSS only)</option>
                 <option value='bootstrap-js'>Bootstrap (JS + CSS)</option>
               </Input>
               : '' }
             </Col>
              <Col s={12} className="mb-10">
                 <Input name='materialize-fw' type='checkbox' label="Materialize Framework"
                   onChange={this.toggleFramework.bind(this, 'materialize')}
                   checked={this.isChecked.call(this, 'materialize')}
                 />
                 {this.isChecked.call(this, 'materialize') ?
                 <Input s={12} type='select' className=""
                   defaultValue={this.isChecked.call(this, 'materialize-js') ? 'materialize-js' : 'materialize'}
                   onChange={this.toggleFwOption.bind(this, 'materialize-js')}>
                   <option value="" disabled>Materialize Options</option>
                   <option value='materialize'>Materialize (CSS only)</option>
                   <option value='materialize-js'>Materialize (JS + CSS)</option>
                 </Input>
                 : '' }
               </Col>
               <Col s={12} className="mb-10">
                  <Input name='foundation-fw' type='checkbox' label="Foundation Framework"
                    onChange={this.toggleFramework.bind(this, 'foundation')}
                    checked={this.isChecked.call(this, 'foundation')}
                  />
                  {this.isChecked.call(this, 'foundation') ?
                  <Input s={12} type='select' className=""
                    defaultValue={this.isChecked.call(this, 'foundation-js') ? 'foundation-js' : 'foundation'}
                    onChange={this.toggleFwOption.bind(this, 'foundation-js')}>
                    <option value="" disabled>Foundation Options</option>
                    <option value='foundation'>Foundation (CSS only)</option>
                    <option value='foundation-js'>Foundation (JS + CSS)</option>
                  </Input>
                  : '' }
                </Col>
            </Row>
          </Tab>
           <Tab title="CSS Tools" >
            <Row className="tab-content">
             <Col s={12} className="mb-10">
              <Input name='normalize-fw' type='checkbox' label="Normalize CSS"
                onChange={this.toggleFramework.bind(this, 'normalize')}
                checked={this.isChecked.call(this, 'normalize')}
                />
              </Col>
              <Col s={12} className="mb-10">
               <Input name='animate-fw' type='checkbox' label="Animate CSS"
                onChange={this.toggleFramework.bind(this, 'animate')}
                checked={this.isChecked.call(this, 'animate')}
                />
               </Col>
              <Col s={12} className="mb-10">
               <Input name='markdown-fw' type='checkbox' label="Markdown CSS"
                onChange={this.toggleFramework.bind(this, 'markdown')}
                checked={this.isChecked.call(this, 'markdown')}
               />
               </Col>
             </Row>
             <Row className="tab-content">
              <Col s={12} className="mb-10">
               <Input name='fontawesome-fw' type='checkbox' label="Font Awesome"
               onChange={this.toggleFramework.bind(this, 'fontawesome')}
               checked={this.isChecked.call(this, 'fontawesome')}
               />
               </Col>
             </Row>

            </Tab>

           <Tab title="JS Libs">

             <Row className="tab-content">
              <Col s={12} className="mb-10">
               <Input name='jquery-fw' type='checkbox' label="jQuery"
                 onChange={this.toggleFramework.bind(this, 'jquery')}
                 checked={this.isChecked.call(this, 'jquery')}
                 />
               </Col>
               <Col s={12} className="mb-10">
                <Input name='ember-fw' type='checkbox' label="Ember"
                 onChange={this.toggleFramework.bind(this, 'ember')}
                 checked={this.isChecked.call(this, 'ember')}
                 />
                </Col>
               <Col s={12} className="mb-10">
                <Input name='ember-data-fw' type='checkbox' label="Ember-Data"
                 onChange={this.toggleFramework.bind(this, 'ember-data')}
                 checked={this.isChecked.call(this, 'ember-data')}
                />
                </Col>
              </Row>
              <Row className="tab-content">
               <Col s={12} className="mb-10">
                <Input name='angular1-fw' type='checkbox' label="Angular 1"
                onChange={this.toggleFramework.bind(this, 'angular1')}
                checked={this.isChecked.call(this, 'angular1')}
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

export default connect(state => ({state}))(FrameworksContainer)
