import React from 'react';

export class AddStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.name,
      grade: this.grade,
      invalidName: '',
      invalidGrade: ''
    };
    console.log(this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleGrade = this.handleGrade.bind(this);
  }

  handleSubmit(event) {
    let data = {
      id: this.props.students.length + 1,
      name: this.state.name,
      grade: this.state.grade
    };
    event.preventDefault();
    console.log(data);
    this.props.addStudent(data);
    this.props.history.push('/list');
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
    if (event.target.value.length < 4) {
      this.setState({
        invalidName: 'Cannot be less than 4 !!'
      });
    } else {
      this.setState({
        invalidName: ''
      });
    }
  }

  handleGrade(event) {
    console.log(event.target.value);
    this.setState({ grade: event.target.value });
    if (event.target.value === '--select--') {
      this.setState({
        invalidGrade: 'select the grade'
      });
    } else {
      this.setState({
        invalidGrade: ''
      });
    }
  }

  render() {
    return (
      <div style={{ width: 20 + 'rem' }}>
        <h6>Add Student :</h6>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            {this.state.invalidName ? (
              <span className="alert alert-danger">{this.state.invalidName}</span>
            ) : (
              ''
            )}
          </div>
          {/* <div className="btn-group">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Small button
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div> */}
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Grade
              </span>
            </div>
            <select
              type="text"
              className="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleGrade}
            >
              <option>--select--</option>
              <option>A</option>
              <option>A+</option>
              <option>B</option>
              <option>B+</option>
              <option>C</option>
              <option>C+</option>
            </select>
          </div>
          <div>
            {this.state.invalidGrade ? (
              <span className="alert alert-danger">{this.state.invalidGrade}</span>
            ) : (
              ''
            )}
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
