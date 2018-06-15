import React from 'react'
import { connect } from 'react-redux'
import { incId } from '../reducers/nextId'
import { addPostit } from '../reducers/postit'

class PostitForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name } = this.state
    const { dispatch, id } = this.props
    const postit = { name, id, complete: false }
    dispatch(addPostit(postit))
    dispatch(incId())
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state
    return (
    <div>
        <h3>Add A Post-it </h3>
        <form onSubmit={this.handleSubmit}>
          <input
            value={name}
            onChange={this.handleChange}
            required
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(PostitForm)
