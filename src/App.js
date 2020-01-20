import React from 'react'
import Title from './components/title/Title'
import TodoList from './components/todo-list/TodoList'
import TodoForm from './components/todo-form/TodoForm'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Title text='Todo list' />
      <TodoList />
      <TodoForm />
    </div>
  )
}

export default App
