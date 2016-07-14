import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  addTodo,
  toggleTodo,
  setVisibilityFilter
} from '../../src/actions/todos'

describe('test todos reducer', () => {
  it('should handle addTodo', () => {
    expect(addTodo('some text')).to.eql({
      type: ADD_TODO,
      text: 'some text'
    })
  })

  it('should handle toggleTodo', () => {
    expect(toggleTodo(1)).to.eql({
      type: TOGGLE_TODO,
      index: 1
    })
  })

  it('should handle setVisibilityFilter', () => {
    expect(setVisibilityFilter('filter')).to.eql({
      type: SET_VISIBILITY_FILTER,
      filter: 'filter'
    })
  })
})
