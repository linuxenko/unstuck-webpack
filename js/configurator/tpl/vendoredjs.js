const hasFw = (state, fw) => state.fw.indexOf(fw) !== -1

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

export default function VendoredJS(state) {
  let out = ''

  if (state.css.enabled === true && state.config.cssdir.length > 0 && state.config.cssdir !== '/') {
    out += `\nimport \'./${state.config.cssdir}/vendors.${cssTranspiller(state.css.transpiller)}\'`
    out += `\nimport \'./${state.config.cssdir}/application.${cssTranspiller(state.css.transpiller)}\'`
  }

  if (hasFw(state, 'jquery')) {
    out += '\nwindow.$ = window.jQuery = require(\'jquery\')'
  }

  if (hasFw(state, 'materialize') && hasFw(state, 'materialize-js')) {
    out += '\nimport \'materialize-css/dist/js/materialize.js\''
  }

  if (hasFw(state, 'bootstrap') && hasFw(state, 'bootstrap-js')) {
    out += '\nimport \'bootstrap/dist/js/bootstrap.js\''
  }

  if (hasFw(state, 'foundation') && hasFw(state, 'foundation-js')) {
    out += '\nimport \'foundation-sites/dist/foundation.js\''
  }

  out += `\nimport \'./${state.config.jsdir}/index.js\'`

  return out.replace(/^\n/,'')
}
