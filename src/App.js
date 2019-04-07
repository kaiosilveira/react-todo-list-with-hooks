import React, { useState } from 'react'
import './App.css'

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
  const [text, setText] = useState('')
  return (
    <form onSubmit={e => {
      e.preventDefault()
      onSubmit(text)
      setText('')
    }}>
      <input onChange={e => setText(e.target.value)}
         value={text} placeholder="text"
        />
      <button type="submit">Add</button>
    </form>
  )
}

const App = () => {

  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: true },
    { text: 'Learn Redux', completed: true },
    { text: 'Learn Redux with React', completed: true },
    { text: 'Learn React Hooks', completed: false },
  ])

  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoList todos={todos}/>
      <TodoForm onSubmit={text => setTodos([...todos, { text, completed: false }])}/>
    </div>
  )
}

export default App;
