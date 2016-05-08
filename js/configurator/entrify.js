import VendoredJS from './tpl/vendoredjs'
import VendoredCSS from './tpl/vendoredcss'
import Angular1 from './tpl/angular1'


const nodeApp = `
  console.log(\`hello world from \${__dirname}\`)
`

export default function EntrifyConfigurator(state) {
  let entries = { app : null,
    idx : VendoredJS(state),
    vcss: state.css.enabled === true ? VendoredCSS(state) : null ,
    css : ''}

  if (state.config.template === 'node') {
    entries.app = nodeApp
    return entries
  }

  if (state.config.template === 'angular1') {
    entries.app = Angular1(state)
    return entries
  }



  return entries
}
