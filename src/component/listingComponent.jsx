import React, { Component } from "react";

class listingComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    return (
      <div>
        <div>
          {this.props.title
            .filter((value) => {
              return value.username
                .toLowerCase()
                .includes(this.props.description);
            }).map((user) => {
              return (
                <div className="data-container">
                  <h1 key={user.id}>User Name: {user.username}</h1>
                  <p style={{ marginTop: "5rem", marginLeft: "-9rem" }}>
                    Email: {user.email}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default listingComponent;
