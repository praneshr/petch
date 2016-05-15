import actions from '../actions/actions'

const initialStates = {
  latest: {},
};

export default (state = initialStates, action) => {
  switch (action.type) {
    case actions.LATEST:
      return Object.assign({}, state, { latest: action.latest })
    case actions.SEARCH_BOX:
      return Object.assign({}, state, { searchBox: action.open })
    default:
      return state
  }
};
