import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo/Todo'

const TodoList = ({ todos, toggleCompleted }) => (
    <div className="todos">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} onClick={() => toggleCompleted(todo)} />
      ))}
    </div>
)

TodoList.propTypes = {

    todos: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    })).isRequired,

    toggleCompleted: PropTypes.func.isRequired

}

export default TodoList