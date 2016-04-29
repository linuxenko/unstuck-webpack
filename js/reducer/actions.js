export default class Actions {
  static TOGGLE_HTML(checked = false) {
    return {
      type : 'TOGGLE_HTML',
      payload : {checked}
    }
  }

  static TOGGLE_HTML_TEMPLATE(template = null, checked = false) {
    return {
      type : 'TOGGLE_HTML_TEMPLATE',
      payload : {template, checked}
    }
  }

  static SET_HTML_TEMPLATE_TARGET(template = null, target = '/') {
    return {
      type : 'SET_HTML_TEMPLATE_TARGET',
      payload : {template, target}
    }
  }

  static FW_ADD_FRAMEWORK(fw = null) {
    return {
      type : 'FW_ADD_FRAMEWORK',
      payload : {fw}
    }
  }

  static FW_REMOVE_FRAMEWORK(fw = null) {
    return {
      type : 'FW_REMOVE_FRAMEWORK',
      payload : {fw}
    }
  }

  static TOGGLE_JS(checked = false) {
    return {
      type : 'TOGGLE_JS',
      payload : {checked}
    }
  }

  static TOGGLE_CSS(checked = false) {
    return {
      type : 'TOGGLE_CSS',
      payload : {checked}
    }
  }
}
