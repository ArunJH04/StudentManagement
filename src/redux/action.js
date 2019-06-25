export function addStudent(student) {
  return {
    type: 'ADD_STUDENT',
    student
  };
}

export function deleteStudent(student) {
  return {
    type: 'DELETE_STUDENT',
    student
  };
}
