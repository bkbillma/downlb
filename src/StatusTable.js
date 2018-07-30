import React, { Component } from 'react';


class StatusTable extends Component {

  constructor(props) {
    super(props);

    let users = this.get_users();
    this.state = {users: users};
  }

  get_users() {
    let users = [{name: "brad"}, {name: "adam"}];
    return users;
  }

  render_row(props) {
    return (
      <tr>
        <td>{props.name}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table>
        {this.state.users.map(this.render_row)}
        </table>
      </div>
    );
  }
}

export default StatusTable;
