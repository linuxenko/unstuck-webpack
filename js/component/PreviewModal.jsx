import React, {Component} from 'react'


class PreviewModal extends Component {

  npmMarkup() {
    return {
      test : 123,
      'aaa' : 'bbb'
    }
  }

  render() {
    return (
      <div>
        <pre className="language-javascript">
          {JSON.stringify(this.npmMarkup(), null, 2) }
        </pre>
      </div>
      )
  }
}

export default PreviewModal
