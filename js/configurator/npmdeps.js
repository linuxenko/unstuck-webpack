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

/* state.html dependencies */
  if (state.html.enabled === true) {
    conf = insertDep(conf, 'url-loader')
    conf = insertDep(conf, 'file-loader')
    conf = insertDep(conf, 'resolve-url')

    if (state.html.templates.jade.enabled === true) {
      conf = insertDep(conf, 'jade-loader')
    }

    if (state.html.templates.markdown.enabled === true) {
      conf = insertDep(conf, 'markdown-loader')
    }

    if (state.html.templates.handlebars.enabled === true) {
      conf = insertDep(conf, 'handlebars-loader')
    }
  }

/* state.css dependencies */
  if (state.css.enabled === true) {
    conf = insertDep(conf, 'css-loader')
    conf = insertDep(conf, 'style-loader')

    if (state.css.autoprefix === true) {
      conf = insertDep(conf, 'precss')
      conf = insertDep(conf, 'postcss-loader')
      conf = insertDep(conf, 'autoprefixer')
    }

    if (state.css.transpiller.less === true) {
      conf = insertDep(conf, 'less')
      conf = insertDep(conf, 'less-loader')
    }

    if (state.css.transpiller.sass === true) {
      conf = insertDep(conf, 'node-sass')
      conf = insertDep(conf, 'sass-loader')
    }

    if (state.css.transpiller.styl === true) {
      conf = insertDep(conf, 'stylus')
      conf = insertDep(conf, 'stylus-loader')
    }
  }

  return conf
}
