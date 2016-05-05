import Actions from 'reducer/actions'
import store from 'reducer'

const hasFw = fw => store.getState().fw.indexOf(fw) !== -1

export default function FrameworkConfigurator(dispatch, fw) {
  dispatch(Actions.FW_ADD_FRAMEWORK(fw))

  if (hasFw('bootstrap') && hasFw('bootstrap-js')) {
    dispatch(Actions.FW_ADD_FRAMEWORK('jquery'))
  }

  if (hasFw('materialize') && hasFw('materialize-js')) {
    dispatch(Actions.FW_ADD_FRAMEWORK('jquery'))
  }

  if (hasFw('foundation') && hasFw('foundation-js')) {
    dispatch(Actions.FW_ADD_FRAMEWORK('jquery'))
  }

}
