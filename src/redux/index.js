import { createStore, applyMiddleware } from 'redux'
import { createLogicMiddleware } from 'redux-logic'

const rootReducer = (s, _) => s
const logics = []

const store = createStore(rootReducer, applyMiddleware(createLogicMiddleware(logics)))

export default store
