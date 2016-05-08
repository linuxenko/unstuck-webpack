import React, {Component} from 'react'
import {connect} from 'react-redux'

import Prism from 'prism/prism'
import $ from 'jquery'

import {NpmConfigurator, WebpackConfigurator,
   EntrifyConfigurator, HtmlifyConfigurator} from 'configurator'
import {TS} from 'configurator/util'

class PreviewModal extends Component {
  componentDidMount() {
    setTimeout(() => {
      Prism.highlightAll($('.prism'))
    }, 5)
  }

  render() {
    return (
      <div>
        <p>Files containing project settings.</p>
        <strong>index.js</strong>
        <pre className="prism">
          <code className="prism language-javascript">
            {EntrifyConfigurator(this.props.state).idx}
          </code>
        </pre>
        {this.props.state.css.enabled === true ?
          <div>
          <strong>{this.props.state.config.cssdir}/vendors.{TS(this.props.state.css.transpiller)}</strong>
          <pre className="prism">
            <code className="prism language-javascript">
              {EntrifyConfigurator(this.props.state).vcss}
            </code>
          </pre>
          </div>
        : '' }
        {this.props.state.config.html.enabled === true ?
          <div>
          <strong>index.html</strong>
          <pre className="prism">
            <code className="prism language-json">
              {HtmlifyConfigurator(this.props.state)}
            </code>
          </pre>
          </div>
        : '' }
        <strong>package.json</strong>
        <pre className="prism">
          <code className="prism language-json">
            {JSON.stringify(NpmConfigurator(this.props.state), null, 2)}
          </code>
        </pre>
        <strong>webpack.config.js</strong>
        <pre className="prism">
          <code className="prism language-javascript">
            {WebpackConfigurator(this.props.state)}
          </code>
        </pre>
      </div>
      )
  }
}

export default connect(state => ({state}))(PreviewModal)
