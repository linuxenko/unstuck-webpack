import JSZIP from 'jszip'
import {saveAs} from 'FileSaver/index'
import {NpmConfigurator, WebpackConfigurator, EntrifyConfigurator} from 'configurator'

let cssTranspiller = ts => {
  if (ts.less === true) {
    return 'less'
  }
  if (ts.sass === true) {
    return 'sass'
  }
  if (ts.styl === true) {
    return 'styl'
  }
  return 'css'
}

export default function BlobifyConfigurator(state) {
  let zip = new JSZIP()
  let entries = EntrifyConfigurator(state)

  zip.file('package.json', JSON.stringify(NpmConfigurator(state), null, 2))
  zip.file('webpack.config.js', WebpackConfigurator(state))

  if (state.js.enabled === true) {
    let babelrc = {
      presets: []
    }
    if (state.js.transpiller.babel === true && state.js.transpiller.react === false) {
      babelrc.presets = ['es2015']
    }
    if (state.js.transpiller.react === true) {
      babelrc.presets = ['es2015', 'react']
    }

    zip.file('.babelrc', JSON.stringify(babelrc, null, 2))
  }

  /* EntryPoint */
  if (entries.idx !== null) {
    zip.file('index.js', entries.idx)
  }

  /* Application example */
  let appFolder = zip
  let cssFolder = zip
  if (state.config.jsdir.length > 0 && state.config.jsdir !== '/') {
    appFolder = zip.folder(state.config.jsdir)
  }

  if (state.config.cssdir.length > 0 && state.config.cssdir !== '/') {
    cssFolder = zip.folder(state.config.cssdir)
  }

  if (entries.vcss !== null) {
    cssFolder.file('vendors.' + cssTranspiller(state.css.transpiller), entries.vcss)
  }

  if (entries.css !== null) {
    cssFolder.file('application.' + cssTranspiller(state.css.transpiller), '/* generated by unstuck-webpack */')
  }


  if (entries.app !== null) {
    appFolder.file('index.js', entries.app)
  }

  zip.generateAsync({type:'blob'}).then(function(content) {
    saveAs(content, 'config.zip')
  })
}
