import React, { useState, useEffect } from 'react'
import Title from './components/title/Title'
import TodoList from './components/todo-list/TodoList'
import TodoForm from './components/todo-form/TodoForm'
import * as API from './API'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { listTodos, addTodo, updateTodo } from './redux'

function usetodos() {
  const dispatch = useDispatch()
  const todos = useSelector(({ todos }) => todos)
  return todos
}

const App = () => {
  const dispatch = useDispatch()
  const todos = usetodos()
  console.log(todos)

  useEffect(() => {
    dispatch(listTodos())
  }, [])

  const handleToggleCompleted = todo => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }))
  }

  const handleAddTodo = text => dispatch(addTodo(text))

  return (
    <div className='App'>
      <Title text='Todo list' />
      <TodoList todos={todos} toggleCompleted={handleToggleCompleted} />
      <TodoForm onSubmit={handleAddTodo} />
    </div>
  )
}

export default App
