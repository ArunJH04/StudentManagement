import React from 'react';
import { NavLink } from 'react-router-dom';

export class SideNav extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <NavLink className="nav-link" activeStyle={{ color: 'blue' }} exact to="/list">
              All Students <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink className="nav-link" activeStyle={{ color: 'blue' }} exact to="/add">
              Add Students <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
