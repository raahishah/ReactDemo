import React from "react";

class AddUser extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addUserHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={this.add}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
