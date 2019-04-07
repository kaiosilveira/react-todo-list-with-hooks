let TODOS = [
    { _id: '1', text: 'Learn React', completed: true },
    { _id: '2', text: 'Learn Redux', completed: true },
    { _id: '3', text: 'Learn Redux with React', completed: true },
    { _id: '4', text: 'Learn React Hooks', completed: false },
]

const createRandomId = () => (Math.random() * 999999).toString()
  
export const listTodos = () => new Promise(resolve => {
    setTimeout(() => {
        resolve(TODOS)
    }, 50)
})

export const addTodo = todo => new Promise(resolve => {
    const created = { _id: createRandomId(), ...todo }
    setTimeout(() => {
        TODOS = [...TODOS, created]
        resolve(created)
    }, 50)
})

export const updateTodo = todo => new Promise(resolve => {
    setTimeout(() => {
        TODOS = TODOS.map(t => t._id === todo._id ? todo : t)
        resolve(todo)
    }, 50)
})