const defaultState = {
  accordionActiveItem: 0
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'SET_ACCORDION_INDEX' : 
      return { ...state, accordionActiveItem: action.payload}
    default:
      return state
  }
}