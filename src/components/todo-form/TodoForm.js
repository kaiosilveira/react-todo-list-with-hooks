import React, { useState } from 'react'
import useTodos from '../../custom-hooks/use-todos'

const TodoForm = () => {
  const { addTodo } = useTodos()
  const [text, setText] = useState('')
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        addTodo(text)
        setText('')
      }}
    >
      <input onChange={e => setText(e.target.value)} value={text} placeholder='text' />
      <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm
