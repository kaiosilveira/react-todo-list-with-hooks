import { createActions, handleActions } from 'redux-actions'

export const LIST_TODOS = 'LIST_TODOS'
export const LIST_TODOS_SUCCESS = 'LIST_TODOS_SUCCESS'
export const LIST_TODOS_ERROR = 'LIST_TODOS_ERROR'
export const { listTodos, listTodosSuccess, listTodosError } = createActions({
  [LIST_TODOS]: () => ({}),
  [LIST_TODOS_SUCCESS]: todos => ({ todos }),
  [LIST_TODOS_ERROR]: error => ({ error })
})

export const ADD_TODO = 'ADD_TODO'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR'
export const { addTodo, addTodoSuccess, AddTodoError } = createActions({
  [ADD_TODO]: text => ({ text }),
  [ADD_TODO_SUCCESS]: todo => ({ todo }),
  [ADD_TODO_ERROR]: error => ({ error })
})

export const UPDATE_TODO = 'UPDATE_TODO'
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
export const UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR'
export const { updateTodo, updateTodoSuccess, updateTodoError } = createActions({
  [UPDATE_TODO]: todo => ({ todo }),
  [UPDATE_TODO_SUCCESS]: todo => ({ todo }),
  [UPDATE_TODO_ERROR]: error => ({ error })
})

const INITIAL_STATE = []
const reducer = handleActions(
  {
    [LIST_TODOS_SUCCESS]: (_, { payload: { todos } }) => {
      return [...todos]
    },
    [ADD_TODO_SUCCESS]: (todos, { payload: { todo } }) => {
      return [...todos, todo]
    },
    [UPDATE_TODO_SUCCESS]: (todos, { payload: { todo } }) => {
      return todos.map(t => (t._id === todo._id ? todo : t))
    }
  },
  INITIAL_STATE
)

export default reducer
