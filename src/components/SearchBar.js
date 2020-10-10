import React from "react";

class SearchBar extends React.Component {
  state = {
    title: "harry potter",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.title);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Book Search</label>
            <input
              type="text"
              value={this.state.title}
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
