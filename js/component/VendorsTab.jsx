import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from 'reducer/actions'
import {Row, Col, Input} from 'react-materialize'

class VendorsTab extends Component {
  cssVendor() {
    if (this.props.state.css.enabled === false) {
      return []
    }
    let trp = this.props.state.css.transpiller

    if (trp.less === true) {
      return ['vendors.less']
    }

    if (trp.sass === true) {
      return ['vendors.sass']
    }

    if (trp.styl) {
      return ['vendors.styl']
    }

    return []
  }

  jsVendor() {
    if (this.props.state.js.enabled === false) {
      return []
    }

    let trp = this.props.state.js.transpiller

    if (trp.react === true) {
      return ['react', 'react-dom']
    }

    return []
  }

  isChecked(vendor) {
    return this.props.state.config.vendors.indexOf(vendor) !== -1 ? 'checked' : null
  }

  toggleVendor(vendor, e) {
    this.props.dispatch(Actions.TOGGLE_VENDOR(vendor, e.target.checked))
  }

  render() {
    let vendours = [...this.cssVendor.call(this),...this.jsVendor.call(this)].map(v => {
      return (
        <Col s={12} key={v}>
          <Input name={v} type='checkbox'
          label={v}
          checked={this.isChecked.call(this, v)}
          onChange={this.toggleVendor.bind(this, v)}
                     />
        </Col>
      )
    })

    return (
      <Row className="tab-content">
        {vendours}
      </Row>
    )
  }
}


export default connect(state => ({state}))(VendorsTab)
