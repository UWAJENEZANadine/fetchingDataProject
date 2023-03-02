import React, { Component } from "react";
import { Skeleton } from "antd";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   name: "Nadine"
    // }

    this.state = {
      users: [],
      filterdata: "",
      loading: true,
    };
  }
  componentDidMount() {
    console.log("didMount");
    fetch("https://course-api.com/react-tours-project")
      .then((res) => res.json())
      .then((nameList) => {
        this.setState({ users: nameList, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <div style={{ marginLeft: "3rem", paddingTop: "5rem", width: "80%" }}>
          <p
            className="paragraph"
            style={{ fontFamily: "sans-serif", fontSize: "2.8rem" }}
          >
            Loading...........
          </p>
          <Skeleton active />
        </div>
      );
    }
    return (
      <div className="App">
        <h1 className="header">List of users</h1>
        <input
          type="text"
          onChange={(e) => this.setState({ filterdata: e.target.value })}
          placeholder="search here"
        />
        {
        this.state.users
          .filter((value) => {
            return value.name.toLowerCase().includes(this.state.filterdata);
          })
          .map((user) => {
            return (
              <div className="data-container">
                <h1 key={user.id}>{user.name}</h1>
                <p>{user.info}</p>
              </div>
            );
          })
          }

        {/* <h1>{this.state. name}</h1> */}
        {/* <button onClick={() => this.setState({name: "UWAJENEZA"})}>Send</button> */}
      </div>
    );
  }
}
export default App;
