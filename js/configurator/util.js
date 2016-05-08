export const TS = function(ts) {
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


export default null
