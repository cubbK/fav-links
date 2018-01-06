import Duck from 'extensible-duck'

export default new Duck({
  namespace: 'my-app', store: 'widgets',
  types: ['LOAD', 'CREATE', 'UPDATE', 'REMOVE'],
  initialState: {},
  reducer: (state, action, duck) => {
    switch(action.type) {
      // do reducer stuff
      default: return state
    }
  },
  selectors: {
    root: state => state
  },
  creators: (duck) => ({
    loadWidgets:      () => ({ type: duck.types.LOAD }),
    createWidget: widget => ({ type: duck.types.CREATE, widget }),
    updateWidget: widget => ({ type: duck.types.UPDATE, widget }),
    removeWidget: widget => ({ type: duck.types.REMOVE, widget }),
  })
})