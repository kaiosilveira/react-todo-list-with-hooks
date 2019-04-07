import React from 'react'
import './App.css'

const todos = [
  { text: 'Learn React', completed: true },
  { text: 'Learn Redux', completed: true },
  { text: 'Learn Redux with React', completed: true },
  { text: 'Learn React Hooks', completed: false },
]

const Todo = ({ todo: { text, completed }, onClick}) => (
  <div className={`todo ${completed ? 'completed' : ''}`} onClick={onClick}>
    <h2>{text}</h2>
  </div>
)

const TodoList = ({ todos }) => (
  <div className="todos">
    {todos.map((todo, index) => <Todo key={index} todo={todo} />)}
  </div>
)

const TodoForm = ({ onSubmit }) => {
  const 
  return (
    <form onSubmit={e => {
      e.preventDefault()
      onSubmit()
    }}>
      <input placeholder="text"/>
      <button type="submit">Add</button>
    </form>
  )
}

const App = () => {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoList todos={todos}/>
      <TodoForm/>
    </div>
  )
}

export default App;
