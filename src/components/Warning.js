import React from 'react'
import { connect } from 'react-redux'

const styles = {
  bad: {
    color: 'green',
    backgroundColor: 'orange',
    fontWeight: 'bold',
    margin: '10px',
    width: '500px',
    border: 'solid 1px orange'
  }
}

const Warning = ({ tooMany }) => {
  if (tooMany) {
    return <h1 style={styles.bad}>This list is getting pretty long</h1>
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  const tooMany = state.postit.length > 10
  return { tooMany }
}

export default connect(mapStateToProps)(Warning)
