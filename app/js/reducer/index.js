import actions from '../actions/actions'

const initialStates = {
  latest: {},
};

export default (state = initialStates, action) => {
  switch (action.type) {
    case actions.LATEST:
      return Object.assign({}, state, { latest: action.latest })
    default:
      return state
  }
};