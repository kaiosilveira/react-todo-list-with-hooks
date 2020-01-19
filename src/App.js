import React, { useState, useEffect } from 'react'
import Title from './components/title/Title'
import TodoList from './components/todo-list/TodoList'
import TodoForm from './components/todo-form/TodoForm'
import * as API from './API'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux'

const App = () => {

  useEffect(() => { API.listTodos().then(todos => setTodos(todos)) })

  const [todos, setTodos] = useState([])

  const handleToggleCompleted = todo => {
    API
    .updateTodo({ ...todo, completed: !todo.completed })
    .then(todo => setTodos(todos.map(t => t._id === todo._id ? todo : t)))
  }

  const handleAddTodo = text => API
    .addTodo({ text, completed: false })
    .then(todo => setTodos([...todos, todo]))

  return (
    <div className="App">
      <Provider store={store}>
      <Title text="Todo list"/>
      <TodoList todos={todos} toggleCompleted={handleToggleCompleted}/>
      <TodoForm onSubmit={handleAddTodo}/>
      </Provider>
    </div>
  )
}

export default App
