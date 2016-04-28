import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Collection, CollectionItem, Input, Row, Col} from 'react-materialize'

import Actions from 'reducer/actions'

class Side extends Component {

  switchChange(type) {
    switch(type) {
    case 'html':
      this.props.dispatch(Actions.TOGGLE_HTML())
      break
    case 'js':
      this.props.dispatch(Actions.TOGGLE_JS())
      break
    case 'css':
      this.props.dispatch(Actions.TOGGLE_CSS())
      break
    }
  }

  render() {
    let enabledItems = {
      html : this.props.state.html.enabled,
      js   : this.props.state.js.enabled,
      css  : this.props.state.css.enabled
    }

    return (
      <div  className="uw_application--side">
        <div className="logo">Unstuck Webpack</div>
        <Collection>
          <CollectionItem href={enabledItems.html ? '#html' : '#'}>
           <div className={enabledItems.html === true ? 'enabled' : 'disabled'}>
             <div className="control">
              <Row>
                <Col s={12}>
                  <i className="devicons devicons-html5"></i>
                  <span> HTML </span>
                  <div className="right">
                    <Input name='html' onChange={this.switchChange.bind(this, 'html')}
                     type='switch' />
                  </div>
                </Col>
              </Row>
             </div>
             <div className="description">
               General html and templating configuration.
             </div>
           </div>
          </CollectionItem>
          <CollectionItem href={enabledItems.js ? '#js' : '#'}>
          <div className={enabledItems.js === true ? 'enabled' : 'disabled'}>
            <div className="control">
             <Row>
               <Col s={12}>
                 <i className="devicons devicons-javascript"></i>
                 <span> Build </span>
                 <div className="right">
                   <Input name='js' type='switch' onChange={this.switchChange.bind(this, 'js')} />
                 </div>
               </Col>
             </Row>
            </div>
            <div className="description">
              Transpiller settings and dependencies configuration.
            </div>
           </div>
          </CollectionItem>
          <CollectionItem href={enabledItems.css ? '#css' : '#'}>
           <div className={enabledItems.css === true ? 'enabled' : 'disabled'}>
            <div className="control">
             <Row>
               <Col s={12}>
                 <i className="devicons devicons-css3_full"></i>
                 <span> CSS </span>
                 <div className="right">
                   <Input name='css' type='switch' onChange={this.switchChange.bind(this, 'css')} />
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
