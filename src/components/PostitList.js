import React from 'react'
import { connect } from 'react-redux'
import Postit from './Postit'
import Warning from './Warning'

const filtered = (postits, currentFilter) => {
  switch(currentFilter) {
    case 'Active':
      return postits.filter( t => !t.complete )
    case 'Completed':
      return postits.filter( t => t.complete )
    default:
      return postits
  }
}

const PostitList = ({ postit, postitCount, filter }) => (
  <div>
    <h3>There are {postitCount} Post its</h3>
    <Warning />
    <ul>
      { filtered(postit, filter).map( (t) => 
        <Postit key={t.id} {...t} /> 
      )}
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  const { postit, filter } = state
  return { 
    postit,
    filter,
    postitCount: postit.length,
  }
}

export default connect(mapStateToProps)(PostitList)
