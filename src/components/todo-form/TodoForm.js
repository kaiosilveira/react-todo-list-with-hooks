import React, { useState } from 'react'
import PropTypes from 'prop-types'

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

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default TodoForm