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

  return conf
}
