import React, { Component } from "react";
import Navbar from "../User/Navbar";
export default class SearchCourse extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <form onSubmit={this.props.searchClass}>
            <div className="col s12">
              <div className="card">
                <div className="card-content black-text">
                  <h5 className="align-center">Search Class</h5>
                  <input
                    type="text"
                    // value={this.props.searchInput}
                    name="classSearch"
                    placeholder="Search by Course ID,Course Number"
                  />
                  <button type="submit" style={btnColor} className="btn-large">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const btnColor = {
  background: "#1e5abc"
};
