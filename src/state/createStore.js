import { combineReducers, createStore as reduxCreateStore } from 'redux'

// const initialState = { count: 0 }

const reducer = (state = 0, action) => {
  if (action.type === `INCREMENT`) {
    return state + 1
  }
  return state
}

const root = combineReducers({
  count: reducer,
})

const createStore = () => reduxCreateStore(root)

export default createStore
