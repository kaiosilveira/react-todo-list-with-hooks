import React from 'react'
import Todo from './todo/Todo'
import useTodos from '../../custom-hooks/use-todos'

const TodoList = () => {
  const { todos, toggleCompleted } = useTodos()
  return (
    <div className='todos'>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} onClick={() => toggleCompleted(todo._id)} />
      ))}
    </div>
  )
}

export default TodoList
