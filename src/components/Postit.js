import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { togglePostit, deletePostit } from '../reducers/postit'

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'green'
  }
 
}

const Postit = ({ id, name, complete, dispatch }) => (
  <Fragment>
    <li
      style='styles.style' 
      onClick={() => dispatch(togglePostit(id))}
      style={ complete ? styles.complete : {}}
    >
      {name}
    </li>
    <button onClick={() => dispatch(deletePostit(id))}>Delete</button> 
  </Fragment>
)

export default connect()(Postit)