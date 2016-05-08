import Actions from 'reducer/actions'

export default function TemplateConfigurator(dispatch, template) {
  dispatch(Actions.RESET())
  dispatch(Actions.CONFIG_TEMPLATE(template))

  if (template === 'node') {
    dispatch(Actions.TOGGLE_JS(true))
    dispatch(Actions.JS_SELECT_TRANSPILLER('babel', true))
    dispatch(Actions.CONFIG_TOGGLE_PLUGIN('html', false))
    dispatch(Actions.CONFIG_TOGGLE_PLUGIN('chunks', false))
    dispatch(Actions.CONFIG_TOGGLE_PLUGIN('extract', false))
    dispatch(Actions.CONFIG_TOGGLE_PLUGIN('assets', false))
  }

  if (template === 'angular1') {
    dispatch(Actions.TOGGLE_JS(true))
    dispatch(Actions.TOGGLE_CSS(true))
    dispatch(Actions.JS_SELECT_TRANSPILLER('babel', true))
    dispatch(Actions.CSS_SELECT_TRANSPILLER('less', true))
    dispatch(Actions.FW_ADD_FRAMEWORK('jquery'))
    dispatch(Actions.FW_ADD_FRAMEWORK('angular1'))
  }

  if (template === 'angular2') {
    dispatch(Actions.TOGGLE_JS(true))
    dispatch(Actions.JS_SELECT_TRANSPILLER('babel', true))
    dispatch(Actions.TOGGLE_CSS(true))
    dispatch(Actions.CSS_SELECT_TRANSPILLER('sass', true))
  }

  if (template === 'react') {
    dispatch(Actions.TOGGLE_JS(true))
    dispatch(Actions.JS_SELECT_TRANSPILLER('react', true))
    dispatch(Actions.TOGGLE_CSS(true))
    dispatch(Actions.CSS_SELECT_TRANSPILLER('sass', true))
  }

  if (template === 'ember') {
    dispatch(Actions.TOGGLE_JS(true))
    dispatch(Actions.JS_SELECT_TRANSPILLER('babel', true))
    dispatch(Actions.TOGGLE_CSS(true))
    dispatch(Actions.CSS_SELECT_TRANSPILLER('sass', true))
    dispatch(Actions.FW_ADD_FRAMEWORK('jquery'))
    dispatch(Actions.FW_ADD_FRAMEWORK('ember'))
    dispatch(Actions.FW_ADD_FRAMEWORK('ember-data'))
  }

  if (template === 'vue') {
    dispatch(Actions.TOGGLE_JS(true))
    dispatch(Actions.JS_SELECT_TRANSPILLER('vue', true))
    dispatch(Actions.TOGGLE_CSS(true))
    dispatch(Actions.CSS_SELECT_TRANSPILLER('styl', true))
  }
}
