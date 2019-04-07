import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ todo: { text, completed }, onClick }) => (
    <div className={`todo ${completed ? 'completed' : ''}`} onClick={onClick}>
      <h2>{text}</h2>
    </div>
)

Todo.propTypes = {
    todo: PropTypes.shape({
        _id: PropTypes.string,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }),
    onClick: PropTypes.func.isRequired,
}

export default Todo