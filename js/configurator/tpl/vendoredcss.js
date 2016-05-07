const hasFw = (state, fw) => state.fw.indexOf(fw) !== -1

export default function VendoredCSS(state) {
  let out = ''

  if (hasFw(state, 'bootstrap')) {
    out += '\n@import "~bootstrap/dist/css/bootstrap.css";'
  }

  if (hasFw(state, 'materialize')) {
    out += '\n@import "~materialize-css/dist/css/materialize.css";'
  }

  if (hasFw(state, 'foundation')) {
    out += '\n@import "~foundation-sites/dist/foundation.css";'
  }

  if (hasFw(state, 'font-awesome')) {
    out += '\n@import "~font-awesome/css/font-awesome.css";'
  }

  if (hasFw(state, 'normalize')) {
    out += '\n@import "~normalize-css/normalize.css";'
  }

  if (hasFw(state, 'animate.css')) {
    out += '\n@import "~animate.css/animate.css";'
  }

  if (hasFw(state, 'github-markdown-css')) {
    out += '\n@import "~github-markdown-css/github-markdown.css";'
  }

  if (state.css.transpiller.less === true) {
    return out
  }

  return out.replace(/\;/gi, '')
}
