import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    // const body = this.state;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} method="post">
        <br />
        <br />
        <br />
        <br />
        <br />
        <input
          type="text"
          name="name"
          id=""
          placeholder="name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
        />
        <div
          class="g-recaptcha"
          data-sitekey="6LeQD84UAAAAADuFNXidqZRUpfxFqPeRZLm9StEZ"
        ></div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
