import { createStore, applyMiddleware } from 'redux'
import { createLogicMiddleware, createLogic } from 'redux-logic'
import * as API from '../API'
import { createActions } from 'redux-actions'

const LIST_TODOS = 'LIST_TODOS'
const LIST_TODOS_SUCCESS = 'LIST_TODOS_SUCCESS'
const LIST_TODOS_ERROR = 'LIST_TODOS_ERROR'

export const { listTodos, listTodosSuccess, listTodosError } = createActions({
  [LIST_TODOS]: () => ({}),
  [LIST_TODOS_SUCCESS]: todos => ({ todos }),
  [LIST_TODOS_ERROR]: error => ({ error })
})

const listTodosLogic = createLogic({
  type: LIST_TODOS,
  process: (_, dispatch, done) => {
    API.listTodos()
      .then(data => {
        dispatch(listTodosSuccess(data))
      })
      .catch(err => {
        dispatch(listTodosError())
      })
      .finally(done)
  }
})

const logics = [listTodosLogic]

const rootReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case LIST_TODOS_SUCCESS:
      return { todos: action.payload.todos }
    default:
      return state
  }
}
const store = createStore(rootReducer, applyMiddleware(createLogicMiddleware(logics)))

export default store
