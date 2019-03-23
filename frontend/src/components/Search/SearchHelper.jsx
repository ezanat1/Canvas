import React, { Component } from "react";
import axios from "axios";
import SearchCourse from "./SearchCourse";
import CourseItem from "./CourseItem";

class SearchHelper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: []
    };
    this.searchClass = this.searchClass.bind(this);
  }
  // componentDidMount() {
  //   console.log("Component Did Mount of Class Main");
  //   axios
  //     .get("students/class")
  //     .then(res => {
  //       this.setState({
  //         class: res.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   console.log("data", this.state.class);
  // }

  componentWillMount() {
    console.log("Component Will Mount of Products Main");
  }
  searchClass = event => {
    event.preventDefault();

    const value = event.target.classSearch.value;
    var data = {
      classSearch: value
    };
    console.log(value);

    axios.post("students/searchClass", data).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        this.setState({
          class: res.data
        });
      }
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div>
            <SearchCourse searchClass={this.searchClass} />
            <CourseItem class={this.state.class} />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchHelper;
