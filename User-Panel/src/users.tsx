import { Component } from 'react';
import { Outlet, Link } from "react-router-dom";

class Users extends Component {
  constructor(props: string) {
    super(props);
  }

  render() {
    return (
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <h1>Users</h1>
        <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-black-500 text-lg">
        React and Tailwind CSS in action
      </p>
        <Link to="/">
        <button type="button">
          Sign Out
        </button>
        </Link>  
      </div>
    );
  }
}

export default Users;