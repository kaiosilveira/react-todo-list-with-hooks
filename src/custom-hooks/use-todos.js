import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTodos, addTodo as addTodoAction, updateTodo } from '../redux'

function usetodos() {
  const dispatch = useDispatch()
  const todos = useSelector(({ todos }) => todos)

  useEffect(() => {
    dispatch(listTodos())
  })

  const addTodo = text => dispatch(addTodoAction(text))

  const toggleCompleted = id => {
    const target = todos.find(t => t._id === id)
    dispatch(updateTodo({ ...target, completed: !target.completed }))
  }

  return [todos, addTodo, toggleCompleted]
}

export default usetodos
