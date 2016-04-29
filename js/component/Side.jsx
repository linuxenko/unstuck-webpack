import React, {Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {Collection, CollectionItem, Input, Row, Col} from 'react-materialize'

import Actions from 'reducer/actions'

class Side extends Component {

  switchChange(type,e) {
    switch(type) {
    case 'html':
      this.props.dispatch(Actions.TOGGLE_HTML(e.target.checked))
      break
    case 'js':
      this.props.dispatch(Actions.TOGGLE_JS(e.target.checked))
      break
    case 'css':
      this.props.dispatch(Actions.TOGGLE_CSS(e.target.checked))
      break
    }
  }

  render() {
    let enabledItems = {
      html : this.props.state.html.enabled,
      js   : this.props.state.js.enabled,
      css  : this.props.state.css.enabled
    }

    let activeItem = this.props.route.replace(/^\//,'')

    if (enabledItems.hasOwnProperty(activeItem) && enabledItems[activeItem] === false) {
      setTimeout( () => hashHistory.push('/'), 1)
    }

    return (
      <div  className="uw_application--side">
        <div className="logo">Unstuck Webpack</div>
        <Collection>
          <CollectionItem active={activeItem === 'fw'}>
           <div className="enabled">
             <div className="control">
              <Row>
                <Col s={12}  >
                  <a href="#/fw" className="waves-effect waves-light" >
                    <i className="devicons devicons-npm"></i>
                    <span> Presets </span>
                  </a>
                </Col>
              </Row>
             </div>
             <div className="description">
               Enable support predefined sets
             </div>
           </div>
          </CollectionItem>
          <CollectionItem active={activeItem === 'html'}>
           <div className={enabledItems.html === true ? 'enabled' : 'disabled'}>
             <div className="control">
              <Row>
                <Col s={12}  >
                  <a href={enabledItems.html ? '#/html' : null} className="waves-effect waves-light" >
                    <i className="devicons devicons-html5"></i>
                    <span> HTML </span>
                  </a>
                  <div className="right">
                    <Input name='html' onChange={this.switchChange.bind(this, 'html')}
                     type='switch' defaultChecked={enabledItems.html}/>
                  </div>
                </Col>
              </Row>
             </div>
             <div className="description">
               General html and templating configuration.
             </div>
           </div>
          </CollectionItem>
          <CollectionItem active={activeItem === 'js'}>
          <div className={enabledItems.js === true ? 'enabled' : 'disabled'}>
            <div className="control">
             <Row>
               <Col s={12}>
                 <a href={enabledItems.js ? '#/js' : null} className="waves-effect waves-light">
                   <i className="devicons devicons-javascript"></i>
                   <span> Build </span>
                 </a>
                 <div className="right">
                   <Input name='js' type='switch' onChange={this.switchChange.bind(this, 'js')}
                   defaultChecked={enabledItems.js} />
                 </div>
               </Col>
             </Row>
            </div>
            <div className="description">
              Javascript builders configuration.
            </div>
           </div>
          </CollectionItem>
          <CollectionItem active={activeItem === 'css'}>
           <div className={enabledItems.css === true ? 'enabled' : 'disabled'}>
            <div className="control">
             <Row>
               <Col s={12}>
                 <a href={enabledItems.css ? '#/css' : null} className="waves-effect waves-light">
                   <i className="devicons devicons-css3_full"></i>
                   <span> CSS </span>
                 </a>
                 <div className="right">
                   <Input name='css' type='switch' onChange={this.switchChange.bind(this, 'css')}
                   defaultChecked={enabledItems.css}/>
                 </div>
               </Col>
             </Row>
            </div>
            <div className="description">
              Configuration of the css builders for your css.
            </div>
          </div>
          </CollectionItem>
        </Collection>
      </div>
    )
  }
}

export default connect(state => ({state}))(Side)
