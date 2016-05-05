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

  fitSidebar() {
    setTimeout(() => {
      try {
        let height = document.getElementById('uw-application-container').offsetHeight
        this.containerEl.style.minHeight = height + 'px'
      } catch(e) { console.log(e)}
    }, 5)
  }

  componentDidUpdate() {
    this.fitSidebar()
  }

  componentDidMount() {
    this.fitSidebar()
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
      <div className="uw_application--side" ref={ref => this.containerEl = ref}>
        <div className="logo">Unstuck Webpack</div>
        <Collection>
          <CollectionItem active={activeItem === ''}>
           <a href="#/" className="enabled waves-effect">
             <div className="control">
              <Row>
                <Col s={12}>
                  <div>
                    <i className="devicons devicons-dropbox"></i>
                    <span> Dashboard </span>
                  </div>
                </Col>
              </Row>
             </div>
             <div className="description">
              General webpack configuration options
             </div>
           </a>
          </CollectionItem>
          <CollectionItem active={activeItem === 'fw'}>
            <a href="#/fw" className="enabled waves-effect">
             <div className="control">
              <Row>
                <Col s={12}  >
                  <div>
                    <i className="devicons devicons-npm"></i>
                    <span> Presets </span>
                  </div>
                </Col>
              </Row>
             </div>
             <div className="description">
               Include support of predefined sets
             </div>
           </a>
          </CollectionItem>
          <CollectionItem active={activeItem === 'html'}>
           <a href={enabledItems.html ? '#/html' : null}
            className={enabledItems.html === true ? 'enabled waves-effect' : 'disabled'}>
             <div className="control">
              <Row>
                <Col s={12}  >
                  <div className="left">
                    <i className="devicons devicons-html5"></i>
                    <span> HTML </span>
                  </div>
                  <div className="right">
                    <Input name='html' onChange={this.switchChange.bind(this, 'html')}
                     type='switch' checked={enabledItems.html}/>
                  </div>
                </Col>
              </Row>
             </div>
             <div className="description">
               General html and templating configuration.
             </div>
           </a>
          </CollectionItem>
          <CollectionItem active={activeItem === 'js'}>
          <a href={enabledItems.js ? '#/js' : null} className={enabledItems.js === true ? 'enabled waves-effect' : 'disabled'}>
            <div className="control">
             <Row>
               <Col s={12}>
                 <div className="left">
                   <i className="devicons devicons-javascript"></i>
                   <span> Transpiller </span>
                 </div>
                 <div className="right">
                   <Input name='js' type='switch' onChange={this.switchChange.bind(this, 'js')}
                   checked={enabledItems.js} />
                 </div>
               </Col>
             </Row>
            </div>
            <div className="description">
              Javascript builders configuration.
            </div>
           </a>
          </CollectionItem>
          <CollectionItem active={activeItem === 'css'}>
           <a href={enabledItems.css ? '#/css' : null} className={enabledItems.css === true ? 'enabled waves-effect' : 'disabled'}>
            <div className="control">
             <Row>
               <Col s={12}>
                 <div className="left">
                   <i className="devicons devicons-css3_full"></i>
                   <span> CSS </span>
                 </div>
                 <div className="right">
                   <Input name='css' type='switch' onChange={this.switchChange.bind(this, 'css')}
                   checked={enabledItems.css}/>
                 </div>
               </Col>
             </Row>
            </div>
            <div className="description">
              Configuration of the css builders for your css.
            </div>
          </a>
          </CollectionItem>
        </Collection>
      </div>
    )
  }
}

export default connect(state => ({state}))(Side)
