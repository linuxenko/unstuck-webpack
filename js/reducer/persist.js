export default key => ({
  write: store => next => action => {
    let result = next(action)
    window.localStorage.setItem(key, JSON.stringify(store.getState()))
    return result
  },
  read: ()=> JSON.parse(window.localStorage.getItem(key))
})
