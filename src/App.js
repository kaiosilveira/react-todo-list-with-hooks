import React from 'react'
import Title from './components/title/Title'
import TodoList from './components/todo-list/TodoList'
import TodoForm from './components/todo-form/TodoForm'
import './App.css'
import usetodos from './custom-hooks/use-todos'

const App = () => {
  const [todos, addTodo, toggleCompleted] = usetodos()
  return (
    <div className='App'>
      <Title text='Todo list' />
      <TodoList todos={todos} toggleCompleted={t => toggleCompleted(t._id)} />
      <TodoForm onSubmit={addTodo} />
    </div>
  )
}

export default App
