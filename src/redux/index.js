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

const ADD_TODO = 'ADD_TODO'
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
const ADD_TODO_ERROR = 'ADD_TODO_ERROR'
export const { addTodo, addTodoSuccess, AddTodoError } = createActions({
  [ADD_TODO]: text => ({ text }),
  [ADD_TODO_SUCCESS]: todo => ({ todo }),
  [ADD_TODO_ERROR]: error => ({ error })
})

const UPDATE_TODO = 'UPDATE_TODO'
const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
const UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR'
export const { updateTodo, updateTodoSuccess, updateTodoError } = createActions({
  [UPDATE_TODO]: todo => ({ todo }),
  [UPDATE_TODO_SUCCESS]: todo => ({ todo }),
  [UPDATE_TODO_ERROR]: error => ({ error })
})

const listTodosLogic = createLogic({
  type: LIST_TODOS,
  process: (_, dispatch, done) => {
    API.listTodos()
      .then(data => {
        dispatch(listTodosSuccess(data))
      })
      .catch(err => {
        dispatch(listTodosError(err))
      })
      .finally(done)
  }
})

const addTodoLogic = createLogic({
  type: ADD_TODO,
  process(
    {
      action: {
        payload: { text }
      }
    },
    dispatch,
    done
  ) {
    API.addTodo({ text, completed: false })
      .then(todo => dispatch(addTodoSuccess(todo)))
      .catch(err => {
        console.log(err)
        dispatch(AddTodoError(err))
      })
      .finally(done)
  }
})

const updateTodoLogic = createLogic({
  type: UPDATE_TODO,
  process(
    {
      action: {
        payload: { todo }
      }
    },
    dispatch,
    done
  ) {
    API.updateTodo(todo)
      .then(updated => dispatch(updateTodoSuccess(updated)))
      .catch(err => dispatch(updateTodoError(err)))
      .finally(done)
  }
})

const logics = [listTodosLogic, addTodoLogic, updateTodoLogic]

const rootReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case LIST_TODOS_SUCCESS:
      return { todos: action.payload.todos }
    case ADD_TODO_SUCCESS:
      return { todos: [...state.todos, action.payload.todo] }
    case UPDATE_TODO_SUCCESS:
      const updated = action.payload.todo
      return { todos: state.todos.map(t => (t._id === updated._id ? updated : t)) }
    default:
      return state
  }
}
const store = createStore(rootReducer, applyMiddleware(createLogicMiddleware(logics)))

export default store
