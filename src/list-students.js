import React from 'react';

export class ListStudents extends React.Component {
  render() {
    return (
      <div>
        <h6>List Of All Students : </h6> <br />
        <table
          id="example"
          className="table table-striped table-bordered"
          style={{ width: 900 + 'px' }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      this.props.deleteStudent(student.id);
                    }}
                    className="btn btn-outline-danger"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
