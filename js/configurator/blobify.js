import JSZIP from 'jszip'
import {saveAs} from 'FileSaver/index'
import {NpmConfigurator, WebpackConfigurator} from 'configurator'

export default function BlobifyConfigurator(state) {
  let zip = new JSZIP()


  zip.file('package.json', JSON.stringify(NpmConfigurator(state), null, 2))
  zip.file('webpack.config.js', WebpackConfigurator(state))


  zip.generateAsync({type:'blob'}).then(function(content) {
    saveAs(content, 'config.zip')
  })
}
