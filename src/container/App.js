import React, { Component } from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

export default class App extends Component {
  handleClick (text) {
    console.log('text', text)
  }

  handleChange (filter) {
    console.log('change', filter)
  }

  render () {
    return (
      <div>
        <AddTodo
          onAddClick={this.handleClick} />
        <TodoList
          todos={[{
            text: 'Use Redux',
            completed: true
          }, {
            text: 'Learn to connect it to React',
            completed: false
          }]}
          onTodoClick={todo =>
            console.log('todo clicked', todo)
          } />
        <Footer
          filter='SHOW_ALL'
          onFilterChange={this.handleChange} />
      </div>
    )
  }
}
