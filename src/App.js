import React, { Component } from 'react';
import './App.css';

import users from './fixtures/someArrayOfObjects'
import { actionTypes } from './actions/number'
import { loadUsers, loadUsersComplete, toggleUserExtra } from './actions/users'
import store from './store'

class App extends Component {
  componentWillMount () {
    const currentState = store.getState()

    this.storeSub = store.subscribe(() => {
      const snapshot = store.getState()

      if(snapshot.number.value !== this.state.numberValue) {
        // setState
      }

      this.setState({
        numberValue: snapshot.number.value,
        users: snapshot.users.data,
        usersLoading: snapshot.users.loading
      })
    })

    this.setState({
      numberValue: currentState.number.value,
      users: currentState.users.data,
      usersLoading: currentState.users.loading
    })
  }

  componentWillUnmount () {
    this.storeSub()
  }

  handleAddClick (evt) {
    evt.preventDefault()
    store.dispatch({ type: actionTypes.ADD })
  }

  handleLoadUsers (evt) {
    evt.preventDefault()
    store.dispatch(loadUsers())
    // Did ajax request got good data
    setTimeout(() => {
      store.dispatch(loadUsersComplete(users))
    }, 1500)
  }

  handleExpandInfo (user) {
    store.dispatch(toggleUserExtra(user))
  }

  render() {
    const usersLoading = (this.state.usersLoading) ? <h4>Loading...</h4> : null

    const users = this.state.users.map((user) => {
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
        <h1>Current Value {this.state.numberValue}</h1>
        <button type="button" onClick={this.handleAddClick}>Add One</button>
        <hr />
        {usersLoading}
        <button type="button" onClick={this.handleLoadUsers}>Load Users</button>
        {users}
      </div>
    );
  }
}

export default App
