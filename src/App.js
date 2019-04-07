import React, { useState } from 'react'
import './App.css'

const Todo = ({ todo: { text, completed }, onClick}) => (
  <div className={`todo ${completed ? 'completed' : ''}`} onClick={onClick}>
    <h2>{text}</h2>
  </div>
)

const TodoList = ({ todos, toggleCompleted }) => (
  <div className="todos">
    {todos.map((todo, index) => (
    <Todo key={index} todo={todo} onClick={() => toggleCompleted(todo)} />
    ))}
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

const Title = ({ text }) => (<h1>{text}</h1>)

const App = () => {

  const [todos, setTodos] = useState([
    { _id: 1, text: 'Learn React', completed: true },
    { _id: 2, text: 'Learn Redux', completed: true },
    { _id: 3, text: 'Learn Redux with React', completed: true },
    { _id: 4, text: 'Learn React Hooks', completed: false },
  ])

  return (
    <div className="App">
      <Title text="Todo list"/>
      <TodoList todos={todos} toggleCompleted={todo => {
        setTodos(todos.map(t => ({
          ...t,
          completed: t._id === todo._id
          ? !t.completed :
          t.completed
        })))
      }}/>
      <TodoForm onSubmit={text => setTodos([...todos, { text, completed: false }])}/>
    </div>
  )
}

export default App;
