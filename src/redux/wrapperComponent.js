import { connect } from 'react-redux';
import { ListStudents } from '../list-students';
import { addStudent, deleteStudent } from './action';
import { AddStudents } from '../add-students';
import { bindActionCreators } from 'C:/Users/arun hiremath/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
function mapStudentsToProps(state) {
  return {
    students: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addStudent }, dispatch);
}

function mapDeleteDispatchToProps(dispatch) {
  return bindActionCreators({ deleteStudent }, dispatch);
}

export const wrapComponent = connect(
  mapStudentsToProps,
  mapDeleteDispatchToProps
)(ListStudents);

export const AddWrapComponentAddStudent = connect(
  mapStudentsToProps,
  mapDispatchToProps
)(AddStudents);
