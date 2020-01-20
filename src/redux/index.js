import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import todos from './todos'
import todosLogics from './todos/logics'

const logics = [...todosLogics]

const rootReducer = combineReducers({ todos })
const store = createStore(rootReducer, applyMiddleware(createLogicMiddleware(logics)))

export default store
