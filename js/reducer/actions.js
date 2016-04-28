export default class Actions {
  static TOGGLE_HTML(checked = false) {
    return {
      type : 'TOGGLE_HTML',
      payload : {checked}
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
