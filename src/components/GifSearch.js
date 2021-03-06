import React, { Component } from "react";

export default class GifSearch extends Component {
  state = {
    query: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchGIFs(this.state.query);
  };

  handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          id="query"
          value={this.state.query}
          onChange={this.handleChange}
        ></input>
        <input type="submit"></input>
      </form>
    );
  }
}
