const TOGGLE_POSTIT = 'TOGGLE_POSTIT'
const ADD_POSTIT = 'ADD_POSTIT'
const DELETE_POSTIT = 'DELETE_POSTIT'

export const deletePostit = (id) => {
  return { type: DELETE_POSTIT, id }
}

export const togglePostit = (id) => {
  return { type: TOGGLE_POSTIT, id }
}

export const addPostit = (postit) => {
  return { type: ADD_POSTIT, postit }
}

export default ( state = [], action ) => {
  switch(action.type) {
    case ADD_POSTIT:
      return [action.postit, ...state]
    case TOGGLE_POSTIT:
      return state.map( postit => {
        if (postit.id === action.id)
          return {...postit, complete: !postit.complete }
        return postit
      })
    case DELETE_POSTIT:
      return state.filter( t => t.id !== action.id )
    default:
      return state
  }
}

