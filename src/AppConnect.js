import React, { Component } from 'react'
import { connect } from 'react-redux'

import users from './fixtures/someArrayOfObjects'
import { actionTypes } from './actions/number'
import { loadUsers, loadUsersComplete, toggleUserExtra } from './actions/users'

class AppConnect extends Component {
  handleAddClick = (evt) => {
    evt.preventDefault()
    this.props.dispatch({ type: actionTypes.ADD })
  }

  handleLoadUsers = (evt) => {
    evt.preventDefault()
    this.props.dispatch(loadUsers())
    // Did ajax request got good data
    setTimeout(() => {
      this.props.dispatch(loadUsersComplete(users))
    }, 1500)
  }

  handleExpandInfo = (user) => {
    this.props.dispatch(toggleUserExtra(user))
  }

  render () {
    const usersLoading = (this.props.usersLoading) ? <h4>Loading...</h4> : null

    const users = this.props.users.map((user) => {
      const expandedInfo = user.isExpanded ? <small><br />{user.extra}</small> : null

      return (
        <h5 key={user.id}>
          {user.name}
          {expandedInfo}
          <br />
          <a href onClick={(evt) => {
            evt.preventDefault()
            this.handleExpandInfo(user)
          }}>{(user.isExpanded) ? '-' : '+'}</a>
        </h5>
      )
    })

    return (
      <div className="App">
        <h1>Current Value (With Connect) {this.props.numberValue}</h1>
        <button type="button" onClick={this.handleAddClick}>Add One</button>
        <hr />
        {usersLoading}
        <button type="button" onClick={this.handleLoadUsers}>Load Users</button>
        {users}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    numberValue: state.number.value,
    users: state.users.data,
    usersLoading: state.users.loading
  }
}

export default connect(mapStateToProps)(AppConnect)
