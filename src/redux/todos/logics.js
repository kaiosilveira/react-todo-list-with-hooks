import * as API from '../../API'
import { createLogic } from 'redux-logic'
import {
  ADD_TODO,
  addTodoSuccess,
  AddTodoError,
  UPDATE_TODO,
  updateTodoSuccess,
  updateTodoError,
  LIST_TODOS,
  listTodosSuccess,
  listTodosError
} from '.'

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

export default [listTodosLogic, addTodoLogic, updateTodoLogic]
