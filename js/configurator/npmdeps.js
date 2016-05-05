let Conf = {
  devDependencies : {
    webpack : 'latest'
  }
}

let hasDep = (conf, dep) => conf.devDependencies.hasOwnProperty(dep)

let insertDep = (conf, dep) => {
  if (hasDep(conf, dep)) {
    return conf
  }
  conf.devDependencies[dep] = 'latest'
  return conf
}

let frameworksMap = function(fw) {
  switch(fw) {
  case 'angular1':
    return 'angular'
  case 'bootstrap-js':
    return 'bootstrap'
  case 'materialize':
  case 'materialize-js':
    return 'materialize-css'
  case 'foundation':
  case 'foundation-js':
    return 'foundation-sites'
  }
  return fw
}

export default function(state) {
  let conf = {devDependencies : Object.assign({}, Conf.devDependencies)}

/* state.config dependencies */

  if (state.config.extract.enabled === true) {
    conf = insertDep(conf, 'extract-text-webpack-plugin')
  }

  if (state.config.assets.enabled === true) {
    conf = insertDep(conf, 'url-loader')
    conf = insertDep(conf, 'file-loader')
    conf = insertDep(conf, 'resolve-url')
  }

/* state.js dependencies */
  if (state.js.enabled === true) {
    if (state.js.linter === true) {
      conf = insertDep(conf, 'eslint')
      conf = insertDep(conf, 'eslint-loader')

      if (state.js.transpiller.react === true) {
        conf = insertDep(conf, 'eslint-plugin-react')
      }
    }

    if (state.js.transpiller.babel === true || state.js.transpiller.react === true || state.js.transpiller.vue === true) {
      conf = insertDep(conf, 'babel')
      conf = insertDep(conf, 'babel-loader')
      conf = insertDep(conf, 'babel-preset-es2015')
      if (state.js.transpiller.react === true) {
        conf = insertDep(conf, 'babel-preset-react')
        conf = insertDep(conf, 'react')
        conf = insertDep(conf, 'react-dom')
      }

      if (state.js.transpiller.vue === true) {
        conf = insertDep(conf, 'vue')
        conf = insertDep(conf, 'vue-loader')
        conf = insertDep(conf, 'vue-style-loader')
        conf = insertDep(conf, 'vue-html-loader')
      }
    }
  }

/* state.fw dependencies */
  state.fw.forEach((fw) => {
    conf = insertDep(conf, frameworksMap(fw))
  })



  return conf
}
